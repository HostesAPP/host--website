import type { ReactNode } from "react";
import Navbar from "@/components/wrapper/Navbar";
import Footer from "@/components/wrapper/Footer";

export default function MainLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="pt-10 z-10 relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
