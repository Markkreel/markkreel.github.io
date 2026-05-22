// ─── Next.js ─────────────────────────────────────────────────────────────────
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // Added Geist_Mono
import localFont from "next/font/local";

// ─── Assets ──────────────────────────────────────────────────────────────────
import "./globals.css";
import ClientLayout from "./ClientLayout";
import BackToTop from "./BackToTop";

// ─── Font definitions ────────────────────────────────────────────────────────
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

// Added Geist Mono configuration
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const helvetica = localFont({
  src: [
    {
      path: "./fonts/HelveticaNeueLTPro-Roman.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/HelveticaNeueLTPro-It.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/HelveticaNeueLTPro-Bd.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/HelveticaNeueLTPro-BdIt.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/HelveticaNeueLTPro-Lt.ttf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-helvetica",
});

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL("https://markkreel.github.io"),
  title: "Mark Rumahorbo | Strategy & Operations Consultant",
  description:
    "Digital transformation and business process analyst with a Computer Science foundation and consulting experience at PwC South East Asia.",

  keywords: [
    "Mark Rumahorbo",
    "digital transformation consultant Jakarta",
    "business process reengineering (BPR)",
    "Salesforce data architecture",
    "Target Operating Model (TOM) design",
    "PwC strategy consultant",
    "technology consulting Indonesia",
    "APQC process mapping",
    "financial services consultant",
    "computer science to consulting",
    "OJK regulations PIKK",
    "Requirements Traceability Matrix (RTM)",
    "RACI matrix design",
    "Universitas Gadjah Mada CS",
    "DAAD Scholar",
  ],
  authors: [{ name: "Mark Rumahorbo" }],

  alternates: {
    canonical: "https://markkreel.github.io",
  },

  verification: {
    google: "t1gG8zXg_Ju0iRqq1wangwU9W37SGA9u-rJYrkN7wyQ",
  },

  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },

  openGraph: {
    title: "Mark Rumahorbo — Digital Transformation Consultant",
    description:
      "Digital transformation and business process analyst delivering strategic solutions for banks and insurers across Southeast Asia.",
    url: "https://markkreel.github.io",
    siteName: "Mark Rumahorbo Portfolio",
    images: [
      {
        url: "/img/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mark Rumahorbo — Digital Transformation Consultant",
    description:
      "Digital transformation and business process analyst delivering strategic solutions for banks and insurers across Southeast Asia.",
    images: ["/img/og-image.png"],
  },
};

// ─── Schema.org Structured Data ──────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mark Rumahorbo",
  gender: "Male",
  nationality: {
    "@type": "Country",
    name: "Indonesia",
  },
  jobTitle: "Digital Transformation & Business Process Analyst",
  url: "https://markkreel.github.io",
  image: "https://markkreel.github.io/img/og-image.png",
  sameAs: [
    "https://linkedin.com/in/mark-rumahorbo",
    "https://github.com/Markkreel",
  ],
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "Universitas Gadjah Mada",
      url: "https://www.ugm.ac.id",
    },
    {
      "@type": "EducationalOrganization",
      name: "Universität Leipzig",
    },
  ],
  knowsAbout: [
    "Digital Transformation",
    "Target Operating Model (TOM)",
    "Business Process Reengineering (BPR)",
    "Salesforce CRM",
    "APQC Framework",
    "Requirements Traceability Matrix (RTM)",
    "Financial Services Consulting",
    "OJK PIKK Regulatory Governance",
  ],
  worksFor: {
    "@type": "Organization",
    name: "PwC South East Asia Consulting",
  },
  description:
    "Digital transformation and business process analyst with a Computer Science foundation and consulting experience at PwC South East Asia.",
};

// ─── Root Layout ──────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${helvetica.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geist.className} bg-white text-black antialiased`}>
        <ClientLayout>{children}</ClientLayout>
        <BackToTop />
      </body>
    </html>
  );
}
