import { google } from 'googleapis';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const GET = async ({ request }) => {
  const url = new URL(request.url);
  const date = url.searchParams.get("date");
  if (!date) {
    return new Response(JSON.stringify({ error: "Date parameter is required" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
  try {
    const weekStart = new Date(date);
    const useMock = process.env.USE_MOCK_CALENDAR === "true" || !process.env.GOOGLE_CALENDAR_ID || !process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
    let availability;
    if (useMock) {
      console.log("Using mock calendar data");
      availability = generateMockAvailability(weekStart);
    } else {
      console.log("Fetching real Google Calendar data");
      availability = await checkGoogleCalendarAvailability(weekStart);
    }
    return new Response(JSON.stringify({
      success: true,
      availability,
      usedMockData: useMock
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  } catch (error) {
    console.error("Calendar API Error:", error);
    const weekStart = new Date(date);
    const mockData = generateMockAvailability(weekStart);
    return new Response(JSON.stringify({
      success: true,
      availability: mockData,
      usedMockData: true,
      error: "Failed to fetch real calendar data, using mock data"
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
};
function generateMockAvailability(weekStart) {
  const availability = {};
  for (let i = 0; i < 5; i++) {
    const date = new Date(weekStart);
    date.setDate(weekStart.getDate() + i);
    const dateKey = date.toISOString().split("T")[0];
    availability[dateKey] = {
      morning: Math.random() > 0.3,
      // 70% available (10:00-13:00, 180 min)
      midday: Math.random() > 0.3,
      // 70% available (13:00-13:30, 30 min)
      afternoon: Math.random() > 0.3
      // 70% available (13:30-16:30, 180 min)
    };
  }
  return availability;
}
async function checkGoogleCalendarAvailability(weekStart) {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY),
      scopes: ["https://www.googleapis.com/auth/calendar.readonly"]
    });
    const calendar = google.calendar({ version: "v3", auth });
    const availability = {};
    for (let i = 0; i < 5; i++) {
      const date = new Date(weekStart);
      date.setDate(weekStart.getDate() + i);
      const dateKey = date.toISOString().split("T")[0];
      const dateStr = date.toISOString().split("T")[0];
      const morningStart = /* @__PURE__ */ new Date(`${dateStr}T10:00:00+03:00`);
      const morningEnd = /* @__PURE__ */ new Date(`${dateStr}T13:00:00+03:00`);
      const middayStart = /* @__PURE__ */ new Date(`${dateStr}T13:00:00+03:00`);
      const middayEnd = /* @__PURE__ */ new Date(`${dateStr}T13:30:00+03:00`);
      const afternoonStart = /* @__PURE__ */ new Date(`${dateStr}T13:30:00+03:00`);
      const afternoonEnd = /* @__PURE__ */ new Date(`${dateStr}T16:30:00+03:00`);
      console.log(`Checking calendar: ${process.env.GOOGLE_CALENDAR_ID}`);
      const [morningEvents, middayEvents, afternoonEvents] = await Promise.all([
        calendar.events.list({
          calendarId: process.env.GOOGLE_CALENDAR_ID,
          timeMin: morningStart.toISOString(),
          timeMax: morningEnd.toISOString(),
          singleEvents: true,
          timeZone: "Europe/Bucharest"
        }).catch((err) => {
          console.error("Morning events error:", err.message);
          return { data: { items: [] } };
        }),
        calendar.events.list({
          calendarId: process.env.GOOGLE_CALENDAR_ID,
          timeMin: middayStart.toISOString(),
          timeMax: middayEnd.toISOString(),
          singleEvents: true,
          timeZone: "Europe/Bucharest"
        }).catch((err) => {
          console.error("Midday events error:", err.message);
          return { data: { items: [] } };
        }),
        calendar.events.list({
          calendarId: process.env.GOOGLE_CALENDAR_ID,
          timeMin: afternoonStart.toISOString(),
          timeMax: afternoonEnd.toISOString(),
          singleEvents: true,
          timeZone: "Europe/Bucharest"
        }).catch((err) => {
          console.error("Afternoon events error:", err.message);
          return { data: { items: [] } };
        })
      ]);
      console.log(`Date: ${dateKey}`);
      console.log(`  Morning: ${morningEvents.data.items?.length || 0} events`);
      console.log(`  Midday: ${middayEvents.data.items?.length || 0} events`);
      console.log(`  Afternoon: ${afternoonEvents.data.items?.length || 0} events`);
      availability[dateKey] = {
        morning: (morningEvents.data.items?.length || 0) === 0,
        midday: (middayEvents.data.items?.length || 0) === 0,
        afternoon: (afternoonEvents.data.items?.length || 0) === 0
      };
    }
    return availability;
  } catch (error) {
    console.error("Google Calendar API Error:", error);
    throw error;
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
