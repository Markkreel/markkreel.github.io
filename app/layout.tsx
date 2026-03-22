// ─── Next.js ─────────────────────────────────────────────────────────────────
import type { Metadata } from "next";
import { Geist } from "next/font/google";
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

const helvetica = localFont({
  src: [
    {
      path: "../app/fonts/HelveticaNeueLTPro-Roman.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../app/fonts/HelveticaNeueLTPro-It.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../app/fonts/HelveticaNeueLTPro-Bd.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../app/fonts/HelveticaNeueLTPro-BdIt.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../app/fonts/HelveticaNeueLTPro-Lt.ttf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-helvetica",
});

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL("https://markkreel.github.io"),
  title: "Mark Rumahorbo | Digital Transformation Consultant",
  description:
    "Digital transformation and business process analyst delivering strategic solutions for banks and insurers across Southeast Asia.",

  // 1. EXPANDED KEYWORDS
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
  ],
  authors: [{ name: "Mark Rumahorbo" }],

  // 2. ADD CANONICAL URL (Prevents Google from getting confused by duplicate links)
  alternates: {
    canonical: "https://markkreel.github.io",
  },

  verification: {
    google: "t1gG8zXg_Ju0iRqq1wangwU9W37SGA9u-rJYrkN7wyQ",
  },

  icons: {
    icon: "/icon.svg",
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

  other: {
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Mark Rumahorbo",
      jobTitle: "Digital Transformation Consultant",
      url: "https://markkreel.github.io",
      sameAs: [
        "https://linkedin.com/in/mark-rumahorbo",
        "https://github.com/Markkreel",
      ],
      worksFor: {
        "@type": "Organization",
        name: "PwC South East Asia Consulting",
      },
      description:
        "Digital transformation and business process analyst delivering strategic solutions for banks and insurers across Southeast Asia.",
    }),
  },
};

// ─── Root Layout ──────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.className} scroll-smooth`}>
      <body className={`${geist.className} bg-white text-black`}>
        <ClientLayout>{children}</ClientLayout>
        <BackToTop />
      </body>
    </html>
  );
}
