import { c as createComponent, a as renderTemplate, b as addAttribute, m as maybeRenderHead } from './astro/server_CcnWJDd-.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const globalDiscount = 20;
const services = [{"id":"sprancene-pudrata","name":"Micropigmentare Sprâncene","subtitle":"Tehnica pudrat","duration":"2-3 ore","durationMinutes":180,"price":1500,"tag":"POPULAR","description":"Prima ședință cu tehnica clasică pentru sprâncene perfect definite și naturale","icon":"eye"},{"id":"sprancene-fir","name":"Micropigmentare Sprâncene","subtitle":"Tehnica fir cu fir","duration":"2-3 ore","durationMinutes":180,"price":1625,"tag":"TRENDING","description":"Prima ședință cu tehnica Powder Brows pentru un efect ombré natural","icon":"badge"},{"id":"buze","name":"Micropigmentare Buze","subtitle":"Tehnica aquarelle","duration":"3 ore","durationMinutes":180,"price":1625,"tag":"PREMIUM","description":"Prima ședință pentru contur perfect și culoare naturală","icon":"lips"},{"id":"retus-sprancene","name":"Retuș Sprâncene / Buze","subtitle":"Perfecționare","duration":"1.5-2 ore","durationMinutes":180,"price":375,"tag":"OPTIONAL","description":"Retuș la maxim 8 săptămâni de la prima procedură","icon":"lips"},{"id":"intretinere","name":"Întreținere Procedură","subtitle":"Perfecționare","duration":"2-3 ore","durationMinutes":180,"price":1250,"tag":"ANUAL","description":"Retuș la maxim 1-3 ani de la prima procedură","icon":"refresh"},{"id":"laser","name":"Îndepărtare Tatuaj Laser","subtitle":"Tehnologie avansată","duration":"30 min","durationMinutes":30,"price":375,"tag":"LASER","description":"Îndepărtare sigură a tatuajului vechi cu tehnologie laser modernă","icon":"laser"}];
const servicesData = {
  globalDiscount,
  services,
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$CalendarBooking = createComponent(async ($$result, $$props, $$slots) => {
  const globalDiscount = servicesData.globalDiscount;
  const services = servicesData.services.map((service) => ({
    ...service,
    originalPrice: service.price,
    price: Math.round(service.price * (1 - globalDiscount / 100)) 
  }));
  return renderTemplate(_a || (_a = __template(["", '<div id="calendar-booking-modal" class="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" data-astro-cid-kwbkmem6> <div class="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" data-astro-cid-kwbkmem6> <div class="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl" data-astro-cid-kwbkmem6> <div class="flex justify-between items-center" data-astro-cid-kwbkmem6> <h2 class="text-2xl font-bold text-gray-900" data-astro-cid-kwbkmem6>Programeaz\u0103 Consulta\u021Bie</h2> <button id="close-calendar-modal" class="text-gray-500 hover:text-gray-700" data-astro-cid-kwbkmem6> <i class="fas fa-times text-2xl" data-astro-cid-kwbkmem6></i> </button> </div> </div> <div class="p-8" data-astro-cid-kwbkmem6> <!-- Service Selection --> <div class="mb-8" data-astro-cid-kwbkmem6> <h3 class="text-lg font-semibold text-gray-900 mb-4" data-astro-cid-kwbkmem6>Selecteaz\u0103 serviciul dorit:</h3> <div class="space-y-3" data-astro-cid-kwbkmem6> ', ` </div> </div> <!-- Calendar Section --> <div id="calendar-section" class="hidden" data-astro-cid-kwbkmem6> <h3 class="text-lg font-semibold text-gray-900 mb-4" data-astro-cid-kwbkmem6>Selecteaz\u0103 data \u0219i ora:</h3> <!-- Week Navigation --> <div class="flex flex-col sm:flex-row justify-between items-center gap-3 mb-5" data-astro-cid-kwbkmem6> <button id="prev-week" class="px-3 py-2 text-sm sm:text-base text-primary hover:bg-primary hover:text-white rounded-lg transition-colors whitespace-nowrap" data-astro-cid-kwbkmem6> <i class="fas fa-chevron-left mr-1 sm:mr-2" data-astro-cid-kwbkmem6></i><span class="hidden sm:inline" data-astro-cid-kwbkmem6>S\u0103pt\u0103m\xE2na anterioar\u0103</span><span class="sm:hidden" data-astro-cid-kwbkmem6>Anterior</span> </button> <span id="current-week-display" class="text-gray-700 font-medium text-sm sm:text-base text-center" data-astro-cid-kwbkmem6></span> <button id="next-week" class="px-3 py-2 text-sm sm:text-base text-primary hover:bg-primary hover:text-white rounded-lg transition-colors whitespace-nowrap" data-astro-cid-kwbkmem6> <span class="hidden sm:inline" data-astro-cid-kwbkmem6>S\u0103pt\u0103m\xE2na urm\u0103toare</span><span class="sm:hidden" data-astro-cid-kwbkmem6>Urm\u0103tor</span><i class="fas fa-chevron-right ml-1 sm:ml-2" data-astro-cid-kwbkmem6></i> </button> </div> <!-- Calendar Grid --> <div class="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0" data-astro-cid-kwbkmem6> <div data-astro-cid-kwbkmem6> <!-- Days Header --> <div class="grid grid-cols-5 gap-1 sm:gap-2 mb-3" data-astro-cid-kwbkmem6> <div class="text-center py-2" data-astro-cid-kwbkmem6> <div class="font-semibold text-gray-600 text-xs sm:text-sm" data-astro-cid-kwbkmem6>Luni</div> <div id="day-1-date" class="text-xs text-gray-500" data-astro-cid-kwbkmem6></div> </div> <div class="text-center py-2" data-astro-cid-kwbkmem6> <div class="font-semibold text-gray-600 text-xs sm:text-sm" data-astro-cid-kwbkmem6>Mar\u021Bi</div> <div id="day-2-date" class="text-xs text-gray-500" data-astro-cid-kwbkmem6></div> </div> <div class="text-center py-2" data-astro-cid-kwbkmem6> <div class="font-semibold text-gray-600 text-xs sm:text-sm" data-astro-cid-kwbkmem6>Miercuri</div> <div id="day-3-date" class="text-xs text-gray-500" data-astro-cid-kwbkmem6></div> </div> <div class="text-center py-2" data-astro-cid-kwbkmem6> <div class="font-semibold text-gray-600 text-xs sm:text-sm" data-astro-cid-kwbkmem6>Joi</div> <div id="day-4-date" class="text-xs text-gray-500" data-astro-cid-kwbkmem6></div> </div> <div class="text-center py-2" data-astro-cid-kwbkmem6> <div class="font-semibold text-gray-600 text-xs sm:text-sm" data-astro-cid-kwbkmem6>Vineri</div> <div id="day-5-date" class="text-xs text-gray-500" data-astro-cid-kwbkmem6></div> </div> </div> <!-- Time Slots --> <div id="calendar-grid" class="space-y-2 sm:space-y-3" data-astro-cid-kwbkmem6> <!-- Morning Slot Row (180 min) --> <div class="grid grid-cols-5 gap-1 sm:gap-2 slot-row" data-slot-duration="180" data-slot-time="10:00" data-slot-time-full="10:00-13:00" data-astro-cid-kwbkmem6> <div class="calendar-slot" data-slot="morning" data-slot-duration="180" data-day="1" data-astro-cid-kwbkmem6></div> <div class="calendar-slot" data-slot="morning" data-slot-duration="180" data-day="2" data-astro-cid-kwbkmem6></div> <div class="calendar-slot" data-slot="morning" data-slot-duration="180" data-day="3" data-astro-cid-kwbkmem6></div> <div class="calendar-slot" data-slot="morning" data-slot-duration="180" data-day="4" data-astro-cid-kwbkmem6></div> <div class="calendar-slot" data-slot="morning" data-slot-duration="180" data-day="5" data-astro-cid-kwbkmem6></div> </div> <!-- Midday Slot Row (30 min) - Laser Only --> <div class="grid grid-cols-5 gap-1 sm:gap-2 slot-row" data-slot-duration="30" data-slot-time="13:00" data-slot-time-full="13:00-13:30" data-astro-cid-kwbkmem6> <div class="calendar-slot" data-slot="midday" data-slot-duration="30" data-day="1" data-astro-cid-kwbkmem6></div> <div class="calendar-slot" data-slot="midday" data-slot-duration="30" data-day="2" data-astro-cid-kwbkmem6></div> <div class="calendar-slot" data-slot="midday" data-slot-duration="30" data-day="3" data-astro-cid-kwbkmem6></div> <div class="calendar-slot" data-slot="midday" data-slot-duration="30" data-day="4" data-astro-cid-kwbkmem6></div> <div class="calendar-slot" data-slot="midday" data-slot-duration="30" data-day="5" data-astro-cid-kwbkmem6></div> </div> <!-- Afternoon Slot Row (180 min) --> <div class="grid grid-cols-5 gap-1 sm:gap-2 slot-row" data-slot-duration="180" data-slot-time="13:30" data-slot-time-full="13:30-16:30" data-astro-cid-kwbkmem6> <div class="calendar-slot" data-slot="afternoon" data-slot-duration="180" data-day="1" data-astro-cid-kwbkmem6></div> <div class="calendar-slot" data-slot="afternoon" data-slot-duration="180" data-day="2" data-astro-cid-kwbkmem6></div> <div class="calendar-slot" data-slot="afternoon" data-slot-duration="180" data-day="3" data-astro-cid-kwbkmem6></div> <div class="calendar-slot" data-slot="afternoon" data-slot-duration="180" data-day="4" data-astro-cid-kwbkmem6></div> <div class="calendar-slot" data-slot="afternoon" data-slot-duration="180" data-day="5" data-astro-cid-kwbkmem6></div> </div> </div> <!-- Legend --> <div class="mt-4 flex items-center justify-center gap-6 text-sm" data-astro-cid-kwbkmem6> <div class="flex items-center gap-2" data-astro-cid-kwbkmem6> <div class="w-4 h-4 bg-green-500 rounded" data-astro-cid-kwbkmem6></div> <span class="text-gray-600" data-astro-cid-kwbkmem6>Disponibil</span> </div> <div class="flex items-center gap-2" data-astro-cid-kwbkmem6> <div class="w-4 h-4 bg-red-500 rounded" data-astro-cid-kwbkmem6></div> <span class="text-gray-600" data-astro-cid-kwbkmem6>Ocupat</span> </div> </div> </div> </div> </div> </div> </div> </div> <script>
    // Calendar booking functionality
    let currentWeekOffset = 0;
    let selectedService = null;
    let selectedServiceDuration = null;
    let availabilityData = {};

    function initCalendarBooking() {
        // Service selection
        const serviceOptions = document.querySelectorAll('input[name="service"]');
        serviceOptions.forEach(option => {
            option.addEventListener('change', function() {
                selectedService = this.value;
                selectedServiceDuration = parseInt(this.dataset.durationMinutes);

                // Update visual feedback
                document.querySelectorAll('.service-option').forEach(opt => {
                    opt.classList.remove('border-primary', 'bg-primary', 'bg-opacity-5');
                });
                this.closest('.service-option').classList.add('border-primary', 'bg-primary', 'bg-opacity-5');

                // Show calendar section
                document.getElementById('calendar-section').classList.remove('hidden');

                // Filter slots based on service duration
                filterSlotsByDuration(selectedServiceDuration);
            });
        });

        // Week navigation
        document.getElementById('prev-week').addEventListener('click', () => {
            if (!document.getElementById('prev-week').disabled) {
                currentWeekOffset--;
                updateCalendar();
            }
        });

        document.getElementById('next-week').addEventListener('click', () => {
            currentWeekOffset++;
            updateCalendar();
        });

        // Close modal
        document.getElementById('close-calendar-modal').addEventListener('click', () => {
            document.getElementById('calendar-booking-modal').classList.add('hidden');
            // Reset calendar section visibility
            document.getElementById('calendar-section').classList.add('hidden');
            // Reset service selection
            selectedService = null;
            selectedServiceDuration = null;
            document.querySelectorAll('input[name="service"]').forEach(opt => opt.checked = false);
            document.querySelectorAll('.service-option').forEach(opt => {
                opt.classList.remove('border-primary', 'bg-primary', 'bg-opacity-5');
            });
        });

        // Initial calendar load
        updateCalendar();
    }

    function updateCalendar() {
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Reset time for accurate comparison

        // Get the current week's Monday
        const todayDayOfWeek = today.getDay();
        const currentWeekMonday = new Date(today);

        // Adjust for weekend - if today is Saturday or Sunday, use next Monday
        if (todayDayOfWeek === 0) { // Sunday
            currentWeekMonday.setDate(today.getDate() + 1);
        } else if (todayDayOfWeek === 6) { // Saturday
            currentWeekMonday.setDate(today.getDate() + 2);
        } else {
            // Start from current week's Monday
            currentWeekMonday.setDate(today.getDate() - todayDayOfWeek + 1);
        }

        // Calculate the displayed week based on offset
        const currentWeekStart = new Date(currentWeekMonday);
        currentWeekStart.setDate(currentWeekMonday.getDate() + (currentWeekOffset * 7));

        // Update week display
        const weekEnd = new Date(currentWeekStart);
        weekEnd.setDate(currentWeekStart.getDate() + 4); // Friday

        const weekDisplay = document.getElementById('current-week-display');
        weekDisplay.textContent = formatWeekRange(currentWeekStart, weekEnd);

        // Disable prev button if going back would show a week before current week
        const prevButton = document.getElementById('prev-week');
        const wouldBePastWeek = currentWeekOffset <= 0;

        if (wouldBePastWeek) {
            prevButton.disabled = true;
            prevButton.classList.add('opacity-50', 'cursor-not-allowed');
        } else {
            prevButton.disabled = false;
            prevButton.classList.remove('opacity-50', 'cursor-not-allowed');
        }

        // Update day dates
        for (let i = 0; i < 5; i++) {
            const date = new Date(currentWeekStart);
            date.setDate(currentWeekStart.getDate() + i);
            const dayDateElement = document.getElementById(\`day-\${i + 1}-date\`);
            if (dayDateElement) {
                dayDateElement.textContent = date.getDate();
            }
        }

        // Fetch availability from API
        fetchAvailability(currentWeekStart);
    }

    async function fetchAvailability(weekStart) {
        try {
            const response = await fetch(\`/api/calendar-availability?date=\${weekStart.toISOString()}\`);
            const data = await response.json();

            if (data.success) {
                renderCalendar(data.availability, weekStart);
            } else {
                console.error('Error fetching availability:', data.error);
                // Fallback to mock data
                const mockData = generateMockAvailability(weekStart);
                renderCalendar(mockData, weekStart);
            }
        } catch (error) {
            console.error('Error fetching availability:', error);
            // Fallback to mock data
            const mockData = generateMockAvailability(weekStart);
            renderCalendar(mockData, weekStart);
        }
    }

    function generateMockAvailability(weekStart) {
        const availability = {};
        for (let i = 0; i < 5; i++) {
            const date = new Date(weekStart);
            date.setDate(weekStart.getDate() + i);
            const dateKey = date.toISOString().split('T')[0];
            availability[dateKey] = {
                morning: Math.random() > 0.3, // 70% available
                midday: Math.random() > 0.3,  // 70% available
                afternoon: Math.random() > 0.3
            };
        }
        return availability;
    }

    function filterSlotsByDuration(durationMinutes) {
        const slotRows = document.querySelectorAll('.slot-row');

        slotRows.forEach(row => {
            const slotDuration = parseInt(row.dataset.slotDuration);

            // Show all slots if no service selected
            if (!durationMinutes) {
                row.style.display = '';
                return;
            }

            // If service needs 180 min, show only 180 min slots
            if (durationMinutes === 180) {
                row.style.display = slotDuration === 180 ? '' : 'none';
            }
            // If service needs 30 min, show only 30 min slots
            else if (durationMinutes === 30) {
                row.style.display = slotDuration === 30 ? '' : 'none';
            }
            // Default: show all
            else {
                row.style.display = '';
            }
        });
    }

    function renderCalendar(availability, weekStart) {
        const slots = document.querySelectorAll('.calendar-slot');
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        slots.forEach(slot => {
            const day = parseInt(slot.dataset.day);
            const slotType = slot.dataset.slot;
            const slotRow = slot.closest('.slot-row');
            const timeSlot = slotRow ? slotRow.dataset.slotTime : '';

            const date = new Date(weekStart);
            date.setDate(weekStart.getDate() + (day - 1));
            const dateKey = date.toISOString().split('T')[0];

            const isPast = date < today;
            const isAvailable = availability[dateKey]?.[slotType] || false;

            // Remove all previous classes and content first
            slot.className = '';
            slot.innerHTML = '';
            slot.onclick = null;

            // Add base classes
            slot.className = 'calendar-slot flex flex-col items-center justify-center rounded-lg py-3';

            // If date is in the past, mark as unavailable
            if (isPast) {
                slot.classList.add('bg-gray-300', 'cursor-not-allowed', 'text-gray-500', 'opacity-50');
                slot.innerHTML = \`<div class="text-[10px] sm:text-xs mb-1">\${timeSlot}</div><i class="fas fa-ban text-sm sm:text-base"></i>\`;
            } else if (isAvailable) {
                slot.classList.add('bg-green-500', 'hover:bg-green-600', 'text-white', 'cursor-pointer', 'transition-colors');
                slot.innerHTML = \`<div class="text-[10px] sm:text-xs mb-1">\${timeSlot}</div><i class="fas fa-check text-sm sm:text-base"></i>\`;
                slot.onclick = () => handleSlotClick(date, slotType);
            } else {
                slot.classList.add('bg-red-500', 'cursor-not-allowed', 'text-white', 'opacity-50');
                slot.innerHTML = \`<div class="text-[10px] sm:text-xs mb-1">\${timeSlot}</div><i class="fas fa-times text-sm sm:text-base"></i>\`;
            }

            // Store date info
            slot.dataset.date = dateKey;
        });
    }

    function handleSlotClick(date, slotType) {
        if (!selectedService) {
            alert('Selecteaz\u0103 mai \xEEnt\xE2i serviciul dorit');
            return;
        }

        const timeSlots = {
            morning: '10:00',
            midday: '13:00',
            afternoon: '13:30'
        };

        const timeSlot = timeSlots[slotType] || timeSlots.morning;
        const formattedDate = formatDate(date);

        const message = \`Bun\u0103! A\u0219 dori s\u0103 programez:\\n\u{1F3AF} Serviciu: \${selectedService}\\n\u{1F4C5} Data: \${formattedDate}\\n\u23F0 Ora: \${timeSlot}\\n\\nV\u0103 rog s\u0103 \xEEmi confirma\u021Bi disponibilitatea.\`;

        const whatsappUrl = \`https://api.whatsapp.com/send/?phone=40732163268&text=\${encodeURIComponent(message)}&type=phone_number&app_absent=0\`;

        window.open(whatsappUrl, '_blank');
    }

    function formatDate(date) {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('ro-RO', options);
    }

    function formatWeekRange(startDate, endDate) {
        const startDay = startDate.getDate();
        const endDay = endDate.getDate();
        const startMonth = startDate.toLocaleDateString('ro-RO', { month: 'long' });
        const endMonth = endDate.toLocaleDateString('ro-RO', { month: 'long' });
        const year = endDate.getFullYear();

        // If same month, show: "7 - 11 octombrie 2025"
        if (startMonth === endMonth) {
            return \`\${startDay} - \${endDay} \${startMonth} \${year}\`;
        }

        // If different months, show: "30 septembrie - 4 octombrie 2025"
        return \`\${startDay} \${startMonth} - \${endDay} \${endMonth} \${year}\`;
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCalendarBooking);
    } else {
        initCalendarBooking();
    }
<\/script> `], ["", '<div id="calendar-booking-modal" class="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" data-astro-cid-kwbkmem6> <div class="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" data-astro-cid-kwbkmem6> <div class="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl" data-astro-cid-kwbkmem6> <div class="flex justify-between items-center" data-astro-cid-kwbkmem6> <h2 class="text-2xl font-bold text-gray-900" data-astro-cid-kwbkmem6>Programeaz\u0103 Consulta\u021Bie</h2> <button id="close-calendar-modal" class="text-gray-500 hover:text-gray-700" data-astro-cid-kwbkmem6> <i class="fas fa-times text-2xl" data-astro-cid-kwbkmem6></i> </button> </div> </div> <div class="p-8" data-astro-cid-kwbkmem6> <!-- Service Selection --> <div class="mb-8" data-astro-cid-kwbkmem6> <h3 class="text-lg font-semibold text-gray-900 mb-4" data-astro-cid-kwbkmem6>Selecteaz\u0103 serviciul dorit:</h3> <div class="space-y-3" data-astro-cid-kwbkmem6> ', ` </div> </div> <!-- Calendar Section --> <div id="calendar-section" class="hidden" data-astro-cid-kwbkmem6> <h3 class="text-lg font-semibold text-gray-900 mb-4" data-astro-cid-kwbkmem6>Selecteaz\u0103 data \u0219i ora:</h3> <!-- Week Navigation --> <div class="flex flex-col sm:flex-row justify-between items-center gap-3 mb-5" data-astro-cid-kwbkmem6> <button id="prev-week" class="px-3 py-2 text-sm sm:text-base text-primary hover:bg-primary hover:text-white rounded-lg transition-colors whitespace-nowrap" data-astro-cid-kwbkmem6> <i class="fas fa-chevron-left mr-1 sm:mr-2" data-astro-cid-kwbkmem6></i><span class="hidden sm:inline" data-astro-cid-kwbkmem6>S\u0103pt\u0103m\xE2na anterioar\u0103</span><span class="sm:hidden" data-astro-cid-kwbkmem6>Anterior</span> </button> <span id="current-week-display" class="text-gray-700 font-medium text-sm sm:text-base text-center" data-astro-cid-kwbkmem6></span> <button id="next-week" class="px-3 py-2 text-sm sm:text-base text-primary hover:bg-primary hover:text-white rounded-lg transition-colors whitespace-nowrap" data-astro-cid-kwbkmem6> <span class="hidden sm:inline" data-astro-cid-kwbkmem6>S\u0103pt\u0103m\xE2na urm\u0103toare</span><span class="sm:hidden" data-astro-cid-kwbkmem6>Urm\u0103tor</span><i class="fas fa-chevron-right ml-1 sm:ml-2" data-astro-cid-kwbkmem6></i> </button> </div> <!-- Calendar Grid --> <div class="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0" data-astro-cid-kwbkmem6> <div data-astro-cid-kwbkmem6> <!-- Days Header --> <div class="grid grid-cols-5 gap-1 sm:gap-2 mb-3" data-astro-cid-kwbkmem6> <div class="text-center py-2" data-astro-cid-kwbkmem6> <div class="font-semibold text-gray-600 text-xs sm:text-sm" data-astro-cid-kwbkmem6>Luni</div> <div id="day-1-date" class="text-xs text-gray-500" data-astro-cid-kwbkmem6></div> </div> <div class="text-center py-2" data-astro-cid-kwbkmem6> <div class="font-semibold text-gray-600 text-xs sm:text-sm" data-astro-cid-kwbkmem6>Mar\u021Bi</div> <div id="day-2-date" class="text-xs text-gray-500" data-astro-cid-kwbkmem6></div> </div> <div class="text-center py-2" data-astro-cid-kwbkmem6> <div class="font-semibold text-gray-600 text-xs sm:text-sm" data-astro-cid-kwbkmem6>Miercuri</div> <div id="day-3-date" class="text-xs text-gray-500" data-astro-cid-kwbkmem6></div> </div> <div class="text-center py-2" data-astro-cid-kwbkmem6> <div class="font-semibold text-gray-600 text-xs sm:text-sm" data-astro-cid-kwbkmem6>Joi</div> <div id="day-4-date" class="text-xs text-gray-500" data-astro-cid-kwbkmem6></div> </div> <div class="text-center py-2" data-astro-cid-kwbkmem6> <div class="font-semibold text-gray-600 text-xs sm:text-sm" data-astro-cid-kwbkmem6>Vineri</div> <div id="day-5-date" class="text-xs text-gray-500" data-astro-cid-kwbkmem6></div> </div> </div> <!-- Time Slots --> <div id="calendar-grid" class="space-y-2 sm:space-y-3" data-astro-cid-kwbkmem6> <!-- Morning Slot Row (180 min) --> <div class="grid grid-cols-5 gap-1 sm:gap-2 slot-row" data-slot-duration="180" data-slot-time="10:00" data-slot-time-full="10:00-13:00" data-astro-cid-kwbkmem6> <div class="calendar-slot" data-slot="morning" data-slot-duration="180" data-day="1" data-astro-cid-kwbkmem6></div> <div class="calendar-slot" data-slot="morning" data-slot-duration="180" data-day="2" data-astro-cid-kwbkmem6></div> <div class="calendar-slot" data-slot="morning" data-slot-duration="180" data-day="3" data-astro-cid-kwbkmem6></div> <div class="calendar-slot" data-slot="morning" data-slot-duration="180" data-day="4" data-astro-cid-kwbkmem6></div> <div class="calendar-slot" data-slot="morning" data-slot-duration="180" data-day="5" data-astro-cid-kwbkmem6></div> </div> <!-- Midday Slot Row (30 min) - Laser Only --> <div class="grid grid-cols-5 gap-1 sm:gap-2 slot-row" data-slot-duration="30" data-slot-time="13:00" data-slot-time-full="13:00-13:30" data-astro-cid-kwbkmem6> <div class="calendar-slot" data-slot="midday" data-slot-duration="30" data-day="1" data-astro-cid-kwbkmem6></div> <div class="calendar-slot" data-slot="midday" data-slot-duration="30" data-day="2" data-astro-cid-kwbkmem6></div> <div class="calendar-slot" data-slot="midday" data-slot-duration="30" data-day="3" data-astro-cid-kwbkmem6></div> <div class="calendar-slot" data-slot="midday" data-slot-duration="30" data-day="4" data-astro-cid-kwbkmem6></div> <div class="calendar-slot" data-slot="midday" data-slot-duration="30" data-day="5" data-astro-cid-kwbkmem6></div> </div> <!-- Afternoon Slot Row (180 min) --> <div class="grid grid-cols-5 gap-1 sm:gap-2 slot-row" data-slot-duration="180" data-slot-time="13:30" data-slot-time-full="13:30-16:30" data-astro-cid-kwbkmem6> <div class="calendar-slot" data-slot="afternoon" data-slot-duration="180" data-day="1" data-astro-cid-kwbkmem6></div> <div class="calendar-slot" data-slot="afternoon" data-slot-duration="180" data-day="2" data-astro-cid-kwbkmem6></div> <div class="calendar-slot" data-slot="afternoon" data-slot-duration="180" data-day="3" data-astro-cid-kwbkmem6></div> <div class="calendar-slot" data-slot="afternoon" data-slot-duration="180" data-day="4" data-astro-cid-kwbkmem6></div> <div class="calendar-slot" data-slot="afternoon" data-slot-duration="180" data-day="5" data-astro-cid-kwbkmem6></div> </div> </div> <!-- Legend --> <div class="mt-4 flex items-center justify-center gap-6 text-sm" data-astro-cid-kwbkmem6> <div class="flex items-center gap-2" data-astro-cid-kwbkmem6> <div class="w-4 h-4 bg-green-500 rounded" data-astro-cid-kwbkmem6></div> <span class="text-gray-600" data-astro-cid-kwbkmem6>Disponibil</span> </div> <div class="flex items-center gap-2" data-astro-cid-kwbkmem6> <div class="w-4 h-4 bg-red-500 rounded" data-astro-cid-kwbkmem6></div> <span class="text-gray-600" data-astro-cid-kwbkmem6>Ocupat</span> </div> </div> </div> </div> </div> </div> </div> </div> <script>
    // Calendar booking functionality
    let currentWeekOffset = 0;
    let selectedService = null;
    let selectedServiceDuration = null;
    let availabilityData = {};

    function initCalendarBooking() {
        // Service selection
        const serviceOptions = document.querySelectorAll('input[name="service"]');
        serviceOptions.forEach(option => {
            option.addEventListener('change', function() {
                selectedService = this.value;
                selectedServiceDuration = parseInt(this.dataset.durationMinutes);

                // Update visual feedback
                document.querySelectorAll('.service-option').forEach(opt => {
                    opt.classList.remove('border-primary', 'bg-primary', 'bg-opacity-5');
                });
                this.closest('.service-option').classList.add('border-primary', 'bg-primary', 'bg-opacity-5');

                // Show calendar section
                document.getElementById('calendar-section').classList.remove('hidden');

                // Filter slots based on service duration
                filterSlotsByDuration(selectedServiceDuration);
            });
        });

        // Week navigation
        document.getElementById('prev-week').addEventListener('click', () => {
            if (!document.getElementById('prev-week').disabled) {
                currentWeekOffset--;
                updateCalendar();
            }
        });

        document.getElementById('next-week').addEventListener('click', () => {
            currentWeekOffset++;
            updateCalendar();
        });

        // Close modal
        document.getElementById('close-calendar-modal').addEventListener('click', () => {
            document.getElementById('calendar-booking-modal').classList.add('hidden');
            // Reset calendar section visibility
            document.getElementById('calendar-section').classList.add('hidden');
            // Reset service selection
            selectedService = null;
            selectedServiceDuration = null;
            document.querySelectorAll('input[name="service"]').forEach(opt => opt.checked = false);
            document.querySelectorAll('.service-option').forEach(opt => {
                opt.classList.remove('border-primary', 'bg-primary', 'bg-opacity-5');
            });
        });

        // Initial calendar load
        updateCalendar();
    }

    function updateCalendar() {
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Reset time for accurate comparison

        // Get the current week's Monday
        const todayDayOfWeek = today.getDay();
        const currentWeekMonday = new Date(today);

        // Adjust for weekend - if today is Saturday or Sunday, use next Monday
        if (todayDayOfWeek === 0) { // Sunday
            currentWeekMonday.setDate(today.getDate() + 1);
        } else if (todayDayOfWeek === 6) { // Saturday
            currentWeekMonday.setDate(today.getDate() + 2);
        } else {
            // Start from current week's Monday
            currentWeekMonday.setDate(today.getDate() - todayDayOfWeek + 1);
        }

        // Calculate the displayed week based on offset
        const currentWeekStart = new Date(currentWeekMonday);
        currentWeekStart.setDate(currentWeekMonday.getDate() + (currentWeekOffset * 7));

        // Update week display
        const weekEnd = new Date(currentWeekStart);
        weekEnd.setDate(currentWeekStart.getDate() + 4); // Friday

        const weekDisplay = document.getElementById('current-week-display');
        weekDisplay.textContent = formatWeekRange(currentWeekStart, weekEnd);

        // Disable prev button if going back would show a week before current week
        const prevButton = document.getElementById('prev-week');
        const wouldBePastWeek = currentWeekOffset <= 0;

        if (wouldBePastWeek) {
            prevButton.disabled = true;
            prevButton.classList.add('opacity-50', 'cursor-not-allowed');
        } else {
            prevButton.disabled = false;
            prevButton.classList.remove('opacity-50', 'cursor-not-allowed');
        }

        // Update day dates
        for (let i = 0; i < 5; i++) {
            const date = new Date(currentWeekStart);
            date.setDate(currentWeekStart.getDate() + i);
            const dayDateElement = document.getElementById(\\\`day-\\\${i + 1}-date\\\`);
            if (dayDateElement) {
                dayDateElement.textContent = date.getDate();
            }
        }

        // Fetch availability from API
        fetchAvailability(currentWeekStart);
    }

    async function fetchAvailability(weekStart) {
        try {
            const response = await fetch(\\\`/api/calendar-availability?date=\\\${weekStart.toISOString()}\\\`);
            const data = await response.json();

            if (data.success) {
                renderCalendar(data.availability, weekStart);
            } else {
                console.error('Error fetching availability:', data.error);
                // Fallback to mock data
                const mockData = generateMockAvailability(weekStart);
                renderCalendar(mockData, weekStart);
            }
        } catch (error) {
            console.error('Error fetching availability:', error);
            // Fallback to mock data
            const mockData = generateMockAvailability(weekStart);
            renderCalendar(mockData, weekStart);
        }
    }

    function generateMockAvailability(weekStart) {
        const availability = {};
        for (let i = 0; i < 5; i++) {
            const date = new Date(weekStart);
            date.setDate(weekStart.getDate() + i);
            const dateKey = date.toISOString().split('T')[0];
            availability[dateKey] = {
                morning: Math.random() > 0.3, // 70% available
                midday: Math.random() > 0.3,  // 70% available
                afternoon: Math.random() > 0.3
            };
        }
        return availability;
    }

    function filterSlotsByDuration(durationMinutes) {
        const slotRows = document.querySelectorAll('.slot-row');

        slotRows.forEach(row => {
            const slotDuration = parseInt(row.dataset.slotDuration);

            // Show all slots if no service selected
            if (!durationMinutes) {
                row.style.display = '';
                return;
            }

            // If service needs 180 min, show only 180 min slots
            if (durationMinutes === 180) {
                row.style.display = slotDuration === 180 ? '' : 'none';
            }
            // If service needs 30 min, show only 30 min slots
            else if (durationMinutes === 30) {
                row.style.display = slotDuration === 30 ? '' : 'none';
            }
            // Default: show all
            else {
                row.style.display = '';
            }
        });
    }

    function renderCalendar(availability, weekStart) {
        const slots = document.querySelectorAll('.calendar-slot');
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        slots.forEach(slot => {
            const day = parseInt(slot.dataset.day);
            const slotType = slot.dataset.slot;
            const slotRow = slot.closest('.slot-row');
            const timeSlot = slotRow ? slotRow.dataset.slotTime : '';

            const date = new Date(weekStart);
            date.setDate(weekStart.getDate() + (day - 1));
            const dateKey = date.toISOString().split('T')[0];

            const isPast = date < today;
            const isAvailable = availability[dateKey]?.[slotType] || false;

            // Remove all previous classes and content first
            slot.className = '';
            slot.innerHTML = '';
            slot.onclick = null;

            // Add base classes
            slot.className = 'calendar-slot flex flex-col items-center justify-center rounded-lg py-3';

            // If date is in the past, mark as unavailable
            if (isPast) {
                slot.classList.add('bg-gray-300', 'cursor-not-allowed', 'text-gray-500', 'opacity-50');
                slot.innerHTML = \\\`<div class="text-[10px] sm:text-xs mb-1">\\\${timeSlot}</div><i class="fas fa-ban text-sm sm:text-base"></i>\\\`;
            } else if (isAvailable) {
                slot.classList.add('bg-green-500', 'hover:bg-green-600', 'text-white', 'cursor-pointer', 'transition-colors');
                slot.innerHTML = \\\`<div class="text-[10px] sm:text-xs mb-1">\\\${timeSlot}</div><i class="fas fa-check text-sm sm:text-base"></i>\\\`;
                slot.onclick = () => handleSlotClick(date, slotType);
            } else {
                slot.classList.add('bg-red-500', 'cursor-not-allowed', 'text-white', 'opacity-50');
                slot.innerHTML = \\\`<div class="text-[10px] sm:text-xs mb-1">\\\${timeSlot}</div><i class="fas fa-times text-sm sm:text-base"></i>\\\`;
            }

            // Store date info
            slot.dataset.date = dateKey;
        });
    }

    function handleSlotClick(date, slotType) {
        if (!selectedService) {
            alert('Selecteaz\u0103 mai \xEEnt\xE2i serviciul dorit');
            return;
        }

        const timeSlots = {
            morning: '10:00',
            midday: '13:00',
            afternoon: '13:30'
        };

        const timeSlot = timeSlots[slotType] || timeSlots.morning;
        const formattedDate = formatDate(date);

        const message = \\\`Bun\u0103! A\u0219 dori s\u0103 programez:\\\\n\u{1F3AF} Serviciu: \\\${selectedService}\\\\n\u{1F4C5} Data: \\\${formattedDate}\\\\n\u23F0 Ora: \\\${timeSlot}\\\\n\\\\nV\u0103 rog s\u0103 \xEEmi confirma\u021Bi disponibilitatea.\\\`;

        const whatsappUrl = \\\`https://api.whatsapp.com/send/?phone=40732163268&text=\\\${encodeURIComponent(message)}&type=phone_number&app_absent=0\\\`;

        window.open(whatsappUrl, '_blank');
    }

    function formatDate(date) {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('ro-RO', options);
    }

    function formatWeekRange(startDate, endDate) {
        const startDay = startDate.getDate();
        const endDay = endDate.getDate();
        const startMonth = startDate.toLocaleDateString('ro-RO', { month: 'long' });
        const endMonth = endDate.toLocaleDateString('ro-RO', { month: 'long' });
        const year = endDate.getFullYear();

        // If same month, show: "7 - 11 octombrie 2025"
        if (startMonth === endMonth) {
            return \\\`\\\${startDay} - \\\${endDay} \\\${startMonth} \\\${year}\\\`;
        }

        // If different months, show: "30 septembrie - 4 octombrie 2025"
        return \\\`\\\${startDay} \\\${startMonth} - \\\${endDay} \\\${endMonth} \\\${year}\\\`;
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCalendarBooking);
    } else {
        initCalendarBooking();
    }
<\/script> `])), maybeRenderHead(), services.map((service) => renderTemplate`<label class="flex items-center justify-between p-3 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-primary transition-colors service-option" data-astro-cid-kwbkmem6> <div class="flex items-center flex-1" data-astro-cid-kwbkmem6> <input type="radio" name="service"${addAttribute(service.name, "value")}${addAttribute(service.duration, "data-duration")}${addAttribute(service.durationMinutes, "data-duration-minutes")} class="w-5 h-5 text-primary focus:ring-primary" data-astro-cid-kwbkmem6> <div class="ml-3" data-astro-cid-kwbkmem6> <div class="text-gray-900 font-medium" data-astro-cid-kwbkmem6> ${service.name} <span class="text-xs text-gray-400" data-astro-cid-kwbkmem6>(${service.subtitle})</span> <span class="text-sm text-gray-500" data-astro-cid-kwbkmem6>⏱ ${service.duration}</span> </div> </div> </div> <div class="text-right" data-astro-cid-kwbkmem6> ${renderTemplate`<div class="flex items-center gap-2 justify-end mb-1" data-astro-cid-kwbkmem6> <span class="text-sm text-gray-400 line-through" data-astro-cid-kwbkmem6>${service.originalPrice} RON</span> <span class="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded" data-astro-cid-kwbkmem6>-${globalDiscount}%</span> </div>`} <div class="text-lg font-semibold text-primary" data-astro-cid-kwbkmem6>${service.price} RON</div> </div> </label>`));
}, "/Users/mrgreen/Work_local/Local_dev/sites-by-llm/micropigmentation/src/components/CalendarBooking.astro", void 0);

export { $$CalendarBooking as $, servicesData as s };
