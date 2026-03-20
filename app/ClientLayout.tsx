// ─── ClientLayout.tsx ─────────────────────────────────────────────────────────
"use client";

import { useEffect } from "react";
import * as script from "./scripts";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    script.initNavigation();
    script.initScrollReveal();
    script.initSmoothScroll();
    script.initMobileMenu();
    script.initParallax();
    script.initScrollProgress();
  }, []);

  return <>{children}</>;
}
