import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";
import BackToTop from "./BackToTop";
import { Geist } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const helvetica = localFont({
  src: [
    {
      path: "../app/fonts/HelveticaNeueLTPro-Roman.ttf",
      weight: "400", // Regular
      style: "normal",
    },
    {
      path: "../app/fonts/HelveticaNeueLTPro-It.ttf",
      weight: "400", // Regular Italic
      style: "italic",
    },
    {
      path: "../app/fonts/HelveticaNeueLTPro-Bd.ttf",
      weight: "700", // Bold
      style: "normal",
    },
    {
      path: "../app/fonts/HelveticaNeueLTPro-BdIt.ttf",
      weight: "700", // Bold Italic
      style: "italic",
    },
    // If you want to use the Light version for thin text
    {
      path: "../app/fonts/HelveticaNeueLTPro-Lt.ttf",
      weight: "300", // Light
      style: "normal",
    },
  ],
  variable: "--font-helvetica",
});

export const metadata: Metadata = {
  // 1. Basic SEO
  title: "Mark Rumahorbo — Portfolio",
  description:
    "Digital transformation and business process analyst delivering strategic solutions for banks and insurers across Southeast Asia.",
  keywords:
    "digital transformation, business consultant, Salesforce, BPR, PwC, Indonesia, process improvement, strategy consultant",
  authors: [{ name: "Mark Rumahorbo" }],

  // 2. Google Search Console Verification
  verification: {
    google: "t1gG8zXg_Ju0iRqq1wangwU9W37SGA9u-rJYrkN7wyQ",
  },

  // 3. Favicon (Alternative method if you keep it in public folder)
  icons: {
    icon: "/favicon.svg",
  },

  // 4. Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    title: "Mark Rumahorbo — Digital Transformation Consultant",
    description:
      "Digital transformation and business process analyst delivering strategic solutions for banks and insurers across Southeast Asia.",
    url: "https://markrumahorbo.com",
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

  // 5. Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Mark Rumahorbo — Digital Transformation Consultant",
    description:
      "Digital transformation and business process analyst delivering strategic solutions for banks and insurers across Southeast Asia.",
    images: ["/img/og-image.png"],
  },
};

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
