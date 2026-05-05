import type { Metadata } from "next";
import { Geist, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import BackgroundOrbs from "@/components/BackgroundOrbs";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Samuel Rychvalský — Frontend Developer",
  description:
    "Frontend Developer at U:Bit s.r.o building modern, high-performance web applications with React, TypeScript and Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-bg-dark">
      <body
        className={`relative bg-bg-dark text-fg antialiased ${geist.variable} ${syne.variable}`}
      >
        <CustomCursor />
        <BackgroundOrbs />
        <Navbar />
        {children}
        <SpeedInsights />

        <footer className="border-t border-white/5 py-8 px-6 md:px-12 lg:px-20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-muted text-sm">
              © {new Date().getFullYear()} Samuel Rychvalský
            </p>
            <p className="text-muted text-sm">
              Built with Next.js & TailwindCSS
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
