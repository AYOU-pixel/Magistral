import type { Metadata, Viewport } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Magistral Gym — Train Like You Mean It",
  description:
    "Magistral is a high-energy gym built for people who train hard, stay consistent, and get real results. Join 500+ members training with certified coaches.",
  keywords: ["gym", "fitness", "strength training", "HIIT", "personal training", "Metro City"],
  authors: [{ name: "Magistral Gym" }],
  icons: { icon: "/iconel.svg" },
  openGraph: {
    title: "Magistral Gym — Train Like You Mean It",
    description: "A full floor of free weights, machines, and open space for people who want to get stronger.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-bg-900 text-text-100 selection:bg-brand-500 selection:text-bg-900">
        {children}
      </body>
    </html>
  );
}