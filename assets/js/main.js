// Custom Cursor
const cursor = document.querySelector('.custom-cursor');
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.5;
    cursorY += (mouseY - cursorY) * 0.5;
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    requestAnimationFrame(animateCursor);
}
animateCursor();

// Cursor expand on hover
document.querySelectorAll('a, button, .service-card, .team-card, .testimonial-card, .tech-card').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('expand'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('expand'));
});

// Particle System
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const particleCount = 50;

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;

        // Mouse attraction
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 150) {
            this.x += dx * 0.01;
            this.y += dy * 0.01;
        }
    }

    draw() {
        ctx.fillStyle = `rgba(239, 127, 26, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });

    // Connect nearby particles
    particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
                ctx.strokeStyle = `rgba(239, 127, 26, ${0.2 * (1 - distance / 100)})`;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
            }
        });
    });

    requestAnimationFrame(animateParticles);
}
animateParticles();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Magnetic Buttons
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) translateY(-2px)`;
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = '';
    });
});

// Parallax Effect & Navbar scroll
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Navbar effect
    const nav = document.querySelector('nav');
    if (scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }

    // Hide hero scroll indicator when scrolling
    const heroScroll = document.querySelector('.hero-scroll');
    if (heroScroll) {
        if (scrollY > 50) {
            heroScroll.style.opacity = '0';
            heroScroll.style.pointerEvents = 'none';
        } else {
            heroScroll.style.opacity = '1';
            heroScroll.style.pointerEvents = 'auto';
        }
    }

    // Hero parallax (disabled on mobile to prevent overlapping)
    const hero = document.querySelector('.hero');
    if (hero && scrollY < window.innerHeight && window.innerWidth >= 768) {
        hero.style.transform = `translateY(${scrollY * 0.2}px)`;
    }
});

// Hide custom cursor on mobile
if (window.innerWidth < 768) {
    cursor.style.display = 'none';
    document.body.style.cursor = 'auto';
}

// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    offset: 100,
    disable: 'mobile'
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');

        // Scroll to top for home
        if (href === '#home') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return;
        }

        const target = document.querySelector(href);
        if (target) {
            const navHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = targetPosition - navHeight - 20; // 20px extra spacing

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Counter animation for stats
const counters = document.querySelectorAll('.stat-number');
const speed = 200;

const animateCounter = (counter) => {
    const target = +counter.getAttribute('data-count');
    const count = +counter.innerText;
    const inc = target / speed;

    if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(() => animateCounter(counter), 1);
    } else {
        counter.innerText = target + (target === 100 ? '%' : target === 24 ? '/7' : '+');
    }
};

// Trigger counter animation on scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.stat-number');
            counters.forEach(counter => {
                counter.innerText = '0';
                animateCounter(counter);
            });
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const statsBar = document.querySelector('.stats-bar');
if (statsBar) {
    observer.observe(statsBar);
}

// Mobile menu toggle
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const mobileToggle = document.querySelector('.mobile-toggle');

    navLinks.classList.toggle('active');
    mobileToggle.classList.toggle('active');
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        const mobileToggle = document.querySelector('.mobile-toggle');
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileToggle.classList.remove('active');
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const navLinks = document.querySelector('.nav-links');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const nav = document.querySelector('nav');

    if (!nav.contains(e.target) && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        mobileToggle.classList.remove('active');
    }
});

// Testimonials Carousel
const testimonialsSlider = document.getElementById('testimonials-slider');
const testimonialCards = document.querySelectorAll('.testimonial-card');
const prevBtn = document.getElementById('testimonial-prev');
const nextBtn = document.getElementById('testimonial-next');
const dotsContainer = document.getElementById('testimonial-dots');

const isMobile = window.innerWidth < 768;
const slidesToShow = isMobile ? 1 : 2;
const totalSlides = testimonialCards.length;

// Clone cards for infinite loop effect
if (!isMobile) {
    // Clone first slidesToShow cards and append to end
    for (let i = 0; i < slidesToShow; i++) {
        const clone = testimonialCards[i].cloneNode(true);
        testimonialsSlider.appendChild(clone);
    }
}

