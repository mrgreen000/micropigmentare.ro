## User Flow

1. CTA "Programeaza o Consultatie" 
   ↓
2. Modal/Section opens with service selection + calendar
   ↓
3. User selects service (required)
   ↓
4. User clicks available time slot
   ↓
5. WhatsApp opens directly with pre-filled message
   ↓
6. User sends message
   ↓
7. Manual qualification and confirmation

## WhatsApp Message Template

Bună! Aș dori să programez:
🎯 Serviciu: [SELECTED_SERVICE]
📅 Data: [DATE]
⏰ Ora: [TIME_SLOT]
Vă rog să îmi confirmați disponibilitatea.

## UI Layout Structure

┌──────────────────────────────────────────┐
│         PROGRAMEAZĂ CONSULTAȚIE          │
├──────────────────────────────────────────┤
│                                          │
│  Selectează serviciul dorit:            │
│                                          │
│  ◉ Micropigmentare Sprâncene            │
│  ○ Micropigmentare Buze                 │
│  ○ Îndepărtare Tatuaj Laser             │
│  ○ Întreținere Micropigmentare          │
│                                          │
├──────────────────────────────────────────┤
│                                          │
│  Selectează data și ora:                │
│                                          │
│  Săptămâna 1-7 Octombrie 2025           │
│  [< Prev]              [Next >]         │
│                                          │
│       L    M    M    J    V    S    D   │
│       1    2    3    4    5    6    7   │
│                                          │
│ 10-13 ✅   ✅   ❌   ✅   ✅   -    -   │
│ 13-16 ❌   ✅   ✅   ✅   ❌   -    -   │
│                                          │
│  Legend:                                 │
│  ✅ Disponibil  ❌ Ocupat  - Weekend    │
│                                          │
└──────────────────────────────────────────┘



## Component Behavior Notes
### Service Selection

Required: User must select service before clicking time slot
Visual feedback: Selected service highlighted
Persistence: Selection remains when browsing different weeks

### Calendar Display

Work week only: Monday-Friday
Two slots per day: 10:00-13:00 (morning), 13:00-16:00 (afternoon)

### Visual states:

✅ Green/Available - Clickable
❌ Red/Busy - Not clickable
- Gray/Weekend - Not clickable


Week navigation: Previous/Next arrows to browse weeks
Current week: Highlighted by default

### Slot Selection

Click behavior: Available slot → Immediate WhatsApp redirect
No service selected: Show alert/tooltip "Selectează mai întâi serviciul"
Busy slot clicked: No action (optionally show "Indisponibil")

## Technical Implementation Notes
### stack
Vercel

## Google Calendar Integration

API calls: Check for events in 10:00-13:00 and 13:00-16:00 ranges
Update frequency: On page load or every 5 minutes if page stays open
Timezone: Romanian time (Europe/Bucharest)

## WhatsApp Integration
Base URL: https://wa.me/40XXXXXXXXX?text=
Message: URL encoded
Opens in: New tab/window (mobile: WhatsApp app)

## Services List

Micropigmentare Sprâncene - Eyebrow micropigmentation
Micropigmentare Buze - Lip micropigmentation
Îndepărtare Tatuaj Laser - Laser tattoo removal
Întreținere Micropigmentare - Micropigmentation maintenance

Future Enhancements (Optional)