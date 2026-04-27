"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Helper SVG Components (Keep these as they are clean)
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
      strokeWidth={2}
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
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    // NOTICE: No <body> tag here, just the content
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-black/5 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center">
            <Image
              src="/favicon.svg"
              alt="Mark Rumahorbo Logo"
              width={36}
              height={36}
              className="h-10 w-10"
              priority
            />
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="nav-link text-sm text-gray-600 hover:text-black transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="nav-link text-sm text-gray-600 hover:text-black transition-colors"
            >
              Experiences
            </a>
            <a
              href="#education"
              className="nav-link text-sm text-gray-600 hover:text-black transition-colors"
            >
              Education
            </a>
            <a
              href="#skills"
              className="nav-link text-sm text-gray-600 hover:text-black transition-colors"
            >
              Skills
            </a>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/resume"
              target="_blank"
              className="text-sm font-medium px-4 py-2 border border-black text-black hover:bg-black hover:text-white transition-colors"
            >
              Resume
            </a>
            <a
              href="#contact" // Changed from mailto:
              className="btn-primary text-sm font-medium px-4 py-2 bg-black text-white hover:bg-accent transition-colors relative overflow-hidden border border-black"
            >
              <span>Contact</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="hamburger md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span className="hamburger-line w-6 h-0.5 bg-black"></span>
            <span className="hamburger-line w-6 h-0.5 bg-black"></span>
            <span className="hamburger-line w-6 h-0.5 bg-black"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="mobile-menu md:hidden p-6">
          <div className="flex flex-col gap-6">
            <a
              href="#about"
              className="text-xl font-medium text-gray-600 hover:text-black"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-xl font-medium text-gray-600 hover:text-black"
            >
              Projects
            </a>
            <a
              href="#education"
              className="text-xl font-medium text-gray-600 hover:text-black"
            >
              Education
            </a>
            <a
              href="#skills"
              className="text-xl font-medium text-gray-600 hover:text-black"
            >
              Skills
            </a>
            <a
              href="/resume"
              target="_blank"
              className="text-xl font-medium text-black"
            >
              Resume
            </a>
            <a
              href="#contact" // Changed from mailto:
              className="text-xl font-medium text-accent"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="hero-section min-h-[85vh] grid-bg flex items-start pt-16 md:items-center md:pt-40">
          <div className="max-w-6xl mx-auto px-6 py-10 md:py-20 w-full">
            <div className="grid md:grid-cols-12 gap-8 md:gap-12">
              {/* Left Column */}
              <div className="md:col-span-7">
                <p className="section-number mb-6 hero-title">
                  <span className="section-number-text">01 — INTRODUCTION</span>
                  <span className="section-number-line"></span>
                </p>
                <h1 className="hero-title text-[3.5rem] md:text-7xl font-semibold tracking-tighter leading-[0.9] mb-4">
                  Mark
                  <br className="md:hidden" />
                  <span className="text-gray-400"> Rumahorbo</span>
                </h1>
                <div className="hero-line h-0.5 bg-accent mb-8"></div>
                <p className="hero-subtitle text-xl md:text-2xl font-light text-gray-600 leading-relaxed max-w-xl">
                  Digital strategy and transformation professional bridging
                  technical architecture with executive decision-making.
                  Delivering
                  <span className="text-black font-medium">
                    {" enterprise solutions "}
                  </span>
                  for leading banks and insurers.
                </p>
              </div>

              {/* Right Column */}
              <div className="md:col-span-5 md:border-l md:border-black/10 md:pl-12 reveal-right">
                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">
                      Location
                    </p>
                    <p className="text-lg text-gray-800">Jakarta, Indonesia</p>
                  </div>

                  {/* UPDATE 1: Softer, active phrasing */}
                  <div>
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">
                      Current Status
                    </p>
                    <p className="text-lg text-gray-800">
                      Exploring Full-Time Opportunities
                    </p>
                  </div>

                  {/* UPDATE 2: Changed back to "Current Role" */}
                  <div>
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">
                      Current Role
                    </p>
                    <p className="text-lg text-gray-800 font-medium">
                      Consulting Intern
                    </p>
                    <p className="text-base text-gray-500">
                      PwC South East Asia Consulting
                      {/* <span className="text-sm">(Contract)</span> */}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">
                      Core Capabilities
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="tag">Digital Strategy</span>
                      <span className="tag">Target Operating Models</span>
                      <span className="tag">Enterprise CRM</span>
                      <span className="tag">Data Architecture</span>
                      <span className="tag">Growth Benchmarking</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll indicator */}
            <div
              className={`
        scroll-indicator mt-20 flex items-center gap-4 text-gray-400
        transition-opacity duration-500
        ${isScrolled ? "opacity-0" : "opacity-100"}
      `}
            >
              <div className="w-8 h-12 border border-gray-300 rounded-full flex justify-center pt-2">
                <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce"></div>
              </div>
              <span className="text-sm">Scroll to explore</span>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="py-24 border-t border-black/5 bg-white relative z-10"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-8 md:gap-12">
              <div className="md:col-span-4 reveal-left">
                <p className="section-number mb-4">
                  <span className="section-number-text">02 — ABOUT</span>
                  <span className="section-number-line"></span>
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                  Professional Profile
                </h2>
              </div>
              <div className="md:col-span-8 md:border-l md:border-black/10 md:pl-12 reveal-right">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 text-accent text-sm font-medium mb-6">
                  <span className="status-dot">
                    <span className="status-dot-core"></span>
                    <span className="status-dot-pulse"></span>
                    <span className="status-dot-ring"></span>
                  </span>
                  Available for full-time opportunities
                </div>

                {/* <h3 className="text-2xl font-medium text-black mb-4 leading-tight">
                  Bridging the gap between technical architecture and executive
                  strategy.
                </h3>

                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  I am a digital transformation and strategy consultant with a
                  <strong>Bachelor's degree in Computer Science (BCS)</strong>{" "}
                  and hands-on experience at{" "}
                  <span className="text-black font-medium">
                    PwC South East Asia.
                  </span>{" "}
                  My work focuses on translating complex operational bottlenecks
                  and siloed data into clear, executable transformation roadmaps
                  for major financial institutions and State-Owned Enterprises
                  (SoEs).
                </p>

                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  While my hard skills are rooted in data architecture, CRM
                  strategy (Salesforce), and APQC-aligned enterprise process
                  reengineering, my core value lies in{" "}
                  <strong>
                    executive storylining and stakeholder alignment
                  </strong>
                  . I thrive in navigating ambiguity, taking deep, technical
                  as-is analyses and structuring them into Target Operating
                  Models (TOM) and strategic recommendations that empower client
                  VPs and Directors to make confident business decisions.
                </p> */}

                <h3 className="text-2xl font-medium text-black mb-4 leading-tight">
                  Bridging the gap between technical architecture and executive
                  strategy.
                </h3>

                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  I am a digital transformation consultant with a{" "}
                  <strong>Bachelor of Computer Science (BCS)</strong> and
                  consulting experience at{" "}
                  <span className="text-[#930507] font-medium">
                    <strong>PwC South East Asia</strong>
                  </span>
                  . I specialize in translating complex operational bottlenecks
                  and siloed data into executable transformation roadmaps for
                  leading financial institutions and State-Owned Enterprises
                  (SOEs).
                </p>

                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  My technical foundation allows me to seamlessly navigate{" "}
                  <strong>Salesforce architectures</strong> and lead
                  APQC-aligned <strong>process reengineering</strong>. However,
                  my core value lies in <strong>executive storylining</strong>,
                  structuring deep technical analyses into{" "}
                  <strong>Target Operating Models (TOM)</strong> that empower
                  client VPs and Directors to make confident, data-driven
                  decisions.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                  <a
                    href="https://linkedin.com/in/mark-rumahorbo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium accent-line"
                  >
                    <LinkedInIcon />
                    View LinkedIn Profile
                  </a>
                  <a
                    href="/resume"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium accent-line"
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
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="py-24 bg-gray-50 border-t border-black/5"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-16 reveal">
              <p className="section-number mb-4">
                <span className="section-number-text">
                  03 — PROFESSIONAL EXPERIENCE
                </span>
                <span className="section-number-line"></span>
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Consulting Experience
              </h2>
              <p className="text-gray-600 mt-4 max-w-xl">
                Strategic consulting projects delivered at PwC South East Asia
                and independent engagements.
              </p>
            </div>

            {/* PwC Section Header */}
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-black/10 reveal">
              <div className="w-14 h-14 md:w-12 md:h-12 flex-shrink-0 flex items-center justify-center">
                <Image
                  src="/pwc_logo.svg"
                  alt="PwC Consulting Logo"
                  width={48}
                  height={48}
                  className="h-10 md:h-8 object-contain"
                />
              </div>
              <div>
                <h3 className="font-semibold">
                  PwC South East Asia Consulting
                </h3>
                <p className="text-sm text-gray-500">
                  Consulting Intern, Financial Services Strategy & Operations
                </p>
              </div>
            </div>

            {/* PwC Project Cards */}
            <div className="space-y-6 mb-12">
              {/* Project 1 */}
              {/* <div className="project-card bg-white p-8 stagger-3">
                <div className="grid md:grid-cols-12 gap-6">
                  <div className="md:col-span-3">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="timeline-dot timeline-dot-accent"></div>
                      <span className="text-sm text-gray-500">
                        December 2025 – February 2026
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-1">
                      Life Insurance Market Intelligence
                    </h3>
                    <p className="text-accent font-medium text-sm">
                      Market Research
                    </p>
                  </div>
                  <div className="md:col-span-9 md:border-l md:border-black/10 md:pl-8">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="tag">Insurance</span>
                      <span className="tag">Sharia Life Insurance</span>
                      <span className="tag">Multinational</span>
                    </div>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                        <span>
                          Built a benchmarking approach using GWP-to-GDP metrics
                          to compare Family Takaful penetration across Southeast
                          Asia, the Middle East, and South Asia; benchmarked 10+
                          competitors and 30+ products.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                        <span>
                          Consolidated 5 years of macroeconomic indicators and
                          competitor financials into executive-ready
                          deliverables across 3 regions.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                        <span>
                          Acting PMO Support: Supported workplan tracking,
                          weekly reporting, and alignment across workstreams
                          during leadership transition.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}

              {/* Project 1 - CONVERTED TO "CASE STUDY" FORMAT */}
              <div className="project-card bg-white p-8 stagger-3 border border-transparent hover:border-black/10 transition-colors shadow-sm hover:shadow-md">
                <div className="grid md:grid-cols-12 gap-6">
                  <div className="md:col-span-3">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="timeline-dot timeline-dot-accent"></div>
                      <span className="text-sm text-gray-500">
                        February 2026 – Present
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-1">
                      Conglomeration Target Operating Model
                    </h3>
                    <p className="text-accent font-medium text-sm">
                      Conglomeration Synergy Model
                    </p>
                  </div>
                  <div className="md:col-span-9 md:border-l md:border-black/10 md:pl-8">
                    <div className="flex flex-wrap items-center gap-2 mb-6">
                      <span className="tag">Conglomeration Governance</span>
                      <span className="tag">Target Operating Model</span>
                      <span className="tag">6 Entities</span>
                      <span className="tag">Financial Services</span>
                    </div>

                    {/* CASE STUDY FRAMEWORK */}
                    <div className="space-y-4">
                      {/* The Challenge */}
                      {/* <div className="p-4 bg-gray-50 rounded-r-md border-l-2 border-gray-300">
                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5 flex items-center gap-2">
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
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            ></path>
                          </svg>
                          The Challenge
                        </h4>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                          Indonesia’s leading Sharia life insurer set an
                          aggressive target to 3x their revenue and customer
                          base over 3 years. To maintain their #1 market
                          position, they needed to identify winning strategic
                          initiatives by analyzing top-performing players
                          locally and globally.
                        </p>
                      </div> */}

                      {/* The Action */}
                      {/* <div className="p-4 bg-gray-50 rounded-r-md border-l-2 border-gray-300">
                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5 flex items-center gap-2">
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
                              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                            ></path>
                          </svg>
                          The Action
                        </h4>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                          Built a proprietary GWP-to-GDP benchmarking model.
                          Synthesized 5 years of macroeconomic and competitor
                          data to evaluate 10+ top players and 30+ products
                          across Southeast Asia, the Middle East, and South Asia
                          to uncover alternative growth levers.
                        </p>
                      </div> */}

                      {/* The Impact */}
                      <div className="p-4 bg-accent/5 rounded-r-md border-l-2 border-accent">
                        <h4 className="text-sm font-bold text-accent uppercase tracking-widest mb-1.5 flex items-center gap-2">
                          {/* <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                            ></path>
                          </svg> */}
                          Currently Ongoing
                        </h4>
                        {/* <p className="text-gray-900 font-medium text-sm md:text-base leading-relaxed">
                          Delivered executive-ready market intelligence that
                          provided leadership with a clear, data-driven view of
                          penetration gaps and global best practices, directly
                          informing the strategic roadmap required to achieve
                          their 3-year hyper-growth target.
                        </p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 1 - CONVERTED TO "CASE STUDY" FORMAT */}
              <div className="project-card bg-white p-8 stagger-3 border border-transparent hover:border-black/10 transition-colors shadow-sm hover:shadow-md">
                <div className="grid md:grid-cols-12 gap-6">
                  <div className="md:col-span-3">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="timeline-dot timeline-dot-accent"></div>
                      <span className="text-sm text-gray-500">
                        December 2025 – February 2026
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-1">
                      Life Insurance Market Intelligence
                    </h3>
                    <p className="text-accent font-medium text-sm">
                      Growth Strategy & Benchmarking
                    </p>
                  </div>
                  <div className="md:col-span-9 md:border-l md:border-black/10 md:pl-8">
                    <div className="flex flex-wrap items-center gap-2 mb-6">
                      <span className="tag">Insurance</span>
                      <span className="tag">Sharia Life Insurance</span>
                      <span className="tag">Market Leader</span>
                      <span className="tag">Strategic Growth</span>
                    </div>

                    {/* CASE STUDY FRAMEWORK */}
                    <div className="space-y-4">
                      {/* The Challenge */}
                      <div className="p-4 bg-gray-50 rounded-r-md border-l-2 border-gray-300">
                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5 flex items-center gap-2">
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
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            ></path>
                          </svg>
                          The Challenge
                        </h4>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                          Indonesia’s leading Sharia life insurer set an
                          aggressive target to 3x their revenue and customer
                          base over 3 years. To maintain their #1 market
                          position, they needed to identify winning strategic
                          initiatives by analyzing top-performing players
                          locally and globally.
                        </p>
                      </div>

                      {/* The Action */}
                      <div className="p-4 bg-gray-50 rounded-r-md border-l-2 border-gray-300">
                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5 flex items-center gap-2">
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
                              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                            ></path>
                          </svg>
                          The Action
                        </h4>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                          Built a proprietary GWP-to-GDP benchmarking model.
                          Synthesized 5 years of macroeconomic and competitor
                          data to evaluate 10+ top players and 30+ products
                          across Southeast Asia, the Middle East, and South Asia
                          to uncover alternative growth levers.
                        </p>
                      </div>

                      {/* The Impact */}
                      <div className="p-4 bg-accent/5 rounded-r-md border-l-2 border-accent">
                        <h4 className="text-xs font-bold text-accent uppercase tracking-widest mb-1.5 flex items-center gap-2">
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
                              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                            ></path>
                          </svg>
                          The Impact
                        </h4>
                        <p className="text-gray-900 font-medium text-sm md:text-base leading-relaxed">
                          Delivered executive-ready market intelligence that
                          provided leadership with a clear, data-driven view of
                          penetration gaps and global best practices, directly
                          informing the strategic roadmap required to achieve
                          their 3-year hyper-growth target.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              {/* <div className="project-card bg-white p-8 stagger-2">
                <div className="grid md:grid-cols-12 gap-6">
                  <div className="md:col-span-3">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="timeline-dot timeline-dot-accent"></div>
                      <span className="text-sm text-gray-500">
                        August 2025 – December 2025
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-1">
                      Enterprise Business Process Reengineering
                    </h3>
                    <p className="text-accent font-medium text-sm">
                      BPR Initiative
                    </p>
                  </div>
                  <div className="md:col-span-9 md:border-l md:border-black/10 md:pl-8">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="tag">Shipping & Logistics</span>
                      <span className="tag">7 Entities</span>
                      <span className="tag">State-Owned Group</span>
                    </div>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                        <span>
                          Led APQC-aligned as-is process mapping and redesigned
                          130+ to-be processes across Procurement, Core
                          Business, Finance, and QHSSE for a holding company and
                          6 subsidiaries.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                        <span>
                          Participated in ~20 stakeholder interviews/workshops
                          to validate process bottlenecks, control gaps, and
                          standardization opportunities.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                        <span>
                          Built sections of the executive deck and developed 30+
                          organizational design recommendations and 100+ KPM
                          metrics; presented to PwC Partner and client
                          VPs/Directors.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}

              {/* Project 2 - CONVERTED TO "CASE STUDY" FORMAT */}
              <div className="project-card bg-white p-8 stagger-2 border border-transparent hover:border-black/10 transition-colors shadow-sm hover:shadow-md">
                <div className="grid md:grid-cols-12 gap-6">
                  <div className="md:col-span-3">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="timeline-dot timeline-dot-accent"></div>
                      <span className="text-sm text-gray-500">
                        August 2025 – December 2025
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-1">
                      Enterprise Business Process Reengineering
                    </h3>
                    <p className="text-accent font-medium text-sm">
                      BPR Initiative
                    </p>
                  </div>
                  <div className="md:col-span-9 md:border-l md:border-black/10 md:pl-8">
                    <div className="flex flex-wrap items-center gap-2 mb-6">
                      <span className="tag">Shipping & Logistics</span>
                      <span className="tag">7 Entities</span>
                      <span className="tag">State-Owned Group</span>
                      <span className="tag">Operating Model</span>
                    </div>

                    {/* CASE STUDY FRAMEWORK: Challenge, Action, Impact */}
                    <div className="space-y-4">
                      {/* The Challenge */}
                      <div className="p-4 bg-gray-50 rounded-r-md border-l-2 border-gray-300">
                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5 flex items-center gap-2">
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
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            ></path>
                          </svg>
                          The Challenge
                        </h4>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                          High operational fragmentation across a state-owned
                          holding company and 6 subsidiaries, leading to
                          redundant manual workflows, control gaps, and delayed
                          inter-departmental processes.
                        </p>
                      </div>

                      {/* The Action */}
                      <div className="p-4 bg-gray-50 rounded-r-md border-l-2 border-gray-300">
                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5 flex items-center gap-2">
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
                              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                            ></path>
                          </svg>
                          The Action
                        </h4>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                          Actively involved in a multi-stakeholder diagnostic
                          via 20+ executive interviews. Mapped and redesigned
                          130+ business processes (Core Business, Procurement,
                          Finance, QHSSE) against global APQC benchmarks.
                        </p>
                      </div>

                      {/* The Impact (Styled slightly differently to pop out) */}
                      <div className="p-4 bg-accent/5 rounded-r-md border-l-2 border-accent">
                        <h4 className="text-xs font-bold text-accent uppercase tracking-widest mb-1.5 flex items-center gap-2">
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
                              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                            ></path>
                          </svg>
                          The Impact
                        </h4>
                        <p className="text-gray-900 font-medium text-sm md:text-base leading-relaxed">
                          Delivered 30+ strategic organizational design
                          recommendations, Target Operating Models (TOM), and
                          100+ KPIs to Partner/Client VP leadership,
                          establishing a standardized blueprint required for the
                          group's enterprise-wide business and digital
                          transformation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              {/* <div className="project-card bg-white p-8 stagger-1">
                <div className="grid md:grid-cols-12 gap-6">
                  <div className="md:col-span-3">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="timeline-dot timeline-dot-accent"></div>
                      <span className="text-sm text-gray-500">
                        May 2025 – August 2025
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-1">
                      Sales & Marketing Transformation
                    </h3>
                    <p className="text-accent font-medium text-sm">
                      Salesforce Implementation
                    </p>
                  </div>
                  <div className="md:col-span-9 md:border-l md:border-black/10 md:pl-8">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="tag">Financial Services</span>
                      <span className="tag">State-Owned Bank</span>
                      <span className="tag">Data Architecture</span>
                    </div>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                        <span>
                          Owned Tech & Data analysis for Salesforce Sales Cloud
                          and Marketing Cloud, producing Data Architecture
                          Model, Application Interaction Model, and Data Flow
                          Diagrams across 50+ system integrations.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                        <span>
                          Built current-to-target mapping for 100+ data fields
                          and system touchpoints; translated business needs into
                          functional and data requirements.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                        <span>
                          Co-developed a 3-phase implementation roadmap, ToR,
                          and vendor scoring model to support System Integrator
                          selection.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}

              {/* Project 3 - CONVERTED TO "CASE STUDY" FORMAT */}
              <div className="project-card bg-white p-8 stagger-1 border border-transparent hover:border-black/10 transition-colors shadow-sm hover:shadow-md">
                <div className="grid md:grid-cols-12 gap-6">
                  <div className="md:col-span-3">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="timeline-dot timeline-dot-accent"></div>
                      <span className="text-sm text-gray-500">
                        May 2025 – August 2025
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-1">
                      Sales & Marketing Transformation
                    </h3>
                    <p className="text-accent font-medium text-sm">
                      Enterprise CRM Strategy
                    </p>
                  </div>
                  <div className="md:col-span-9 md:border-l md:border-black/10 md:pl-8">
                    <div className="flex flex-wrap items-center gap-2 mb-6">
                      <span className="tag">Financial Services</span>
                      <span className="tag">State-Owned Bank</span>
                      <span className="tag">Salesforce / CRM</span>
                      <span className="tag">Data Architecture</span>
                    </div>

                    {/* CASE STUDY FRAMEWORK */}
                    <div className="space-y-4">
                      {/* The Challenge */}
                      <div className="p-4 bg-gray-50 rounded-r-md border-l-2 border-gray-300">
                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5 flex items-center gap-2">
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
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            ></path>
                          </svg>
                          The Challenge
                        </h4>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                          A state-owned bank suffered from heavily siloed
                          customer data across distinct marketing, sales, and
                          product systems. This fragmentation resulted in
                          untracked leads, redundant customer outreach, zero
                          personalization, and critical blind spots in KYC/AML
                          capabilities.
                        </p>
                      </div>

                      {/* The Action */}
                      <div className="p-4 bg-gray-50 rounded-r-md border-l-2 border-gray-300">
                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5 flex items-center gap-2">
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
                              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                            ></path>
                          </svg>
                          The Action
                        </h4>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                          Led the Tech & Data workstream to architect a unified
                          enterprise CRM ecosystem. Engineered the Data
                          Architecture and Flow Diagrams, defining
                          current-to-target mapping for 100+ data fields across
                          50+ complex system integrations to eliminate
                          departmental silos.
                        </p>
                      </div>

                      {/* The Impact */}
                      <div className="p-4 bg-accent/5 rounded-r-md border-l-2 border-accent">
                        <h4 className="text-xs font-bold text-accent uppercase tracking-widest mb-1.5 flex items-center gap-2">
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
                              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                            ></path>
                          </svg>
                          The Impact
                        </h4>
                        <p className="text-gray-900 font-medium text-sm md:text-base leading-relaxed">
                          Established the foundational technical blueprint to
                          enable cross-selling and centralized lead tracking.
                          Co-developed a 3-phase roadmap and robust vendor
                          scoring model, successfully preparing and de-risking
                          the bank's upcoming public tender for CRM System
                          Integrators.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Naga Cybersecurity Section Header */}
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-black/10 reveal">
              <div className="w-14 h-14 md:w-12 md:h-12 flex-shrink-0 flex items-center justify-center">
                <Image
                  src="/ncs_logo.webp"
                  alt="Naga Cybersecurity Logo"
                  width={48}
                  height={48}
                  className="h-10 md:h-8 object-contain"
                />
              </div>
              <div>
                <h3 className="font-semibold">Naga Cybersecurity</h3>
                <p className="text-sm text-gray-500">Cybersecurity Intern</p>
              </div>
            </div>

            {/* Project 4 */}
            <div className="space-y-6 mb-12">
              <div className="project-card bg-white p-8 stagger-1 border border-transparent hover:border-black/10 transition-colors shadow-sm hover:shadow-md">
                <div className="grid md:grid-cols-12 gap-6">
                  <div className="md:col-span-3">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="timeline-dot timeline-dot-accent"></div>
                      <span className="text-sm text-gray-500">
                        August 2021 – January 2022
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-1">
                      NIST-Based Security Assessment
                    </h3>
                    <p className="text-accent font-medium text-sm">
                      Threat Analysis
                    </p>
                  </div>
                  <div className="md:col-span-9 md:border-l md:border-black/10 md:pl-8">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="tag">Cybersecurity</span>
                      <span className="tag">NIST Framework</span>
                      <span className="tag">
                        Endpoint Detection and Response
                      </span>
                    </div>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                        <span>
                          Monitored daily endpoint security alerts using Trellix
                          EDR, supporting senior analysts by documenting initial
                          triage and gathering data on potential security
                          events.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                        <span>
                          Assisted with security policy reviews and
                          documentation, utilizing NIST-aligned security
                          controls to help evaluate and improve client security
                          postures.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                        <span>
                          Collaborated with the consulting team in a fast-paced
                          cryptosecurity startup, helping to translate technical
                          endpoint findings into actionable reports for digital
                          asset clients.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Experience Header */}
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-black/10 reveal">
              <div className="w-14 h-14 md:w-12 md:h-12 flex-shrink-0 bg-black flex items-center justify-center">
                <span className="text-white font-bold text-base">EXP</span>
              </div>
              <div>
                <h3 className="font-semibold">Other Experience</h3>
                <p className="text-sm text-gray-500">
                  Independent and early career roles
                </p>
              </div>
            </div>

            {/* Other Experience Cards */}
            <div className="space-y-6">
              {/* Project 5 */}
              <div className="project-card bg-white p-8 stagger-1 border border-transparent hover:border-black/10 transition-colors shadow-sm hover:shadow-md">
                <div className="grid md:grid-cols-12 gap-6">
                  <div className="md:col-span-3">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="timeline-dot"></div>
                      <span className="text-sm text-gray-500">
                        July 2024 – April 2025
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-1">
                      Business Operations & Analytics
                    </h3>
                    <p className="text-gray-600 font-medium text-sm">
                      Family Business
                    </p>
                  </div>
                  <div className="md:col-span-9 md:border-l md:border-black/10 md:pl-8">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="tag">Agribusiness</span>
                      <span className="tag">Retail</span>
                      <span className="tag">Interim Role</span>
                    </div>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></span>
                        <span>
                          Established daily Excel-based tracking for egg
                          production, flock age, sales, and operating costs,
                          improving visibility of day-to-day operations.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></span>
                        <span>
                          Conducted practical feasibility assessment for
                          expansion (farm-adjacent restaurant concept) and
                          supported basic digitization for a second farm
                          business.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-24 border-t border-black/5">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-16 reveal">
              <p className="section-number mb-4">
                <span className="section-number-text">04 — EDUCATION</span>
                <span className="section-number-line"></span>
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Academic Background
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Education 1 */}
              <div className="edu-card bg-white p-8 stagger-1 border border-gray hover:border-black/10 transition-colors shadow-sm hover:shadow-md">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      Bachelor of Computer Science
                    </h3>
                    <p className="text-accent font-medium">
                      Universitas Gadjah Mada
                    </p>
                  </div>
                  <span className="text-sm text-gray-500">
                    Sept 2020 - July 2024
                  </span>
                </div>
                <p className="text-gray-600 mb-4">Yogyakarta, Indonesia</p>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-medium px-3 py-1 bg-gray-100">
                    GPA: 3.59/4.00
                  </span>
                </div>
                <p className="text-sm text-gray-500">
                  <span className="font-medium text-black">Thesis:</span> Binary
                  Static Analysis Through Instruction and Operand Extraction and
                  Agglomerative Hierarchical Clustering (AHC)
                </p>
              </div>

              {/* Education 2 */}
              <div className="edu-card bg-white p-8 stagger-1 border border-gray hover:border-black/10 transition-colors shadow-sm hover:shadow-md">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      Exchange Semester
                    </h3>
                    <p className="text-accent font-medium">
                      Universität Leipzig
                    </p>
                  </div>
                  <span className="text-sm text-gray-500">
                    April 2023 – September 2023
                  </span>
                </div>
                <p className="text-gray-600 mb-4">Leipzig, Germany</p>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-medium px-3 py-1 bg-accent text-white">
                    DAAD Scholar
                  </span>
                  <span className="text-sm font-medium px-3 py-1 bg-gray-100">
                    Digital Humanities
                  </span>
                </div>
                <p className="text-sm text-gray-500">
                  German Academic Exchange Service (DAAD) scholarship recipient
                  for international exchange program.
                </p>
              </div>

              {/* Education 3 */}
              <div className="edu-card bg-white p-8 stagger-1 border border-gray hover:border-black/10 transition-colors shadow-sm hover:shadow-md">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      International Baccalaureate Diploma
                    </h3>
                    <p className="text-accent font-medium">
                      Yogyakarta Independent School
                    </p>
                  </div>
                  <span className="text-sm text-gray-500">July 2020</span>
                </div>
                <p className="text-gray-600 mb-4">Yogyakarta, Indonesia</p>

                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="text-sm font-medium px-3 py-1 bg-gray-100">
                    Design Technology (HL)
                  </span>
                  <span className="text-sm font-medium px-3 py-1 bg-gray-100">
                    English (HL)
                  </span>
                  <span className="text-sm font-medium px-3 py-1 bg-gray-100">
                    Environmental Systems and Societes (HL)
                  </span>
                </div>

                <p className="text-sm text-gray-600 mb-2">
                  Rigorous pre-university program with a focus on environmental
                  systems and design thinking.
                </p>
                <p className="text-sm text-gray-800 font-medium flex items-center gap-2 mt-4">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Student Council Committee Member
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-24 bg-black text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-8 md:gap-12">
              <div className="md:col-span-4 reveal-left">
                <p className="section-number mb-4">
                  <span className="section-number-text text-accent">
                    05 — LEADERSHIP
                  </span>
                  <span className="section-number-line"></span>
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                  Student Leadership
                </h2>
                <p className="text-gray-400 mt-4 max-w-sm">
                  Demonstrated track record of cross-functional team management
                  and event execution.
                </p>
              </div>

              <div className="md:col-span-8 md:border-l md:border-white/10 md:pl-12 reveal-right">
                {/* Organization Header */}
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/10">
                  <div className="w-12 h-12 flex-shrink-0 bg-white/10 flex items-center justify-center rounded-sm">
                    <span className="text-white font-bold text-base">CS</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      HIMAKOM (Computer Science Association)
                    </h3>
                    <p className="text-gray-400">
                      Universitas Gadjah Mada • October 2020 – October 2022
                    </p>
                  </div>
                </div>

                <div className="space-y-10">
                  {/* Leadership Role 1: Seminar Chairman */}
                  <div className="relative border-l-2 border-accent/50 pl-6 pb-2">
                    <div className="absolute w-3 h-3 bg-accent rounded-full -left-[7px] top-1.5 shadow-[0_0_10px_rgba(147,5,7,0.8)]"></div>
                    <h4 className="text-lg font-medium text-white mb-1">
                      Event Chairman{" "}
                      <span className="text-gray-500 font-normal">
                        — National UI/UX Seminar
                      </span>
                    </h4>
                    <p className="text-gray-400 text-sm font-medium mb-3">
                      Cross-Functional Team Management
                    </p>
                    <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>
                          Directed a cross-functional student committee
                          (Liaison, Operations, Marketing) to plan and execute a
                          national-level technology seminar.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>
                          Owned external stakeholder relations, successfully
                          sourcing and securing two industry-expert alumni as
                          keynote speakers, driving an attendance of 200+
                          participants.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Leadership Role 2: Head of PDD */}
                  <div className="relative pl-6 border-l-2 border-[#464646] pb-2">
                    <div className="absolute w-3 h-3 bg-[#717171] rounded-full -left-[7px] top-1.5"></div>
                    <h4 className="text-lg font-medium text-white mb-1">
                      Brand & Communications Lead{" "}
                      <span className="text-gray-500 font-normal">
                        — Student Talent Campaign
                      </span>
                    </h4>
                    <p className="text-gray-400 text-sm font-medium mb-3">
                      Project Ownership & Design
                    </p>
                    <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>
                          Managed a 3-person creative team to establish the
                          end-to-end visual identity, event theme, and digital
                          marketing strategy.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>
                          Oversaw the production of all promotional assets and
                          social media publications, successfully driving
                          engagement for a showcase featuring 20+ performers.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section - Masonry Layout */}
        <section id="skills" className="py-24 border-t border-black/5">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-16 reveal">
              <p className="section-number mb-4">
                <span className="section-number-text">06 — SKILLS</span>
                <span className="section-number-line"></span>
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Expertise & Tools
              </h2>
            </div>

            {/* 
       Switched from Grid to CSS Columns.
       md:columns-2 creates 2 columns on medium screens.
       lg:columns-3 creates 3 columns on large screens.
       gap-8 controls the space between items.
    */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Column 1: Transformation & Consulting */}
              <div className="reveal stagger-1 break-inside-avoid">
                <h3 className="text-lg font-semibold mb-6 pb-4 border-b border-black/10">
                  Transformation & Consulting
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="tag">Business Transformation</span>
                  <span className="tag">Digital Transformation</span>
                  <span className="tag">Business Process Reengineering</span>
                  <span className="tag">Process Improvement</span>
                  <span className="tag">Workflow Analysis</span>
                  <span className="tag">Operating Model Design</span>
                  <span className="tag">Governance & Controls</span>
                  <span className="tag">Transformation PMO</span>
                  <span className="tag">Executive Storylining</span>
                </div>
              </div>

              {/* Column 2: Process & Functional Tech */}
              <div className="reveal stagger-2 break-inside-avoid">
                <h3 className="text-lg font-semibold mb-6 pb-4 border-b border-black/10">
                  Process & Functional Tech
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="tag">As-is/To-be Mapping</span>
                  <span className="tag">APQC Framework</span>
                  <span className="tag">Requirements Gathering</span>
                  <span className="tag">Requirements Traceability Matrix</span>
                  <span className="tag">Salesforce Sales Cloud</span>
                  <span className="tag">Marketing Cloud</span>
                  <span className="tag">Data Architecture</span>
                  <span className="tag">Data Mapping</span>
                  <span className="tag">Integration Analysis</span>
                  <span className="tag">Data Analysis</span>
                </div>
              </div>

              {/* Column 3: Tools */}
              <div className="reveal stagger-3 break-inside-avoid">
                <h3 className="text-lg font-semibold mb-6 pb-4 border-b border-black/10">
                  Tools & Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="tag">PowerPoint</span>
                  <span className="tag">Excel</span>
                  <span className="tag">Word</span>
                  <span className="tag">Visio</span>
                  <span className="tag">Tableau</span>
                  <span className="tag">SQL</span>
                  <span className="tag">Python</span>
                </div>

                {/* Languages Section - Placed inside the same card for organic flow */}
                <h4 className="text-sm font-medium text-gray-400 mt-6 mb-4">
                  Languages
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="tag">Indonesian (Native)</span>
                  <span className="tag">English (Fluent)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-24 bg-gray-50 border-t border-black/5"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="reveal-left">
                <p className="section-number mb-4">
                  <span className="section-number-text">07 — CONTACT</span>
                  <span className="section-number-line"></span>
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
                  Let's Connect
                </h2>
                <p className="text-lg text-gray-600">
                  Seeking full-time roles in business transformation, process
                  improvement, digital transformation, or consulting.
                </p>
              </div>
              <div className="space-y-4 reveal-right">
                <a
                  href="mailto:mark.real.rumahorbo@gmail.com"
                  className="contact-card flex items-center gap-4 p-4 bg-white border border-black/10 hover:border-accent transition-colors group"
                >
                  <span className="text-gray-400 group-hover:text-accent transition-colors">
                    <MailIcon />
                  </span>
                  <span className="text-gray-600 group-hover:text-black transition-colors">
                    mark.real.rumahorbo@gmail.com
                  </span>
                </a>
                <a
                  href="tel:+6281215596949"
                  className="contact-card flex items-center gap-4 p-4 bg-white border border-black/10 hover:border-accent transition-colors group"
                >
                  <span className="text-gray-400 group-hover:text-accent transition-colors">
                    <PhoneIcon />
                  </span>
                  <span className="text-gray-600 group-hover:text-black transition-colors">
                    +62 812 1559 6949
                  </span>
                </a>
                <a
                  href="https://linkedin.com/in/mark-rumahorbo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card flex items-center gap-4 p-4 bg-white border border-black/10 hover:border-accent transition-colors group"
                >
                  <span className="text-gray-400 group-hover:text-accent transition-colors">
                    <LinkedInIcon />
                  </span>
                  <span className="text-gray-600 group-hover:text-black transition-colors">
                    linkedin.com/in/mark-rumahorbo
                  </span>
                </a>
                <a
                  href="https://github.com/Markkreel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card flex items-center gap-4 p-4 bg-white border border-black/10 hover:border-accent transition-colors group"
                >
                  <span className="text-gray-400 group-hover:text-accent transition-colors">
                    <GithubIcon />
                  </span>
                  <span className="text-gray-600 group-hover:text-black transition-colors">
                    github.com/Markkreel
                  </span>
                </a>
                <a
                  href="/resume"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card flex items-center gap-4 p-4 bg-white border border-black/10 hover:border-accent transition-colors group"
                >
                  <span className="text-gray-400 group-hover:text-accent transition-colors">
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
                  </span>
                  <span className="text-gray-600 group-hover:text-black transition-colors">
                    Download Resume PDF
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-black/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              © 2025 Mark Rumahorbo. All rights reserved.
            </p>
            <p className="text-sm text-gray-400">Jakarta, Indonesia</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button - Visible on all devices
      <button id="back-to-top" className="back-to-top" aria-label="Back to top">
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
      </button> */}
    </>
  );
}
