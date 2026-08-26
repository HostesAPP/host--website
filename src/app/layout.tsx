import type { Metadata } from "next";
import { Hanken_Grotesk, Montserrat } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/components/wrapper/Navbar";
import Footer from "@/components/wrapper/Footer";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hosté | Your No 1 Staffing Platform",
  description: "Your No 1 staffing Platform",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${hanken.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="pt-10 z-10 relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
