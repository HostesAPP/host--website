"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const navlinks = [
  { id: 1, name: "Find Staff", href: "/find-staff" },
  { id: 2, name: "How it Works", href: "/how-it-works" },
  { id: 3, name: "About Us", href: "/about-us" },
  { id: 4, name: "Get Started", href: "/sign-up" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const mobilestyling = `${isOpen ? "translate-x-0" : "-translate-x-full"}`;
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-transparent z-100 sticky top-0">
      <div className="nav-container mt-5 z-100 py-4 px-6 flex md:justify-center w-full md:w-fit mx-auto bg-surface rounded-[50px] shadow-[inset_0_4px_20px_-12px_rgba(0,0,0,0.15),inset_0_-4px_20px_-12px_rgba(0,0,0,0.15)]">
        <div className="flex items-center justify-between md:space-x-18 w-full">
          <div className="hamburger-menu md:hidden">
            <button className="cursor-pointer" onClick={() => setIsOpen(true)}>
              <GiHamburgerMenu />
            </button>
          </div>

          <div className="image-container ml-auto">
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
          </div>
          <div
            onClick={closeMenu}
            className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 md:hidden ${
              isOpen
                ? "pointer-events-auto opacity-100"
                : "pointer-events-none opacity-0"
            }`}
          />
          <div
            className={`${mobilestyling} mobile-nav bg-surface z-50 absolute md:hidden w-[75%] h-screen top-0 left-0 py-20 px-8 shadow-2xl transition-all duration-1000`}
          >
            <div className="mobile-nav-container">
              <div className="top-heading flex justify-between items-center mb-10">
                <Link href="/" className="relative block h-6.75 w-25.25">
                  <Image
                    src="/images/logo.png"
                    fill
                    alt="Logo Image"
                    className="object-contain"
                  />
                </Link>
                <button className="cursor-pointer" onClick={closeMenu}>
                  <IoCloseSharp />
                </button>
              </div>
              <div className="nav-content flex flex-col gap-6">
                {navlinks.map(({ id, name, href }) => (
                  <Link
                    className="link-content flex gap-3 items-center font-extralight w-fit"
                    key={id}
                    href={href}
                    onClick={closeMenu}
                  >
                    <span className="text-[14px]">{name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="navlinks font-primary md:flex items-center gap-8 hidden">
            {navlinks.slice(0, 3).map(({ name, href, id }) => (
              <Link
                key={id}
                href={href}
                className={`font-medium text-[14px] leading-5 tracking-[0.28px] ${pathname === href ? "text-primary border-b border-primary" : ""}`}
              >
                {name}
              </Link>
            ))}
          </div>
          <div className="get-started hidden md:block">
            <Link
              href={"/sign-up"}
              className="bg-primary flex items-center justify-center gap-2 text-white h-[42.66px] px-10.5 rounded-4xl"
            >
              <span>Get Started</span> <FaArrowRightLong />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
