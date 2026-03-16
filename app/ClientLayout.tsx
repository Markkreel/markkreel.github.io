"use client";

import { useEffect } from "react";
import * as script from "./scripts";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Initialize scripts on mount
    script.initNavigation();
    script.initScrollReveal();
    script.initSmoothScroll();
    script.initMobileMenu();
    script.initParallax();
    // script.initBackToTop(); //
    script.initScrollProgress();
  }, []);

  // Must return a fragment or a div without overflow:hidden
  return <>{children}</>;
}
