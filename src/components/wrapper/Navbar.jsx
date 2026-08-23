"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navlinks = [
  { id: 1, name: "Find Staff", href: "/find-staff" },
  { id: 2, name: "How it Works", href: "/how-it-works" },
  { id: 3, name: "About Us", href: "/about-us" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="py-4 flex justify-center">
      <div className="flex items-center justify-between">
        <Link href={"/"} className="relative block h-6.75 w-25.25">
          <Image
            src={"/images/logo.png"}
            fill
            alt="Logo Image"
            className="object-contain"
          />
        </Link>
        <div className="navlinks font-primary flex gap-6">
          {navlinks.map(({ name, href, id }) => (
            <Link
              key={id}
              href={href}
              className={`font-medium text-[14px] leading-5 tracking-[0.28px] ${pathname === href ? "text-primary border-b border-primary" : ""}`}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
