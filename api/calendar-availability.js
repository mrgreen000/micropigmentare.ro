// Vercel Serverless Function for Google Calendar Availability
// Updated to use CommonJS for better compatibility
const { google } = require('googleapis');

module.exports = async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

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
        const date = new Date(weekStart);
        date.setDate(weekStart.getDate() + i);
        const dateKey = date.toISOString().split('T')[0];

        availability[dateKey] = {
            morning: Math.random() > 0.3,   // 70% available (10:00-13:00, 180 min)
            midday: Math.random() > 0.3,    // 70% available (13:00-13:30, 30 min)
            afternoon: Math.random() > 0.3  // 70% available (13:30-16:30, 180 min)
        };
    }

    return availability;
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
            const date = new Date(weekStart);
            date.setDate(weekStart.getDate() + i);
            const dateKey = date.toISOString().split('T')[0];

            // Create dates in Romanian timezone (Europe/Bucharest)
            // Use UTC date string and manually add Romanian time to ensure correct timezone
            const dateStr = date.toISOString().split('T')[0]; // YYYY-MM-DD

            // Check morning slot (10:00-13:00 Bucharest time, 180 min)
            const morningStart = new Date(`${dateStr}T10:00:00+03:00`);
            const morningEnd = new Date(`${dateStr}T13:00:00+03:00`);

            // Check midday slot (13:00-13:30 Bucharest time, 30 min - Laser only)
            const middayStart = new Date(`${dateStr}T13:00:00+03:00`);
            const middayEnd = new Date(`${dateStr}T13:30:00+03:00`);

            // Check afternoon slot (13:30-16:30 Bucharest time, 180 min)
            const afternoonStart = new Date(`${dateStr}T13:30:00+03:00`);
            const afternoonEnd = new Date(`${dateStr}T16:30:00+03:00`);

            // Log the calendar ID being used
            console.log(`Checking calendar: ${process.env.GOOGLE_CALENDAR_ID}`);

            // Fetch events for all time slots in parallel for better performance
            const [morningEvents, middayEvents, afternoonEvents] = await Promise.all([
                calendar.events.list({
                    calendarId: process.env.GOOGLE_CALENDAR_ID,
                    timeMin: morningStart.toISOString(),
                    timeMax: morningEnd.toISOString(),
                    singleEvents: true,
                    timeZone: 'Europe/Bucharest',
                }).catch(err => {
                    console.error('Morning events error:', err.message);
                    return { data: { items: [] } };
                }),
                calendar.events.list({
                    calendarId: process.env.GOOGLE_CALENDAR_ID,
                    timeMin: middayStart.toISOString(),
                    timeMax: middayEnd.toISOString(),
                    singleEvents: true,
                    timeZone: 'Europe/Bucharest',
                }).catch(err => {
                    console.error('Midday events error:', err.message);
                    return { data: { items: [] } };
                }),
                calendar.events.list({
                    calendarId: process.env.GOOGLE_CALENDAR_ID,
                    timeMin: afternoonStart.toISOString(),
                    timeMax: afternoonEnd.toISOString(),
                    singleEvents: true,
                    timeZone: 'Europe/Bucharest',
                }).catch(err => {
                    console.error('Afternoon events error:', err.message);
                    return { data: { items: [] } };
                })
            ]);

            console.log(`Date: ${dateKey}`);
            console.log(`  Morning (${morningStart.toISOString()} - ${morningEnd.toISOString()}): ${morningEvents.data.items.length} events`);
            console.log(`  Midday (${middayStart.toISOString()} - ${middayEnd.toISOString()}): ${middayEvents.data.items.length} events`);
            console.log(`  Afternoon (${afternoonStart.toISOString()} - ${afternoonEnd.toISOString()}): ${afternoonEvents.data.items.length} events`);

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
