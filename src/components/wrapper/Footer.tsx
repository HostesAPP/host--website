"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const footerLinks = {
  Discover: [
    { name: "Find Staff", href: "/find-staff" },
    { name: "Browse Groups", href: "/groups" },
    { name: "Categories", href: "/categories" },
  ],
  Community: [
    { name: "Join the Circle", href: "/join" },
    { name: "Referral Program", href: "/referral" },
  ],
  Company: [
    { name: "About", href: "/how-it-works" },
    { name: "Careers", href: "/groups" },
    { name: "Contact", href: "/contact" },
    { name: "Terms", href: "/term" },
    { name: "Privacy", href: "/privacy" },
    { name: "Escrow Policy", href: "/escrow" },
  ],
};

export default function Footer() {
  const pathname = usePathname();
  return (
    <footer className="bg-[#fafafa] py-10">
      <div className="container mx-auto px-6">
        <div className="footer-container flex flex-col gap-5 md:grid md:grid-cols-5">
          <div className="footer-logo md:col-span-2 order-last md:order-first">
            <Link
              href="/"
              className="relative md:block md:h-6.75 md:w-25.25 h-5 w-18.25 flex items-center justify-center mb-2"
            >
              <Image
                src="/images/logo.png"
                fill
                alt="Logo Image"
                className="object-cover"
              />
            </Link>
            <h3 className="font-primary text-[14px] tracking-[0.28px]">
              © 2026 Hosté technologies. All rights reserved.{" "}
            </h3>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="footer-sub-heading footer-links-heading mb-3">
                {title}
              </h3>
              <ul className="flex flex-col space-y-1">
                {links.map(({ name, href }) => {
                  const isActive = pathname === href;
                  return (
                    <Link
                      key={name}
                      href={href}
                      className={`footer-link font-primary w-fit ${isActive ? "text-primary" : ""}`}
                    >
                      {name}
                    </Link>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
