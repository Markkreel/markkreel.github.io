// ─── scripts.ts ──────────────────────────────────────────────────────────────
"use client";

/* ===================================
   MARK RUMAHORBO PORTFOLIO - SCRIPTS
   Migrated for Next.js TypeScript
   =================================== */

// ─── Helpers ───────────────────────────────────────────────────────────────────
const isServer = typeof window === "undefined";

const $ = <T extends Element>(selector: string): T | null =>
  document.querySelector<T>(selector);

const $$ = <T extends Element>(selector: string): NodeListOf<T> =>
  document.querySelectorAll<T>(selector);

// ─── Navigation ───────────────────────────────────────────────────────────────
export function initNavigation(): void {
  if (isServer) return;

  const nav = $<HTMLElement>("nav");
  const navLinks = $$<HTMLAnchorElement>(".nav-link");
  const sections = $$<HTMLElement>("section[id]");

  if (!nav) return;

  const handleScroll = (): void => {
    nav.classList.toggle("nav-scrolled", window.scrollY > 50);

    let current = "";

    sections.forEach((section) => {
      const { offsetTop, offsetHeight } = section;
      const sectionTop = offsetTop - 100;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + offsetHeight
      ) {
        current = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
}

// ─── Scroll Reveal Animations ─────────────────────────────────────────────────
export function initScrollReveal(): void {
  if (isServer) return;

  const observerOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  const selectors = [
    ".project-card",
    ".edu-card",
    ".reveal",
    ".reveal-left",
    ".reveal-right",
  ] as const;

  selectors.forEach((sel) => {
    $$(sel).forEach((el) => observer.observe(el));
  });

  $$(".tag").forEach((tag, index) => {
    (tag as HTMLElement).style.transitionDelay = `${index * 0.05}s`;
  });
}

// ─── Smooth Scroll ─────────────────────────────────────────────────────────────
export function initSmoothScroll(): void {
  if (isServer) return;

  $$<HTMLAnchorElement>("a[href^='#']").forEach((anchor) => {
    anchor.addEventListener("click", (e: MouseEvent) => {
      e.preventDefault();

      const href = anchor.getAttribute("href");
      const target = href ? $(<HTMLElement>href) : null;

      if (!target) return;

      const nav = $<HTMLElement>("nav");
      const navHeight = nav?.offsetHeight ?? 0;
      const targetPosition = target.offsetTop - navHeight;

      window.scrollTo({ top: targetPosition, behavior: "smooth" });

      const mobileMenu = $(".mobile-menu");
      const hamburger = $(".hamburger");

      mobileMenu?.classList.remove("open");
      document.body.classList.remove("menu-open");
      hamburger?.classList.remove("active");
    });
  });
}

// ─── Mobile Menu ──────────────────────────────────────────────────────────────
export function initMobileMenu(): void {
  if (isServer) return;

  const hamburger = $<HTMLElement>(".hamburger");
  const mobileMenu = $<HTMLElement>(".mobile-menu");

  if (!hamburger || !mobileMenu) return;

  const toggleMenu = (): void => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("open");
    document.body.classList.toggle("menu-open");
  };

  hamburger.addEventListener("click", toggleMenu);

  document.addEventListener("click", (e: MouseEvent) => {
    const target = e.target as Node;
    const outsideMenu =
      !hamburger.contains(target) && !mobileMenu.contains(target);

    if (outsideMenu) {
      hamburger.classList.remove("active");
      mobileMenu.classList.remove("open");
      document.body.classList.remove("menu-open");
    }
  });
}

// ─── Parallax Effects ─────────────────────────────────────────────────────────
export function initParallax(): void {
  if (isServer) return;

  const hero = $<HTMLElement>(".hero-section");

  if (!hero) return;

  const handleScroll = (): void => {
    const scrolled = window.scrollY;

    if (scrolled < window.innerHeight) {
      const rate = scrolled * 0.4;
      const opacity = Math.max(0, 1 - scrolled / (window.innerHeight * 0.6));

      hero.style.transform = `translateY(${rate}px)`;
      hero.style.opacity = String(opacity);
    }
  };

  window.addEventListener("scroll", handleScroll);
}

// ─── Scroll Progress Indicator ─────────────────────────────────────────────────
export function initScrollProgress(): void {
  if (isServer) return;

  if ($(".scroll-progress")) return;

  const progressBar = document.createElement("div");

  progressBar.classList.add("scroll-progress");
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

  const updateProgress = (): void => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
    progressBar.style.width = `${progress}%`;
  };

  window.addEventListener("scroll", updateProgress);
}