let currentSlide = 0;
const maxSlide = totalSlides; // Now we can go up to totalSlides because of clones

// Create dots based on original number of slides
const numDots = totalSlides;
for (let i = 0; i < numDots; i++) {
    const dot = document.createElement('div');
    dot.classList.add('carousel-dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll('.carousel-dot');

function updateSlider(smooth = true) {
    if (!smooth) {
        testimonialsSlider.style.transition = 'none';
    }

    const slideWidth = isMobile ? 100 : 50;
    const gap = isMobile ? 0 : 2.5;
    const offset = currentSlide * (slideWidth + gap);
    testimonialsSlider.style.transform = `translateX(-${offset}%)`;

    if (!smooth) {
        setTimeout(() => {
            testimonialsSlider.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        }, 50);
    }

    // Update dots (circular)
    const dotIndex = currentSlide % totalSlides;
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === dotIndex);
    });
}

function goToSlide(index) {
    currentSlide = index;
    updateSlider();
}

function nextSlide() {
    currentSlide++;
    updateSlider();

    // If we've reached the cloned cards, reset to start without animation
    if (currentSlide >= maxSlide) {
        setTimeout(() => {
            currentSlide = 0;
            updateSlider(false);
        }, 500);
    }
}

function prevSlide() {
    if (currentSlide <= 0) {
        // Jump to end (cloned position) without animation, then animate back
        currentSlide = maxSlide;
        updateSlider(false);
        setTimeout(() => {
            currentSlide = maxSlide - 1;
            updateSlider();
        }, 50);
    } else {
        currentSlide--;
        updateSlider();
    }
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
});

// Touch swipe support
let touchStartX = 0;
let touchEndX = 0;

testimonialsSlider.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

testimonialsSlider.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) nextSlide();
    if (touchEndX - touchStartX > 50) prevSlide();
});

// Contact Form Handler
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
let formLoadTime = Date.now();

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Time-based spam protection (minimum 3 seconds)
        const timeSinceLoad = (Date.now() - formLoadTime) / 1000;
        if (timeSinceLoad < 3) {
            showFormStatus('Please take your time filling out the form.', 'error');
            return;
        }

        // Honeypot check
        const honeypot = contactForm.querySelector('input[name="_honey"]');
        if (honeypot && honeypot.value !== '') {
            // Bot detected - silently fail
            showFormStatus('Thank you for your message!', 'success');
            contactForm.reset();
            return;
        }

        // Get form data
        const formData = new FormData(contactForm);
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalBtnText = submitBtn.querySelector('span').textContent;

        // Disable button and show loading state
        submitBtn.disabled = true;
        submitBtn.querySelector('span').textContent = 'Sending...';

        try {
            // Submit to Formsubmit AJAX endpoint
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            const data = await response.json();

            if (response.ok && data.success) {
                showFormStatus('Thank you! Your message has been sent successfully. We\'ll get back to you soon.', 'success');
                contactForm.reset();
                formLoadTime = Date.now();
            } else if (data.message && data.message.includes('confirm')) {
                showFormStatus('Please check your email to confirm form activation. Then resubmit your message.', 'error');
            } else {
                throw new Error(data.message || 'Something went wrong');
            }
        } catch (error) {
            showFormStatus('Oops! There was an error sending your message. Please try again or email us directly at info@koungasolutions.co.nz', 'error');
            console.error('Form submission error:', error);
        } finally {
            // Re-enable button
            submitBtn.disabled = false;
            submitBtn.querySelector('span').textContent = originalBtnText;
        }
    });
}

function showFormStatus(message, type) {
    formStatus.textContent = message;
    formStatus.className = `form-status ${type}`;
    formStatus.style.display = ''; // Clear any inline display style

    // Auto-hide after 10 seconds
    setTimeout(() => {
        formStatus.style.display = 'none';
        setTimeout(() => {
            formStatus.className = 'form-status';
        }, 300);
    }, 10000);
}
