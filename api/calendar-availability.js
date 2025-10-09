// Vercel Serverless Function for Google Calendar Availability
import { google } from 'googleapis';

export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    // Disable caching to ensure real-time availability data
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { date } = req.query;

        if (!date) {
            return res.status(400).json({ error: 'Date parameter is required' });
        }

        const weekStart = new Date(date);

        // Check if we should use mock data
        const useMock = process.env.USE_MOCK_CALENDAR === 'true' ||
                       !process.env.GOOGLE_CALENDAR_ID ||
                       !process.env.GOOGLE_SERVICE_ACCOUNT_KEY;

        let availability;
        if (useMock) {
            console.log('Using mock calendar data');
            availability = generateMockAvailability(weekStart);
        } else {
            console.log('Fetching real Google Calendar data');
            console.log('Calendar ID:', process.env.GOOGLE_CALENDAR_ID);
            availability = await checkGoogleCalendarAvailability(weekStart);
        }

        return res.status(200).json({
            success: true,
            availability,
            usedMockData: useMock
        });

    } catch (error) {
        console.error('Calendar API Error:', error);
        // Fallback to mock data on error
        const weekStart = new Date(req.query.date);
        const mockData = generateMockAvailability(weekStart);

        return res.status(200).json({
            success: true,
            availability: mockData,
            usedMockData: true,
            error: 'Failed to fetch real calendar data, using mock data'
        });
    }
}

// Mock availability generator (replace with Google Calendar API)
function generateMockAvailability(weekStart) {
    const availability = {};

    for (let i = 0; i < 5; i++) {
        // Work in UTC to avoid timezone issues across different Vercel regions
        const date = new Date(weekStart);
        date.setUTCDate(date.getUTCDate() + i);
        const dateKey = date.toISOString().split('T')[0];

        availability[dateKey] = {
            morning: Math.random() > 0.3,   // 70% available (10:00-13:00, 180 min)
            midday: Math.random() > 0.3,    // 70% available (13:00-13:30, 30 min)
            afternoon: Math.random() > 0.3  // 70% available (13:30-16:30, 180 min)
        };
    }

    return availability;
}

// Helper function to convert local Bucharest time to RFC3339 format
function toBucharestTime(dateStr, timeStr) {
    // Create a date object for the specific date and time in Bucharest
    // Bucharest is UTC+2 (EET) in winter, UTC+3 (EEST) in summer
    const testDate = new Date(`${dateStr}T${timeStr}+02:00`);
    const month = parseInt(dateStr.split('-')[1]);
    const day = parseInt(dateStr.split('-')[2]);

    // Rough DST check: EEST is from last Sunday in March to last Sunday in October
    // For simplicity: March-October use +03:00, November-February use +02:00
    const isDST = month >= 3 && month <= 10;
    const offset = isDST ? '+03:00' : '+02:00';

    return `${dateStr}T${timeStr}${offset}`;
}

// Google Calendar API Integration
async function checkGoogleCalendarAvailability(weekStart) {
    try {
        const auth = new google.auth.GoogleAuth({
            credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY),
            scopes: ['https://www.googleapis.com/auth/calendar.readonly'],
        });

        const calendar = google.calendar({ version: 'v3', auth });
        const availability = {};

        for (let i = 0; i < 5; i++) {
            // Work in UTC to avoid timezone issues across different Vercel regions
            const date = new Date(weekStart);
            date.setUTCDate(date.getUTCDate() + i);
            const dateKey = date.toISOString().split('T')[0];

            // Create dates in Romanian timezone (Europe/Bucharest)
            const dateStr = dateKey; // YYYY-MM-DD

            // Check morning slot (10:00-13:00 Bucharest time, 180 min)
            const morningStart = toBucharestTime(dateStr, '10:00:00');
            const morningEnd = toBucharestTime(dateStr, '13:00:00');

            // Check midday slot (13:00-13:30 Bucharest time, 30 min - Laser only)
            const middayStart = toBucharestTime(dateStr, '13:00:00');
            const middayEnd = toBucharestTime(dateStr, '13:30:00');

            // Check afternoon slot (13:30-16:30 Bucharest time, 180 min)
            const afternoonStart = toBucharestTime(dateStr, '13:30:00');
            const afternoonEnd = toBucharestTime(dateStr, '16:30:00');

            // Log the calendar ID being used
            console.log(`Checking calendar: ${process.env.GOOGLE_CALENDAR_ID}`);

            // Fetch events for all time slots in parallel for better performance
            const [morningEvents, middayEvents, afternoonEvents] = await Promise.all([
                calendar.events.list({
                    calendarId: process.env.GOOGLE_CALENDAR_ID,
                    timeMin: morningStart,
                    timeMax: morningEnd,
                    singleEvents: true,
                    timeZone: 'Europe/Bucharest',
                }).catch(err => {
                    console.error('Morning events error:', err.message);
                    return { data: { items: [] } };
                }),
                calendar.events.list({
                    calendarId: process.env.GOOGLE_CALENDAR_ID,
                    timeMin: middayStart,
                    timeMax: middayEnd,
                    singleEvents: true,
                    timeZone: 'Europe/Bucharest',
                }).catch(err => {
                    console.error('Midday events error:', err.message);
                    return { data: { items: [] } };
                }),
                calendar.events.list({
                    calendarId: process.env.GOOGLE_CALENDAR_ID,
                    timeMin: afternoonStart,
                    timeMax: afternoonEnd,
                    singleEvents: true,
                    timeZone: 'Europe/Bucharest',
                }).catch(err => {
                    console.error('Afternoon events error:', err.message);
                    return { data: { items: [] } };
                })
            ]);

            console.log(`\n========== Date: ${dateKey} ==========`);
            console.log(`Morning slot (${morningStart} - ${morningEnd} Bucharest time): ${morningEvents.data.items.length} events`);
            if (morningEvents.data.items.length > 0) {
                morningEvents.data.items.forEach(event => {
                    console.log(`  - Event: "${event.summary}"`);
                    console.log(`    Start: ${event.start.dateTime || event.start.date}`);
                    console.log(`    End: ${event.end.dateTime || event.end.date}`);
                });
            }

            console.log(`\nMidday slot (${middayStart} - ${middayEnd} Bucharest time): ${middayEvents.data.items.length} events`);
            if (middayEvents.data.items.length > 0) {
                middayEvents.data.items.forEach(event => {
                    console.log(`  - Event: "${event.summary}"`);
                    console.log(`    Start: ${event.start.dateTime || event.start.date}`);
                    console.log(`    End: ${event.end.dateTime || event.end.date}`);
                });
            }

            console.log(`\nAfternoon slot (${afternoonStart} - ${afternoonEnd} Bucharest time): ${afternoonEvents.data.items.length} events`);
            if (afternoonEvents.data.items.length > 0) {
                afternoonEvents.data.items.forEach(event => {
                    console.log(`  - Event: "${event.summary}"`);
                    console.log(`    Start: ${event.start.dateTime || event.start.date}`);
                    console.log(`    End: ${event.end.dateTime || event.end.date}`);
                });
            }
            console.log(`========================================\n`);

            availability[dateKey] = {
                morning: morningEvents.data.items.length === 0,
                midday: middayEvents.data.items.length === 0,
                afternoon: afternoonEvents.data.items.length === 0,
            };
        }

        return availability;
    } catch (error) {
        console.error('Google Calendar API Error:', error);
        throw error;
    }
}
