// ─── BackToTop.tsx ────────────────────────────────────────────────────────────
"use client";

import { useEffect, useState, type MouseEvent } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (_event: MouseEvent<HTMLButtonElement>) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`
        fixed bottom-8 right-8 z-[9999] p-3
        rounded-full bg-black text-white shadow-lg
        transition-all duration-300
        hover:bg-[#930507] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(147,5,7,0.8)]
        ${isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
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
