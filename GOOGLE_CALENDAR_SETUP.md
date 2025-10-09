# Google Calendar API Setup Guide

This guide will walk you through setting up Google Calendar integration for the booking system.

## Overview

The booking calendar uses Google Calendar API to check availability in real-time. When not configured, it falls back to mock data for development.

## Prerequisites

- Google account with access to Google Cloud Console
- A Google Calendar to use for bookings

## Step-by-Step Setup

### 1. Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Select a project" → "New Project"
3. Enter project name: `micropigmentation-booking` (or your preference)
4. Click "Create"

### 2. Enable Google Calendar API

1. In your new project, go to "APIs & Services" → "Library"
2. Search for "Google Calendar API"
3. Click on "Google Calendar API"
4. Click "Enable"

### 3. Create a Service Account

1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "Service Account"
3. Fill in the details:
   - **Service account name**: `calendar-reader`
   - **Service account ID**: (auto-generated)
   - **Description**: `Read calendar availability for booking system`
4. Click "Create and Continue"
5. **Grant this service account access to project** (Optional - skip this step)
6. Click "Continue" and then "Done"

### 4. Create and Download Service Account Key

1. In the "Credentials" page, find your newly created service account
2. Click on the service account email
3. Go to the "Keys" tab
4. Click "Add Key" → "Create new key"
5. Select "JSON" format
6. Click "Create"
7. **Save the downloaded JSON file securely** - you'll need this for environment variables

### 5. Share Your Calendar with the Service Account

1. Open [Google Calendar](https://calendar.google.com/)
2. Find the calendar you want to use for bookings (or create a new one)
3. Click the three dots next to the calendar → "Settings and sharing"
4. Scroll down to "Share with specific people"
5. Click "Add people"
6. Enter the service account email (from the JSON file, looks like: `calendar-reader@your-project.iam.gserviceaccount.com`)
7. Set permission to "See all event details"
8. Click "Send"

### 6. Get Your Calendar ID

1. In the same calendar settings page, scroll down to "Integrate calendar"
2. Copy the **Calendar ID** (usually your email or something like `abc123@group.calendar.google.com`) (pauline.stanciu@yahoo.com)
3. Save this - you'll need it for environment variables

### 7. Set Up Environment Variables

#### For Local Development:

1. Create a `.env` file in the project root (copy from `.env.example`):
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your credentials:
   ```env
   GOOGLE_CALENDAR_ID=your-calendar-id@gmail.com
   GOOGLE_SERVICE_ACCOUNT_KEY={"type":"service_account","project_id":"your-project",...}
   USE_MOCK_CALENDAR=false
   ```

   **Note**: For `GOOGLE_SERVICE_ACCOUNT_KEY`, paste the entire contents of your JSON file as a single line.

#### For Vercel Deployment:

1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add the following variables:

   **GOOGLE_CALENDAR_ID**
   - Value: Your calendar ID (e.g., `your-email@gmail.com`)

   **GOOGLE_SERVICE_ACCOUNT_KEY**
   - Value: Paste the entire JSON key file content as a single line
   - Example: `{"type":"service_account","project_id":"your-project-id","private_key_id":"...","private_key":"-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n","client_email":"calendar-reader@your-project.iam.gserviceaccount.com",...}`

   **USE_MOCK_CALENDAR** (optional)
   - Value: `false`
   - Set to `true` to use mock data instead of real calendar

4. Redeploy your application for the changes to take effect

## Testing the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Open the booking modal on your website

3. Check the browser console - you should see:
   - `"Fetching real Google Calendar data"` if configured correctly
   - `"Using mock calendar data"` if using mock mode

4. The calendar should display real availability based on events in your Google Calendar

## How It Works

### Time Slots

The system checks availability for three time slots per day (Monday-Friday):

- **Morning**: 10:00-13:00 (180 minutes) - For micropigmentation services
- **Midday**: 13:00-13:30 (30 minutes) - For laser services only
- **Afternoon**: 13:30-16:30 (180 minutes) - For micropigmentation services

### Availability Logic

- A slot is **available** (green) if there are NO events in that time range
- A slot is **busy** (red) if there are ANY events in that time range
- The system checks one week (Monday-Friday) at a time

### Creating Bookings in Calendar

When a client books via WhatsApp:

1. Manually create an event in your Google Calendar for the booked time
2. The calendar will automatically show that slot as unavailable
3. The event title/description can be anything (e.g., "Micropigmentare Sprâncene - Client Name")

## Troubleshooting

### "Using mock calendar data" appears in console

**Possible causes:**
- Environment variables not set correctly
- `USE_MOCK_CALENDAR=true` in environment variables
- Service account key JSON is malformed

**Solution:** Verify your `.env` file or Vercel environment variables

### "Calendar API Error" in logs

**Possible causes:**
- Service account doesn't have access to the calendar
- Calendar ID is incorrect
- Google Calendar API not enabled in Google Cloud Console

**Solution:**
1. Double-check calendar sharing settings
2. Verify Calendar ID is correct
3. Ensure Google Calendar API is enabled in your Google Cloud project

### Slots showing incorrectly

**Possible causes:**
- Timezone mismatch
- Events created in wrong time format

**Solution:**
- Ensure calendar is set to Europe/Bucharest timezone
- Check that events are created with correct times

## Security Best Practices

1. **Never commit `.env` file to git** - it's already in `.gitignore`
2. **Keep service account key secure** - treat it like a password
3. **Use read-only permissions** - service account only needs "See all event details"
4. **Rotate keys periodically** - create new service account keys every 90 days
5. **Monitor API usage** - check Google Cloud Console for unusual activity

## Support

For issues with:
- **Google Calendar API**: [Google Calendar API Documentation](https://developers.google.com/calendar/api)
- **Service Accounts**: [Google Cloud Service Accounts Documentation](https://cloud.google.com/iam/docs/service-accounts)

## Development Mode

To develop without Google Calendar configured:

1. Set in `.env`:
   ```env
   USE_MOCK_CALENDAR=true
   ```

2. Or simply don't set `GOOGLE_CALENDAR_ID` and `GOOGLE_SERVICE_ACCOUNT_KEY`

The system will automatically use mock data for testing.
