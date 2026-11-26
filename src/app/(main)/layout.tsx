import type { ReactNode } from "react";
import Navbar from "@/components/wrapper/Navbar";
import Footer from "@/components/wrapper/Footer";

export default function MainLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-1 flex-col">
        <Navbar />
        <main className="pt-10 flex-1 z-10 relative">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
