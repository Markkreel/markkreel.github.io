"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  // Start as TRUE so you can see it immediately on load
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const toggleVisibility = () => {
      // Strict check: visible if scrolled > 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        // Hide only if very close to top
        setIsVisible(false);
      }
    };

    // Run once on mount
    toggleVisibility();

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      // Using inline styles to FORCE position and zIndex, overriding any global CSS issues
      style={{
        zIndex: 9999,
        position: "fixed",
        bottom: "32px",
        right: "32px",
        backgroundColor: "black",
        color: "white",
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? "auto" : "none",
        transition: "opacity 0.3s ease",
      }}
      className="p-3 rounded-full shadow-lg hover:bg-[#930507] hover:scale-110 transition-all duration-300"
      aria-label="Back to top"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
}
