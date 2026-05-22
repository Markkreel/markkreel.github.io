"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Helper SVG Components
const LinkedInIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GithubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const MailIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

// Bauhaus Grid Node SVG for timelines
const GridMarkerSVG = () => (
  <svg className="w-6 h-6 text-[#930507]" viewBox="0 0 24 24" fill="none">
    <path d="M12 0V24M0 12H24" stroke="currentColor" strokeWidth="1.5" />
    <rect x="9" y="9" width="6" height="6" fill="currentColor" />
  </svg>
);

// Custom Bauhaus Agribusiness / Operations Logo Component (No outer boxes)
const FamilyBusinessLogo = () => (
  <svg
    className="w-12 h-12 flex-shrink-0 text-black"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="32" height="32" fill="none" />
    <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="2" />
    <path d="M16 6v20M6 16h20" stroke="#930507" strokeWidth="2" />
    <circle cx="16" cy="16" r="4.5" fill="#930507" />
  </svg>
);

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Shared className style for unified tag component behavior (Now highly responsive)
  const tagStyle =
    "inline-flex items-center px-2.5 sm:px-3 py-1 text-[10px] sm:text-[11px] font-medium tracking-wider uppercase border border-gray-200 text-gray-600 bg-white hover:bg-[#930507] hover:text-white hover:border-[#930507] transition-all duration-200 cursor-default select-none rounded-none";

  const tagStyle2 =
    "inline-flex items-center px-2.5 sm:px-3 py-1 text-[10px] sm:text-[11px] font-medium tracking-wider uppercase border border-zinc-800 text-gray-200 bg-zinc-950 hover:bg-[#930507] hover:text-white hover:border-[#930507] transition-all duration-200 cursor-default select-none rounded-none";

  // Shared className style for active cards hover transitions (Fluid spacing on mobile)
  const cardHoverStyle =
    "bg-white border border-black p-6 md:p-8 rounded-none shadow-none hover:border-[#930507] hover:shadow-[6px_6px_0px_0px_rgba(147,5,7,1)] hover:-translate-y-0.5 transition-all duration-300";

  return (
    <div className="bg-white text-black min-h-screen selection:bg-[#930507] selection:text-white">
      {/* Structural Minimalist Grid-Aligned Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center">
            <Image
              src="/favicon.svg"
              alt="Mark Rumahorbo Logo"
              width={36}
              height={36}
              className="h-10 w-10 object-contain"
              priority
            />
          </a>

          {/* Desktop Navigation Link Block */}
          <div className="hidden md:flex items-center h-full border-l border-r border-black">
            <a
              href="#about"
              className="px-6 h-20 flex items-center text-xs font-bold uppercase tracking-widest text-gray-600 hover:text-black hover:bg-gray-50 border-r border-black last:border-r-0 transition-all"
            >
              01 // About
            </a>
            <a
              href="#projects"
              className="px-6 h-20 flex items-center text-xs font-bold uppercase tracking-widest text-gray-600 hover:text-black hover:bg-gray-50 border-r border-black last:border-r-0 transition-all"
            >
              02 // Experience
            </a>
            <a
              href="#education"
              className="px-6 h-20 flex items-center text-xs font-bold uppercase tracking-widest text-gray-600 hover:text-black hover:bg-gray-50 border-r border-black last:border-r-0 transition-all"
            >
              03 // Education
            </a>
            <a
              href="#skills"
              className="px-6 h-20 flex items-center text-xs font-bold uppercase tracking-widest text-gray-600 hover:text-black hover:bg-gray-50 transition-all"
            >
              04 // Skills
            </a>
          </div>

          {/* Action Blocks */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/resume"
              target="_blank"
              className="text-xs font-bold uppercase tracking-widest px-5 py-3 border border-black text-black hover:bg-black hover:text-white transition-colors rounded-none"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="text-xs font-bold uppercase tracking-widest px-5 py-3 bg-[#930507] text-white hover:bg-black transition-colors rounded-none border border-black"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Action Block */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col items-center justify-center gap-1.5 p-3 border border-black hover:bg-gray-50 transition-colors rounded-none"
            aria-label="Toggle Navigation Menu"
          >
            <span
              className={`w-6 h-0.5 bg-black transition-transform ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-black transition-opacity ${isMobileMenuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-black transition-transform ${isMobileMenuOpen ? "-rotate-45 -translate-y-1" : ""}`}
            ></span>
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div
          className={`md:hidden bg-white border-b border-black transition-all duration-300 ${isMobileMenuOpen ? "block" : "hidden"}`}
        >
          <div className="flex flex-col border-t border-black">
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-6 text-sm font-bold uppercase tracking-widest text-gray-600 hover:text-black hover:bg-gray-50 border-b border-black"
            >
              01 // About
            </a>
            <a
              href="#projects"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-6 text-sm font-bold uppercase tracking-widest text-gray-600 hover:text-black hover:bg-gray-50 border-b border-black"
            >
              02 // Experience
            </a>
            <a
              href="#education"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-6 text-sm font-bold uppercase tracking-widest text-gray-600 hover:text-black hover:bg-gray-50 border-b border-black"
            >
              03 // Education
            </a>
            <a
              href="#skills"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-6 text-sm font-bold uppercase tracking-widest text-gray-600 hover:text-black hover:bg-gray-50 border-b border-black"
            >
              04 // Skills
            </a>
            <a
              href="/resume"
              target="_blank"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-6 text-sm font-bold uppercase tracking-widest text-black hover:bg-gray-50 border-b border-black"
            >
              Resume
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-6 text-sm font-bold uppercase tracking-widest text-[#930507] hover:bg-gray-50"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="min-h-[85vh] flex items-center relative border-b border-black">
          {/* Bauhaus Architectural Grid lines behind hero */}
          <div className="absolute inset-0 grid grid-cols-12 pointer-events-none divide-x divide-black/5">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className="max-w-6xl mx-auto px-6 py-12 md:py-20 w-full relative z-10">
            <div className="grid md:grid-cols-12 gap-12">
              {/* Left Column */}
              <div className="md:col-span-7 flex flex-col justify-center">
                <p className="text-xs font-bold text-[#930507] tracking-widest uppercase mb-6 flex items-center gap-2">
                  <span>[ 01 // Introduction ]</span>
                  <span className="flex-grow h-px bg-black"></span>
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold tracking-tighter leading-none mb-8 text-black">
                  MARK
                  <br />
                  <span className="text-gray-400">RUMAHORBO</span>
                </h1>
                <div className="h-2 bg-[#930507] w-24 mb-8"></div>
                <p className="text-xl md:text-2xl font-light text-gray-700 leading-relaxed max-w-xl">
                  Digital strategy and transformation analyst. Bridging
                  technical architecture with executive decision-making.
                  Supporting
                  <span className="text-black font-semibold">
                    {" "}
                    target operating model design{" "}
                  </span>
                  and technical roadmaps for major financial institutions.
                </p>
              </div>

              {/* Right Column */}
              <div className="md:col-span-5 md:border-l border-black md:pl-12 flex flex-col justify-center space-y-8">
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                    Location
                  </p>
                  <p className="text-lg font-bold text-black uppercase tracking-tight">
                    Jakarta, Indonesia
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                    Status
                  </p>
                  <p className="text-lg font-bold text-[#930507] uppercase tracking-tight">
                    Exploring Full-Time Roles
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                    Profile Outline
                  </p>
                  <p className="text-lg font-bold text-black uppercase tracking-tight">
                    PwC South East Asia Alum
                  </p>
                  <p className="text-sm text-gray-500">
                    Financial Services Strategy & Operations
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                    Core Focus Fields
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className={tagStyle}>Digital Strategy</span>
                    <span className={tagStyle}>Target Operating Models</span>
                    <span className={tagStyle}>Market Intelligence</span>
                    <span className={tagStyle}>
                      Business Process Reengineering
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div
              className={`mt-16 flex items-center gap-4 text-gray-400 text-xs tracking-widest transition-opacity duration-500 ${isScrolled ? "opacity-0" : "opacity-100"}`}
            >
              <div className="w-6 h-10 border border-black flex justify-center pt-2 rounded-none">
                <div className="w-1.5 h-2 bg-black rounded-none animate-bounce"></div>
              </div>
              <span>SCROLL FOR ARCHIVE</span>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="py-16 md:py-24 border-b border-black bg-white relative z-10"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <p className="text-xs font-bold text-[#930507] tracking-widest uppercase mb-4 flex items-center gap-2">
                  <span>[ 02 // Profile ]</span>
                  <span className="flex-grow h-px bg-black"></span>
                </p>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
                  Operating
                  <br />
                  Perspective
                </h2>
              </div>
              <div className="md:col-span-8 md:border-l border-black md:pl-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#930507] text-[#930507] text-xs font-bold uppercase mb-8 rounded-none bg-red-50/20">
                  <span className="w-2.5 h-2.5 bg-[#930507]"></span>
                  Targeting Business & Digital Transformation Roles
                </div>

                <h3 className="text-2xl font-bold text-black mb-6 leading-tight uppercase tracking-tight">
                  Bridging pure computer science architecture with
                  executive-level target structures.
                </h3>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Holding a <strong>Bachelor of Computer Science (BCS)</strong>{" "}
                  from Universitas Gadjah Mada, I specialize in structuring
                  technology implementations, target operating model
                  configurations, and process reengineering plans for high-value
                  industries. My background allows me to navigate technical data
                  silos while formulating strategic frameworks tailored for
                  C-suite decision-makers.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  My experience at{" "}
                  <strong className="text-[#970503]">
                    PwC South East Asia Consulting
                  </strong>{" "}
                  focused on mapping as-is workflows against international
                  benchmarks (APQC) and formulating target governance structures
                  (financial regulatory frameworks). I construct board-ready
                  models that align multi-entity corporations with regional
                  business requirements.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-6 border-t border-black/10">
                  <a
                    href="https://linkedin.com/in/mark-rumahorbo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-wide hover:text-[#930507] transition-colors"
                  >
                    <LinkedInIcon />
                    LinkedIn Profile
                  </a>
                  <a
                    href="/resume"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-wide hover:text-[#930507] transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      ></path>
                    </svg>
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="py-16 md:py-24 bg-gray-50 border-b border-black"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12 md:mb-20">
              <p className="text-xs font-bold text-[#930507] tracking-widest uppercase mb-4 flex items-center gap-2">
                <span>[ 03 // Engagements ]</span>
                <span className="flex-grow h-px bg-black"></span>
              </p>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                Consulting Record
              </h2>
              <p className="text-gray-600 mt-4 max-w-xl text-xs">
                ARCHIVE OF ENGAGEMENTS AT PRICEWATERHOUSECOOPERS (PwC) SEA
                CONSULTING <br /> AND PRIVATE ENTERPRISES.
              </p>
            </div>

            {/* PwC Group Header with Unboxed Logo Placeholder (Corrected tight gap) */}
            <div className="flex items-center gap-3 mb-8 md:mb-10 pb-6 border-b border-black">
              <Image
                src="/logos/pwc.svg"
                alt="PwC SEA Consulting Logo"
                width={50}
                height={50}
                className="object-contain"
              />
              <div>
                <h3 className="font-bold text-lg uppercase tracking-tight text-black">
                  PwC South East Asia Consulting
                </h3>
                <p className="text-xs text-[#930507] font-bold uppercase tracking-wide">
                  Financial Services Strategy & Operations (May 2025 – May 2026)
                </p>
              </div>
            </div>

            {/* PwC Projects Container */}
            <div className="space-y-12 mb-12 md:mb-20">
              {/* Engagement 1: Conglomeration Target Operating Model */}
              <div className={cardHoverStyle}>
                {/* Meta Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-black pb-4 mb-6">
                  <div>
                    <span className="px-3 py-1 bg-red-100 text-[#930507] border border-[#930507] text-xs font-bold uppercase tracking-widest rounded-none">
                      TOM Stream Member
                    </span>
                    <h3 className="text-2xl font-black uppercase tracking-tight mt-3 text-black">
                      Conglomeration Target Operating Model (TOM)
                    </h3>
                  </div>
                  <div className="mt-4 md:mt-0 text-xs text-right text-gray-500">
                    <div>FEB 2026 – MAY 2026</div>
                    <div className="font-bold text-black mt-1">
                      Client: Major SE Asian Banking Group
                    </div>
                  </div>
                </div>

                {/* Engagement Architecture Layout (Fluid borders on mobile) */}
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Column 1: Scope */}
                  <div className="border-b md:border-b-0 md:border-r border-gray-200 pb-6 md:pb-0 pr-0 md:pr-6">
                    <h4 className="text-xs font-bold text-[#930507] uppercase tracking-wider mb-3">
                      01 // Institutional Scope
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Following OJK regulations mandating conglomerates to
                      implement structured, integrated governance (PIKK), the
                      parent banking entity required a unified operational and
                      governance roadmap coordinating 6 total business entities
                      (including securities, insurance, and asset management) to
                      achieve strategic scale synergies.
                    </p>
                  </div>
                  {/* Column 2: Work */}
                  <div className="border-b md:border-b-0 md:border-r border-gray-200 py-6 md:py-0 px-0 md:px-6">
                    <h4 className="text-xs font-bold text-[#930507] uppercase tracking-wider mb-3">
                      02 // Technical Analysis
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Baselined current-state configurations across all 5
                      subsidiaries. Evaluated operational compliance under PIKK
                      structural parameters. Mapped end-to-end processing across
                      40+ independent Standard Operating Procedures (SOPs) to
                      isolate opportunities for cross-entity operational
                      alignment (such as unified SME product development
                      frameworks).
                    </p>
                  </div>
                  {/* Column 3: Output */}
                  <div className="pt-6 md:pt-0 pl-0 md:pl-6">
                    <h4 className="text-xs font-bold text-[#930507] uppercase tracking-wider mb-3">
                      03 // Deliverables
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed font-medium">
                      Constructed a standardized group-wide RACI governance
                      model. Authored executive solutions and tactical slide
                      components deployed directly to client Boards of Directors
                      (BoD), Commissioners (BoC), and Executive Committees
                      (ExCo), achieving high alignment and approval.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-gray-100">
                  <span className={tagStyle}>OJK Regulations</span>
                  <span className={tagStyle}>PIKK Governance</span>
                  <span className={tagStyle}>RACI Matrix</span>
                  <span className={tagStyle}>6 Business Entities</span>
                  <span className={tagStyle}>SOP Synergy Mapping</span>
                </div>
              </div>

              {/* Engagement 2: Life Insurance Market Intelligence */}
              <div className={cardHoverStyle}>
                <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-black pb-4 mb-6">
                  <div>
                    <span className="px-3 py-1 bg-red-100 text-[#930507] border border-[#930507] text-xs font-bold uppercase tracking-widest rounded-none">
                      Growth Strategy & PMO Support
                    </span>
                    <h3 className="text-2xl font-black uppercase tracking-tight mt-3 text-black">
                      Life Insurance Market Intelligence
                    </h3>
                  </div>
                  <div className="mt-4 md:mt-0 text-xs text-right text-gray-500">
                    <div>DEC 2025 – FEB 2026</div>
                    <div className="font-bold text-black mt-1">
                      Client: Multinational Sharia Life Insurer
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {/* Column 1: Scope */}
                  <div className="border-b md:border-b-0 md:border-r border-gray-200 pb-6 md:pb-0 pr-0 md:pr-6">
                    <h4 className="text-xs font-bold text-[#930507] uppercase tracking-wider mb-3">
                      01 // Strategic Scope
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      A regional Sharia insurance leader targeted a 3x expansion
                      of its premium volume and overall client acquisition
                      pipeline over a 3-year execution window. They required
                      deep intelligence on competitor strategies across global
                      and regional markets to identify product development and
                      market penetration levers.
                    </p>
                  </div>
                  {/* Column 2: Work */}
                  <div className="border-b md:border-b-0 md:border-r border-gray-200 py-6 md:py-0 px-0 md:px-6">
                    <h4 className="text-xs font-bold text-[#930507] uppercase tracking-wider mb-3">
                      02 // Benchmarking Model
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Designed and built a regional analysis framework
                      leveraging Gross Written Premium (GWP)-to-GDP performance
                      indices. Tracked competitor distributions across South
                      Asia, Southeast Asia, and the Middle East, compiling
                      profiles of 10+ major competitors and mapping 30+
                      distinctive product lines.
                    </p>
                  </div>
                  {/* Column 3: Output */}
                  <div className="pt-6 md:pt-0 pl-0 md:pl-6">
                    <h4 className="text-xs font-bold text-[#930507] uppercase tracking-wider mb-3">
                      03 // Value Addition
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed font-medium">
                      Aggregated 5 years of competitor financials and
                      macroeconomic trends into executive-level slides. Managed
                      operational project coordination plans as PMO Support for
                      a joint 7-person team spanning strategy and actuarial
                      practices, ensuring continuous deliverable flow.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-gray-100">
                  <span className={tagStyle}>GWP-to-GDP Benchmarking</span>
                  <span className={tagStyle}>Regional Market Intelligence</span>
                  <span className={tagStyle}>Family Takaful Insurtech</span>
                  <span className={tagStyle}>Cross-Functional PMO</span>
                </div>
              </div>

              {/* Engagement 3: Enterprise Business Process Reengineering */}
              <div className={cardHoverStyle}>
                <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-black pb-4 mb-6">
                  <div>
                    <span className="px-3 py-1 bg-red-100 text-[#930507] border border-[#930507] text-xs font-bold uppercase tracking-widest rounded-none">
                      BPR Workstream Owner
                    </span>
                    <h3 className="text-2xl font-black uppercase tracking-tight mt-3 text-black">
                      Enterprise Business Process Reengineering (BPR)
                    </h3>
                  </div>
                  <div className="mt-4 md:mt-0 text-xs text-right text-gray-500">
                    <div>AUG 2025 – DEC 2025</div>
                    <div className="font-bold text-black mt-1">
                      Client: State-Owned Shipping Group
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {/* Column 1: Scope */}
                  <div className="border-b md:border-b-0 md:border-r border-gray-200 pb-6 md:pb-0 pr-0 md:pr-6">
                    <h4 className="text-xs font-bold text-[#930507] uppercase tracking-wider mb-3">
                      01 // Process Scope
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      A major state-owned holding logistics group and 6
                      associated operational subsidiaries experienced
                      operational delays, workflow gaps, and overlapping
                      procurement, finance, and logistics operations. A
                      group-wide process rationalization was required.
                    </p>
                  </div>
                  {/* Column 2: Work */}
                  <div className="border-b md:border-b-0 md:border-r border-gray-200 py-6 md:py-0 px-0 md:px-6">
                    <h4 className="text-xs font-bold text-[#930507] uppercase tracking-wider mb-3">
                      02 // APQC Mapping
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Led mapped diagnostics of the Procurement and QHSSE
                      processes, utilizing the APQC process framework to achieve
                      uniformity. Facilitated ~20 structured workshops with key
                      client managers to identify operational choke points,
                      division overlaps, and control anomalies.
                    </p>
                  </div>
                  {/* Column 3: Output */}
                  <div className="pt-6 md:pt-0 pl-0 md:pl-6">
                    <h4 className="text-xs font-bold text-[#930507] uppercase tracking-wider mb-3">
                      03 // Deliverables & Re-design
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed font-medium">
                      Redesigned 130+ distinct to-be process maps. Proposed 30+
                      functional redesign blueprints and defined 100+ KPMs to
                      benchmark Shared Service Center (SSC) capabilities.
                      Presented results directly to PwC Partners and Client VPs.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-gray-100">
                  <span className={tagStyle}>APQC Framework</span>
                  <span className={tagStyle}>To-be Process Optimization</span>
                  <span className={tagStyle}>Shared Service Feasibility</span>
                  <span className={tagStyle}>KPM Architecture</span>
                </div>
              </div>

              {/* Engagement 4: Sales & Marketing Transformation (Salesforce) */}
              <div className={cardHoverStyle}>
                <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-black pb-4 mb-6">
                  <div>
                    <span className="px-3 py-1 bg-red-100 text-[#930507] border border-[#930507] text-xs font-bold uppercase tracking-widest rounded-none">
                      Tech & Data Stream Analyst
                    </span>
                    <h3 className="text-2xl font-black uppercase tracking-tight mt-3 text-black">
                      Sales & Marketing CRM Transformation
                    </h3>
                  </div>
                  <div className="mt-4 md:mt-0 text-xs text-right text-gray-500">
                    <div>MAY 2025 – AUG 2025</div>
                    <div className="font-bold text-black mt-1">
                      Client: State-Owned Commercial Bank
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {/* Column 1: Scope */}
                  <div className="border-b md:border-b-0 md:border-r border-gray-200 pb-6 md:pb-0 pr-0 md:pr-6">
                    <h4 className="text-xs font-bold text-[#930507] uppercase tracking-wider mb-3">
                      01 // Integration Scope
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      A leading state bank aimed to unify sales and marketing
                      operations by adopting Salesforce Sales and Marketing
                      Clouds. They required integrated mapping across 50+ core
                      banking, legacy CRM, enterprise data management (EDM), and
                      knowledge base environments.
                    </p>
                  </div>
                  {/* Column 2: Work */}
                  <div className="border-b md:border-b-0 md:border-r border-gray-200 py-6 md:py-0 px-0 md:px-6">
                    <h4 className="text-xs font-bold text-[#930507] uppercase tracking-wider mb-3">
                      02 // Architecture Analysis
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Owned the underlying application interaction and data
                      architecture mappings. Indexed and aligned 100+ critical
                      target client data parameters to build and maintain the
                      project's comprehensive Requirements Traceability Matrix
                      (RTM).
                    </p>
                  </div>
                  {/* Column 3: Output */}
                  <div className="pt-6 md:pt-0 pl-0 md:pl-6">
                    <h4 className="text-xs font-bold text-[#930507] uppercase tracking-wider mb-3">
                      03 // Tactical Enablement
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed font-medium">
                      Co-authored a 3-stage CRM transition plan, compiled
                      technical terms of reference (ToR), and developed a
                      functional scoring matrix to analyze vendor proposals,
                      successfully de-risking system integrator onboarding.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-gray-100">
                  <span className={tagStyle}>Salesforce Ecosystem</span>
                  <span className={tagStyle}>RTM Management</span>
                  <span className={tagStyle}>Data Architecture</span>
                  <span className={tagStyle}>Integration Topology</span>
                </div>
              </div>

              {/* Engagement 5: Pre-Sales & RFP Strategy (Designed with full brand hover & active sectors) */}
              <div className="bg-black text-white p-8 rounded-none border border-transparent border-t-4 border-t-[#930507] hover:border-[#930507] hover:shadow-[6px_6px_0px_0px_rgba(147,5,7,1)] hover:-translate-y-0.5 transition-all duration-300 group">
                <div className="flex flex-col md:flex-row md:items-start justify-between border-b border-white/10 pb-6 mb-8">
                  <div>
                    <span className="px-3 py-1 bg-[#930507] text-white border border-[#930507] text-[10px] font-bold uppercase tracking-widest rounded-none">
                      Bid & Response Strategy
                    </span>
                    <h3 className="text-2xl font-black uppercase tracking-tight mt-3 text-white">
                      Proposal Development & Competitive RFPs
                    </h3>
                    <p className="text-gray-400 text-xs mt-1">
                      Direct Collaboration with Senior Managers & Directors
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0 text-xs text-right text-[#930507] font-bold uppercase tracking-wider">
                    <div>PwC DEAL DESK</div>
                    <div className="text-white font-normal mt-1">
                      MAY 2025 – MAY 2026
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-12 gap-8">
                  {/* Left Column - Bid Board with sector hovers */}
                  <div className="md:col-span-5 border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-8">
                    <p className="text-xs font-bold text-[#930507] uppercase tracking-wider mb-4">
                      [ Key Sectors & Accounts Target Map ]
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-4 bg-white/5 border border-white/10 hover:bg-[#930507] hover:border-[#930507] transition-all duration-200 cursor-default group/sector">
                        <p className="text-[10px] text-gray-400 group-hover/sector:text-white/70 uppercase tracking-widest mb-1">
                          01 // CENTRAL BANK
                        </p>
                        <p className="text-xs font-bold text-white uppercase">
                          CRM Cloud Migration
                        </p>
                      </div>
                      <div className="p-4 bg-white/5 border border-white/10 hover:bg-[#930507] hover:border-[#930507] transition-all duration-200 cursor-default group/sector">
                        <p className="text-[10px] text-gray-400 group-hover/sector:text-white/70 uppercase tracking-widest mb-1">
                          02 // PUBLIC HOSPITAL
                        </p>
                        <p className="text-xs font-bold text-white uppercase">
                          Salesforce Core CRM
                        </p>
                      </div>
                      <div className="p-4 bg-white/5 border border-white/10 hover:bg-[#930507] hover:border-[#930507] transition-all duration-200 cursor-default group/sector">
                        <p className="text-[10px] text-gray-400 group-hover/sector:text-white/70 uppercase tracking-widest mb-1">
                          03 // HEALTH MINISTRY
                        </p>
                        <p className="text-xs font-bold text-white uppercase">
                          Cloud Infrastructure
                        </p>
                      </div>
                      <div className="p-4 bg-white/5 border border-white/10 hover:bg-[#930507] hover:border-[#930507] transition-all duration-200 cursor-default group/sector">
                        <p className="text-[10px] text-gray-400 group-hover/sector:text-white/70 uppercase tracking-widest mb-1">
                          04 // FINANCE MINISTRY
                        </p>
                        <p className="text-xs font-bold text-white uppercase">
                          Asset Operating Model
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Strategic Tasks */}
                  <div className="md:col-span-7 flex flex-col justify-between">
                    <div>
                      <p className="text-xs font-bold text-[#930507] uppercase tracking-wider mb-4">
                        [ Core Deliverables Portfolio ]
                      </p>
                      <p className="text-sm text-gray-300 leading-relaxed mb-6">
                        Served as key delivery engine for competitive public and
                        commercial tenders. Drafted integrated end-to-end bid
                        elements including structural competitor benchmarks,
                        complex pricing models, resourcing allocations, and
                        project execution schedules.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                      <span className={tagStyle2}>Bid Management</span>
                      <span className={tagStyle2}>
                        Resource Budget Modeling
                      </span>
                      <span className={tagStyle2}>Government RFPs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Achievements & Engagements Section */}
            <div className="border-t border-black pt-16">
              <h3 className="text-2xl font-black uppercase tracking-tight mb-8">
                Additional Professional Experience
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Family Business Interim Card (Corrected logo gap & hover effect) */}
                <div className={cardHoverStyle}>
                  <div className="flex items-center gap-3 mb-6">
                    <FamilyBusinessLogo />
                    <div>
                      <h4 className="font-bold text-lg uppercase tracking-tight text-black">
                        Operations & Analytics
                      </h4>
                      <p className="text-xs font-bold text-[#930507] uppercase">
                        Private Agribusiness & Retail Enterprise
                      </p>
                    </div>
                  </div>

                  <div className="text-xs font-bold text-gray-500 mb-4">
                    JUL 2024 – APR 2025
                  </div>

                  <ul className="space-y-3 text-sm text-gray-600 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#930507] mt-1.5 flex-shrink-0"></span>
                      <span>
                        Configured integrated spreadsheet logs to track daily
                        operations, feed-to-egg yield efficiencies, and asset
                        costs, locating high-waste areas.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#930507] mt-1.5 flex-shrink-0"></span>
                      <span>
                        Constructed a customized yield tracking dashboard using
                        a React front-end application to increase operating
                        transparency.
                      </span>
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    <span className={tagStyle}>Agribusiness</span>
                    <span className={tagStyle}>Retail Operations</span>
                    <span className={tagStyle}>React Dashboard</span>
                  </div>
                </div>

                {/* Naga Cybersecurity Card (Corrected logo gap & hover effect) */}
                <div className={cardHoverStyle}>
                  <div className="flex items-center gap-3 mb-6">
                    <Image
                      src="/logos/ncs.webp"
                      alt="Naga Cybersecurity Logo"
                      width={50}
                      height={50}
                      className="object-contain animate-none"
                    />
                    <div>
                      <h4 className="font-bold text-lg uppercase tracking-tight text-black">
                        Cybersecurity Operations
                      </h4>
                      <p className="text-xs font-bold text-[#930507] uppercase">
                        Naga Cybersecurity
                      </p>
                    </div>
                  </div>

                  <div className="text-xs font-bold text-gray-500 mb-4">
                    AUG 2021 – JAN 2022
                  </div>

                  <ul className="space-y-3 text-sm text-gray-600 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#930507] mt-1.5 flex-shrink-0"></span>
                      <span>
                        Tracked daily corporate digital endpoint security alerts
                        using Trellix EDR to assist senior operations analysts
                        in isolating threats.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#930507] mt-1.5 flex-shrink-0"></span>
                      <span>
                        Assisted with policy review and documentation of
                        operational security controls using NIST-aligned
                        concepts.
                      </span>
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    <span className={tagStyle}>Cybersecurity</span>
                    <span className={tagStyle}>NIST Framework</span>
                    <span className={tagStyle}>Trellix EDR</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section — Swiss Bauhaus 3-Column Editorial Grid with unbordered Logos */}
        <section
          id="education"
          className="py-16 md:py-24 border-b border-black"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12 md:mb-16">
              <p className="text-xs font-bold text-[#930507] tracking-widest uppercase mb-4 flex items-center gap-2">
                <span>[ 04 // Education ]</span>
                <span className="flex-grow h-px bg-black"></span>
              </p>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                Academic Background
              </h2>
            </div>

            {/* Stark Editorial Grid Layout (Fluid gap, padding, & fluid vertical borders) */}
            <div className="grid md:grid-cols-3 border-t border-b border-black divide-y md:divide-y-0 md:divide-x divide-black bg-white">
              {/* UGM Block */}
              <div className="p-6 md:p-8 flex flex-col justify-between min-h-0 md:min-h-[420px] border border-transparent hover:border-[#930507] hover:shadow-[6px_6px_0px_0px_rgba(147,5,7,1)] hover:-translate-y-0.5 transition-all duration-300">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-5xl font-black text-gray-200">01</div>
                    <Image
                      src="/logos/ugm.png"
                      alt="Universitas Gadjah Mada Logo"
                      width={50}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-black leading-none mb-2">
                    UNIVERSITAS GADJAH MADA
                  </h3>
                  <p className="text-xs font-bold text-[#930507] uppercase tracking-wider mb-4">
                    Bachelor of Computer Science
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    Specialized in system analysis, structured databases, and
                    computational analytics.
                    <span className="block w-full h-[1px] bg-[#930507] my-2"></span>
                    <span className="block mt-2 text-xs text-gray-500 font-mono tracking-tight">
                      Thesis: Binary Static Analysis via Instruction/Operand
                      Extraction & AHC.
                    </span>
                  </p>
                  <p className="text-xs uppercase tracking-wide text-gray-500 font-bold mb-4">
                    GPA: 3.59/4.00 (Cum Laude)
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    <span className={tagStyle}>Cybersecurity</span>
                    <span className={tagStyle}>Machine Learning</span>
                    <span className={tagStyle}>IT Project Management</span>
                  </div>
                </div>
                <div className="pt-6 border-t border-gray-100 text-xs text-gray-500 flex justify-between">
                  <span>Yogyakarta, ID</span>
                  <span>2020 – 2024</span>
                </div>
              </div>

              {/* Universität Leipzig Block */}
              <div className="p-6 md:p-8 flex flex-col justify-between min-h-0 md:min-h-[420px] border border-transparent hover:border-[#930507] hover:shadow-[6px_6px_0px_0px_rgba(147,5,7,1)] hover:-translate-y-0.5 transition-all duration-300">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-5xl font-black text-gray-200">02</div>
                    <Image
                      src="/logos/leipzig.svg"
                      alt="Universität Leipzig Logo"
                      width={50}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-black leading-none mb-2">
                    UNIVERSITÄT <br /> LEIPZIG
                  </h3>
                  <p className="text-xs font-bold text-[#930507] uppercase tracking-wider mb-4">
                    Exchange Semester // DAAD Scholar
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    Enrolled in advanced digital humanities, interface studies,
                    and computational structures under German DAAD scholarship.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    <span className={tagStyle}>DAAD Scholarship</span>
                    <span className={tagStyle}>Digital Humanities</span>
                    <span className={tagStyle}>Information Retrieval (IR)</span>
                  </div>
                </div>
                <div className="pt-6 border-t border-gray-100 text-xs text-gray-500 flex justify-between">
                  <span>Leipzig, DE</span>
                  <span>2023</span>
                </div>
              </div>

              {/* High School / IB Diploma Block */}
              <div className="p-6 md:p-8 flex flex-col justify-between min-h-0 md:min-h-[420px] border border-transparent hover:border-[#930507] hover:shadow-[6px_6px_0px_0px_rgba(147,5,7,1)] hover:-translate-y-0.5 transition-all duration-300">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-5xl font-black text-gray-200">03</div>
                    <Image
                      src="/logos/yis.svg"
                      alt="Yogyakarta Independent School Logo"
                      width={50}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-black leading-none mb-2">
                    YOGYAKARTA INDEPENDENT SCHOOL
                  </h3>
                  <p className="text-xs font-bold text-[#930507] uppercase tracking-wider mb-4">
                    International Baccalaureate Diploma
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    Rigorous global pre-university program focusing on Design
                    Technology, English Literature, and Environmental Systems.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    <span className={tagStyle}>Design Technology HL</span>
                    <span className={tagStyle}>English HL</span>
                    <span className={tagStyle}>
                      Environmental Systems and Societes HL
                    </span>
                  </div>
                </div>
                <div className="pt-6 border-t border-gray-100 text-xs text-gray-500 flex justify-between">
                  <span>Yogyakarta, ID</span>
                  <span>Grad. 2020</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section — Stark Bauhaus Black & Red Geometric Layout */}
        <section className="py-16 md:py-24 bg-black text-white relative overflow-hidden border-b border-black">
          {/* Subtle line background */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-12 gap-12">
              {/* Title Pillar */}
              <div className="md:col-span-4 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-bold text-[#930507] tracking-widest uppercase mb-4 flex items-center gap-2">
                    <span>[ 05 // Leadership ]</span>
                    <span className="flex-grow h-px bg-[#930507]/40"></span>
                  </p>
                  <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-6">
                    STUDENT
                    <br />
                    LEADERSHIP
                  </h2>
                  <p className="text-gray-400 text-xs max-w-xs">
                    CROSS-FUNCTIONAL STAKEHOLDER MANAGEMENT AND EVENT DIRECTION
                    ROLES.
                  </p>
                </div>
                <div className="hidden md:block text-8xl font-black text-white/5 select-none leading-none">
                  HIMAKOM
                </div>
              </div>

              {/* Reworked Timeline Area */}
              <div className="md:col-span-8 md:border-l border-white/20 md:pl-12 space-y-12 relative">
                {/* Timeline Axis - Bauhaus Structural Lines */}
                <div className="absolute left-0 top-0 bottom-0 ml-[-1px] w-px bg-white/20 hidden md:block"></div>

                {/* Project Node 1 */}
                <div className="relative md:pl-8">
                  {/* Custom Intersection Vector for desktop */}
                  <div className="absolute left-[-13px] top-1.5 hidden md:block">
                    <GridMarkerSVG />
                  </div>

                  <div className="border border-white/10 bg-white/[0.02] p-6 md:p-8 rounded-none hover:bg-white/[0.04] hover:border-white/20 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-white/10">
                      <div>
                        <span className="text-xs font-bold text-[#930507] uppercase tracking-widest">
                          National Seminar Series
                        </span>
                        <h4 className="text-2xl font-black uppercase tracking-tight text-white mt-1">
                          Event Chairman
                        </h4>
                      </div>
                      <span className="text-xs bg-white/10 px-3 py-1 border border-white/10 rounded-none text-white">
                        OCT 2020 – OCT 2022
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      Chaired UGM's National UI/UX tech seminar. Managed
                      cross-functional operational squads (including speakers
                      logistics, corporate marketing, and digital
                      administration) ensuring high event performance and
                      execution.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-white/5 text-xs">
                      <div>
                        <div className="text-[#930507] font-bold uppercase mb-1">
                          Key Metrics
                        </div>
                        <div className="text-white">
                          200+ National Attendees
                        </div>
                      </div>
                      <div>
                        <div className="text-[#930507] font-bold uppercase mb-1">
                          Speaker Engagement
                        </div>
                        <div className="text-white">
                          Secured 2 Industry-Expert Alumni
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Node 2 */}
                <div className="relative md:pl-8">
                  <div className="absolute left-[-13px] top-1.5 hidden md:block">
                    <GridMarkerSVG />
                  </div>

                  <div className="border border-white/10 bg-white/[0.02] p-6 md:p-8 rounded-none hover:bg-white/[0.04] hover:border-white/20 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-white/10">
                      <div>
                        <span className="text-xs font-bold text-[#930507] uppercase tracking-widest">
                          Creative Asset Campaigns
                        </span>
                        <h4 className="text-2xl font-black uppercase tracking-tight text-white mt-1">
                          Brand & Communications Lead
                        </h4>
                      </div>
                      <span className="text-xs bg-white/10 px-3 py-1 border border-white/10 rounded-none text-white">
                        HIMAKOM COMS
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      Supervised a 3-person creative cohort tasked with
                      establishing complete visual design guidelines, event
                      frameworks, and public campaigns across our core
                      structural programs.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-white/5 text-xs">
                      <div>
                        <div className="text-[#930507] font-bold uppercase mb-1">
                          Scope
                        </div>
                        <div className="text-white">
                          Unified Multi-Channel Branding
                        </div>
                      </div>
                      <div>
                        <div className="text-[#930507] font-bold uppercase mb-1">
                          Engagement
                        </div>
                        <div className="text-white">
                          Drove 20+ Program Registrants
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section — Editorial Band Grid */}
        <section id="skills" className="py-16 md:py-24 border-b border-black">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12 md:mb-16">
              <p className="text-xs font-bold text-[#930507] tracking-widest uppercase mb-4 flex items-center gap-2">
                <span>[ 06 // Capabilities ]</span>
                <span className="flex-grow h-px bg-black"></span>
              </p>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                Methodologies & Tools
              </h2>
            </div>

            <div className="border-t border-black divide-y divide-black bg-white">
              {/* Capability Band 1 */}
              <div className="grid md:grid-cols-12 py-8 items-center">
                <div className="md:col-span-4 mb-4 md:mb-0">
                  <h3 className="text-xl font-black uppercase tracking-tight">
                    Transformation & Advisory
                  </h3>
                  <p className="text-xs text-gray-400 mt-1 uppercase">
                    9 Key Operations Focuses
                  </p>
                </div>
                <div className="md:col-span-8 flex flex-wrap gap-2">
                  <span className={tagStyle}>Business Transformation</span>
                  <span className={tagStyle}>Digital Advisory</span>
                  <span className={tagStyle}>
                    Business Process Reengineering
                  </span>
                  <span className={tagStyle}>Process Optimization</span>
                  <span className={tagStyle}>Workflow Mapping</span>
                  <span className={tagStyle}>Target Operating Models</span>
                  <span className={tagStyle}>RACI Governance Design</span>
                  <span className={tagStyle}>Management PMO</span>
                  <span className={tagStyle}>Executive Storylining</span>
                </div>
              </div>

              {/* Capability Band 2 */}
              <div className="grid md:grid-cols-12 py-8 items-center">
                <div className="md:col-span-4 mb-4 md:mb-0">
                  <h3 className="text-xl font-black uppercase tracking-tight">
                    Functional Strategy
                  </h3>
                  <p className="text-xs text-gray-400 mt-1 uppercase">
                    10 Functional Skills
                  </p>
                </div>
                <div className="md:col-span-8 flex flex-wrap gap-2">
                  <span className={tagStyle}>As-Is/To-Be Documentation</span>
                  <span className={tagStyle}>APQC Standards</span>
                  <span className={tagStyle}>Requirements Gathering</span>
                  <span className={tagStyle}>RTM Matrices</span>
                  <span className={tagStyle}>Salesforce Strategy</span>
                  <span className={tagStyle}>Marketing Cloud Operations</span>
                  <span className={tagStyle}>Data Integration Mapping</span>
                  <span className={tagStyle}>Interface Topologies</span>
                  <span className={tagStyle}>Business Intelligence</span>
                  <span className={tagStyle}>Benchmarking</span>
                </div>
              </div>

              {/* Capability Band 3 */}
              <div className="grid md:grid-cols-12 py-8 items-center">
                <div className="md:col-span-4 mb-4 md:mb-0">
                  <h3 className="text-xl font-black uppercase tracking-tight">
                    Tools & Languages
                  </h3>
                  <p className="text-xs text-gray-400 mt-1 uppercase">
                    Technologies & Communication
                  </p>
                </div>
                <div className="md:col-span-8 flex items-center flex-wrap gap-4">
                  <div className="flex flex-wrap gap-2">
                    <span className={tagStyle}>PowerPoint</span>
                    <span className={tagStyle}>Excel</span>
                    <span className={tagStyle}>Visio</span>
                    <span className={tagStyle}>Tableau</span>
                    <span className={tagStyle}>React</span>
                    <span className={tagStyle}>Web Development</span>
                    <span className={tagStyle}>Python</span>
                    <span className={tagStyle}>C++</span>
                    <span className={tagStyle}>SQL</span>
                    <span className={tagStyle}>Machine Learning</span>
                    <span className={tagStyle}>Data Analytics</span>
                  </div>
                  <div className="w-px h-6 bg-black/20 hidden md:block"></div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-red-50 border border-[#930507] text-[#930507] text-xs font-bold rounded-none hover:bg-[#930507] hover:text-white hover:border-[#930507] transition-all duration-200">
                      INDONESIAN (NATIVE)
                    </span>
                    <span className="px-3 py-1.5 bg-red-50 border border-[#930507] text-[#930507] text-xs font-bold rounded-none hover:bg-[#930507] hover:text-white hover:border-[#930507] transition-all duration-200">
                      ENGLISH (FLUENT)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-16 md:py-24 bg-gray-50 border-b border-black"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-12 items-start">
              {/* Left Column */}
              <div className="md:col-span-5">
                <p className="text-xs font-bold text-[#930507] tracking-widest uppercase mb-4 flex items-center gap-2">
                  <span>[ 07 // Connection ]</span>
                  <span className="flex-grow h-px bg-black"></span>
                </p>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">
                  Initiate Outreach
                </h2>
                <p className="text-md text-gray-700 leading-relaxed mb-8">
                  Available for strategic opportunities across target operating
                  model mapping, process architecture design, and technology
                  transformation groups.
                </p>

                {/* Main Action Block */}
                <a
                  href="mailto:mark.real.rumahorbo@gmail.com"
                  className="group flex items-center justify-between p-5 bg-[#930507] text-white hover:bg-black transition-all duration-300 rounded-none border border-black w-full"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/15 flex items-center justify-center rounded-none">
                      <MailIcon />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] text-white/60 uppercase tracking-widest">
                        Direct Communication
                      </p>
                      <p className="text-sm font-bold tracking-normal">
                        mark.real.rumahorbo@gmail.com
                      </p>
                    </div>
                  </div>
                  <svg
                    className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>

              {/* Right Column */}
              <div className="md:col-span-7">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">
                  Auxiliary Channels
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Telephone Card */}
                  <a
                    href="tel:+6281215596949"
                    className="group flex items-center gap-4 p-5 bg-white border border-black hover:border-[#930507] hover:shadow-[6px_6px_0px_0px_rgba(147,5,7,1)] hover:-translate-y-0.5 transition-all duration-300 rounded-none"
                  >
                    <div className="w-10 h-10 border border-black flex items-center justify-center flex-shrink-0 group-hover:bg-[#930507] group-hover:text-white transition-all rounded-none">
                      <PhoneIcon />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[9px] text-gray-400 uppercase tracking-wider">
                        Mobile / WhatsApp
                      </p>
                      <p className="text-sm font-bold text-black mt-0.5 truncate group-hover:text-black transition-colors">
                        +62 812 1559 6949
                      </p>
                    </div>
                  </a>

                  {/* LinkedIn Card */}
                  <a
                    href="https://linkedin.com/in/mark-rumahorbo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-5 bg-white border border-black hover:border-[#930507] hover:shadow-[6px_6px_0px_0px_rgba(147,5,7,1)] hover:-translate-y-0.5 transition-all duration-300 rounded-none"
                  >
                    <div className="w-10 h-10 border border-black flex items-center justify-center flex-shrink-0 group-hover:bg-[#930507] group-hover:text-white transition-all rounded-none">
                      <LinkedInIcon />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[9px] text-gray-400 uppercase tracking-wider">
                        Professional Link
                      </p>
                      <p className="text-sm font-bold text-black mt-0.5 truncate group-hover:text-black transition-colors">
                        Mark Rumahorbo
                      </p>
                    </div>
                  </a>

                  {/* GitHub Card */}
                  <a
                    href="https://github.com/Markkreel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-5 bg-white border border-black hover:border-[#930507] hover:shadow-[6px_6px_0px_0px_rgba(147,5,7,1)] hover:-translate-y-0.5 transition-all duration-300 rounded-none"
                  >
                    <div className="w-10 h-10 border border-black flex items-center justify-center flex-shrink-0 group-hover:bg-[#930507] group-hover:text-white transition-all rounded-none">
                      <GithubIcon />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[9px] text-gray-400 uppercase tracking-wider">
                        Source Repositories
                      </p>
                      <p className="text-sm font-bold text-black mt-0.5 truncate group-hover:text-black transition-colors">
                        Markkreel
                      </p>
                    </div>
                  </a>

                  {/* Resume Card */}
                  <a
                    href="/resume"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-5 bg-white border border-black hover:border-[#930507] hover:shadow-[6px_6px_0px_0px_rgba(147,5,7,1)] hover:-translate-y-0.5 transition-all duration-300 rounded-none"
                  >
                    <div className="w-10 h-10 border border-black flex items-center justify-center flex-shrink-0 group-hover:bg-[#930507] group-hover:text-white transition-all rounded-none">
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
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-[9px] text-gray-400 uppercase tracking-wider">
                        Archived Dossier
                      </p>
                      <p className="text-sm font-bold text-black mt-0.5 truncate group-hover:text-black transition-colors">
                        Resume (EN)
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 ">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              © 2026 Mark Rumahorbo.
            </p>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Jakarta, Indonesia
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
