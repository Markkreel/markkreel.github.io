'use client';

/* ===================================
   MARK RUMAHORBO PORTFOLIO - SCRIPTS
   Migrated for Next.js TypeScript
   =================================== */

// -----------------------------------
// NAVIGATION
// -----------------------------------

export function initNavigation() {
    if (typeof window === 'undefined') return;
    
    const nav = document.querySelector<HTMLElement>('nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll<HTMLElement>('section[id]');
    
    if (!nav) return;

    const handleScroll = () => {
        if (window.scrollY > 50) {
            nav.classList.add('nav-scrolled');
        } else {
            nav.classList.remove('nav-scrolled');
        }
        
        // Update active nav link based on scroll position
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id') || '';
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === `#${current}`) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
}

// -----------------------------------
// SCROLL REVEAL ANIMATIONS
// -----------------------------------

export function initScrollReveal() {
    if (typeof window === 'undefined') return;

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe project cards
    document.querySelectorAll('.project-card').forEach(card => {
        observer.observe(card);
    });
    
    // Observe education cards
    document.querySelectorAll('.edu-card').forEach(card => {
        observer.observe(card);
    });
    
    // Observe generic reveal elements
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
        observer.observe(el);
    });
    
    // Staggered reveal for tags
    document.querySelectorAll('.tag').forEach((tag, index) => {
        (tag as HTMLElement).style.transitionDelay = `${index * 0.05}s`;
    });
}

// -----------------------------------
// SMOOTH SCROLL
// -----------------------------------

export function initSmoothScroll() {
    if (typeof window === 'undefined') return;

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(this: HTMLAnchorElement, e: Event) {
            e.preventDefault();
            const href = this.getAttribute('href');
            const target = href ? document.querySelector(href) : null;
            
            if (target) {
                const nav = document.querySelector<HTMLElement>('nav');
                const navHeight = nav ? nav.offsetHeight : 0;
                const targetPosition = (target as HTMLElement).offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu and reset hamburger state
                const mobileMenu = document.querySelector('.mobile-menu');
                const hamburger = document.querySelector('.hamburger');
                if (mobileMenu && mobileMenu.classList.contains('open')) {
                    mobileMenu.classList.remove('open');
                    document.body.classList.remove('menu-open');
                }
                if (hamburger && hamburger.classList.contains('active')) {
                    hamburger.classList.remove('active');
                }
            }
        });
    });
}

// -----------------------------------
// MOBILE MENU
// -----------------------------------

export function initMobileMenu() {
    if (typeof window === 'undefined') return;

    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('open');
            document.body.classList.toggle('menu-open');
        });
        
        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target as Node) && !mobileMenu.contains(e.target as Node)) {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('open');
                document.body.classList.remove('menu-open');
            }
        });
    }
}

// -----------------------------------
// PARALLAX EFFECTS
// -----------------------------------

export function initParallax() {
    if (typeof window === 'undefined') return;

    const hero = document.querySelector('.hero-section');
    
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const rate = scrolled * 0.3;
            
            if (scrolled < window.innerHeight) {
                (hero as HTMLElement).style.transform = `translateY(${rate}px)`;
                (hero as HTMLElement).style.opacity = String(1 - (scrolled / (window.innerHeight * 1.5)));
            }
        });
    }
}

// -----------------------------------
// BACK TO TOP BUTTON
// -----------------------------------

export function initBackToTop() {
    if (typeof window === 'undefined') return;

    const backToTopBtn = document.getElementById('back-to-top');
    
    if (!backToTopBtn) return;
    
    window.addEventListener('scroll', () => {
        // Show button after scrolling 500px
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// -----------------------------------
// SCROLL PROGRESS INDICATOR
// -----------------------------------

export function initScrollProgress() {
    if (typeof window === 'undefined') return;

    // Check if it already exists to avoid duplicates
    if (document.querySelector('.scroll-progress')) return;

    const progressBar = document.createElement('div');
    progressBar.classList.add('scroll-progress');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 2px;
        background: #930507;
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = `${progress}%`;
    });
}