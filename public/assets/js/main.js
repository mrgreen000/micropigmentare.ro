// Main JavaScript for Micropigmentare Website

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('nav');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled', 'shadow-lg');
            } else {
                navbar.classList.remove('navbar-scrolled', 'shadow-lg');
            }
        });
    }

    // WhatsApp floating button
    createWhatsAppButton();

    // Scroll to top button
    createScrollToTopButton();

    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }

    // Gallery lightbox
    initializeGalleryLightbox();

    // Animate elements on scroll
    animateOnScroll();

    // Initialize testimonials carousel
    setTimeout(() => {
        console.log('Attempting to initialize carousel...');
        initializeTestimonialsCarousel();
    }, 500);

});

// WhatsApp floating button
function createWhatsAppButton() {
    const whatsappButton = document.createElement('a');
    whatsappButton.href = 'https://api.whatsapp.com/send/?phone=40732163268&text&type=phone_number&app_absent=0';
    whatsappButton.target = '_blank';
    whatsappButton.className = 'whatsapp-float';
    whatsappButton.innerHTML = '<i class="fab fa-whatsapp"></i>';
    whatsappButton.setAttribute('aria-label', 'Contact on WhatsApp');
    document.body.appendChild(whatsappButton);
}

// Scroll to top button
function createScrollToTopButton() {
    const scrollButton = document.createElement('div');
    scrollButton.className = 'scroll-to-top';
    scrollButton.innerHTML = '<i class="fas fa-chevron-up"></i>';
    scrollButton.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollButton);

    // Show/hide on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollButton.classList.add('show');
        } else {
            scrollButton.classList.remove('show');
        }
    });

    // Scroll to top on click
    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Contact form handling
function handleFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // Create WhatsApp message with form data
    const message = `Bună! Aș dori să fac o programare pentru:\n
Nume: ${data.name}
Telefon: ${data.phone}
Serviciu: ${data.service}
${data.message ? `Mesaj: ${data.message}` : ''}`;

    const whatsappUrl = `https://api.whatsapp.com/send/?phone=40732163268&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
    window.open(whatsappUrl, '_blank');

    // Show success message
    showNotification('Mulțumim! Vei fi redirecționat către WhatsApp.');

    // Reset form
    e.target.reset();
}

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `fixed top-20 right-5 z-50 p-4 rounded-lg text-white ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
    }`;
    notification.textContent = message;
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Gallery lightbox
function initializeGalleryLightbox() {
    const galleryImages = document.querySelectorAll('#galerie img');

    // Create lightbox element
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <span class="lightbox-close">&times;</span>
        <img class="lightbox-content" src="" alt="Gallery image">
    `;
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector('.lightbox-content');
    const closeBtn = lightbox.querySelector('.lightbox-close');

    // Add click event to gallery images
    galleryImages.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() {
            lightbox.style.display = 'block';
            lightboxImg.src = this.src;
            lightboxImg.alt = this.alt;
        });
    });

    // Close lightbox
    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
}


// Animate elements on scroll
function animateOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add animation to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Testimonials Carousel
let carouselInitialized = false;
let carouselAutoPlay;

function initializeTestimonialsCarousel() {
    if (carouselInitialized) {
        console.log('Carousel already initialized, skipping...');
        return;
    }

    console.log('Initializing testimonials carousel');
    const track = document.getElementById('testimonials-track');
    const dots = document.querySelectorAll('.carousel-dot');
    const slides = document.querySelectorAll('.testimonial-slide');
    console.log('Track found:', !!track);
    console.log('Dots found:', dots.length);
    console.log('Slides found:', slides.length);

    if (!track || slides.length === 0) {
        console.log('Missing required elements for carousel, retrying in 1 second...');
        setTimeout(() => {
            carouselInitialized = false; // Reset flag to allow retry
            initializeTestimonialsCarousel();
        }, 1000);
        return;
    }

    carouselInitialized = true;

    let currentSlide = 0;
    const totalSlides = slides.length;
    let slidesToShow = 3; // Default for desktop

    // Responsive slides to show
    function updateSlidesToShow() {
        if (window.innerWidth < 768) {
            slidesToShow = 1; // Mobile
        } else if (window.innerWidth < 1024) {
            slidesToShow = 2; // Tablet
        } else {
            slidesToShow = 3; // Desktop
        }
    }

    function updateCarousel() {
        updateSlidesToShow();
        const slideWidth = 100 / slidesToShow;
        const offset = -(currentSlide * slideWidth);
        track.style.transform = `translateX(${offset}%)`;

        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }


    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateCarousel();
        });
    });

    // Auto-play carousel
    carouselAutoPlay = setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }, 6000);

    // Pause on hover
    track.addEventListener('mouseenter', () => clearInterval(carouselAutoPlay));
    track.addEventListener('mouseleave', () => {
        carouselAutoPlay = setInterval(() => {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateCarousel();
        }, 6000);
    });

    // Update on window resize
    window.addEventListener('resize', updateCarousel);

    // Initial setup
    updateCarousel();
}

// Phone number formatter
function formatPhoneNumber(input) {
    const cleaned = input.value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{4})(\d{3})(\d{3})$/);

    if (match) {
        input.value = match[1] + ' ' + match[2] + ' ' + match[3];
    }
}

// Add to phone input if exists
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', function() {
        formatPhoneNumber(this);
    });
}

// Lazy loading for images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Service cards hover effect
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Prevent form resubmission on refresh
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

// Add active state to current navigation item
function setActiveNavItem() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    // Function to update active nav item
    const updateActiveItem = () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        // If no section is active (at the very top), default to first section
        if (!current && sections.length > 0) {
            current = sections[0].getAttribute('id');
        }

        navLinks.forEach(link => {
            link.classList.remove('text-primary', 'font-semibold', 'border-b-2', 'border-primary');
            link.style.color = ''; // Reset inline color
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('text-primary', 'font-semibold');
                link.style.color = '#B29D8B'; // Explicitly set brown color
            }
        });
    };

    // Set initial active state
    updateActiveItem();

    // Update on scroll
    window.addEventListener('scroll', updateActiveItem);
}

setActiveNavItem();

// Mobile menu toggle fix
const mobileMenuButton = document.querySelector('[data-collapse-toggle="navbar-sticky"]');
const mobileMenu = document.getElementById('navbar-sticky');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// Google Analytics or tracking code placeholder
// Add your tracking code here if needed

// Console message for developers
console.log('%cWebsite dezvoltat cu ❤️ pentru Paula Lupu Micropigmentare', 'color: #ec4899; font-size: 14px; font-weight: bold;');
console.log('%cPentru servicii web profesionale, contactează dezvoltatorul.', 'color: #6b7280; font-size: 12px;');