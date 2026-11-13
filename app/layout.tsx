import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Navbar, Footer, WhatsAppButton } from "@/components";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://muhammadali.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: "%s | Muhammad Ali",
    default: "Muhammad Ali | Full-Stack Web Developer",
  },
  description:
    "Portfolio of Muhammad Ali, a Full-Stack Web Developer from Khyber Pakhtunkhwa (KPK), Pakistan. Specializing in high-performance web applications with React, Next.js, Supabase, and Tailwind CSS.",
  keywords: [
    "Muhammad Ali",
    "Full-Stack Web Developer",
    "React Developer",
    "Next.js Developer",
    "Pakistan Web Developer",
    "KPK Freelancer",
    "Supabase Developer",
    "Tailwind CSS",
    "WireDesk",
    "BazaarHub",
  ],
  authors: [{ name: "Muhammad Ali", url: "https://github.com/Mali0313" }],
  creator: "Muhammad Ali",
  publisher: "Muhammad Ali",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Muhammad Ali | Full-Stack Web Developer",
    description:
      "Full-Stack Web Developer from Khyber Pakhtunkhwa (KPK), Pakistan. Building high-performance web applications with React and Next.js.",
    siteName: "Muhammad Ali Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Ali | Full-Stack Web Developer",
    description:
      "Full-Stack Web Developer from Khyber Pakhtunkhwa (KPK), Pakistan. Building high-performance web applications with React and Next.js.",
    creator: "@Mali0313",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-text-body">
        <Navbar />
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
