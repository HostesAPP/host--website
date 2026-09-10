"use client";

import { LuHandshake } from "react-icons/lu";
import { FaMoneyBills } from "react-icons/fa6";
import { HiCheckBadge } from "react-icons/hi2";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>
            The New Standard for Event
            <br />
            Hospitality.
          </h1>
          <p>
            {" "}
            Hosté was born out of a simple need: to bring professional rigor and
            trust to Nigeria&apos;s vibrant event industry.{" "}
          </p>
        </div>
      </section>
      <section className="about-content">
        <div className="about-grid">
          <article className="about-card who-card">
            <div className="card-icon">
              <HiCheckBadge />{" "}
            </div>
            <h2>Who are we?</h2>
            <p>
              Hosté is Nigeria&apos;s first premium event staffing marketplace.
              Brands, Event Planners, and Hostés connect on one platform —
              verified profiles, escrow payments via Paystack, AI-powered
              matching, and group bookings.
            </p>
          </article>
          <article className="about-card empowerment-card">
            <div className="empowerment-image">
              <Image
                src="/images/hosteabout.jpg"
                alt="Event staff working at an event"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="image-overlay"></div>
              <div className="image-check-icon">
                <FaMoneyBills />{" "}
              </div>
              <div className="empowerment-content">
                <span className="empowerment-label">
                  {" "}
                  ECONOMIC EMPOWERMENT{" "}
                </span>
                <p>
                  We provide transparent pricing and secure escrow payments,
                  ensuring fair compensation and timely payouts for all our
                  talented staff.
                </p>
              </div>
            </div>
          </article>

          <article className="about-card seamless-card">
            <div className="card-icon">
              <LuHandshake />
            </div>
            <h2>Seamless Experiences for Brands</h2>
            <p>
              For event organizers and brands, we remove the friction of
              sourcing reliable talent. Our platform handles the logistics,
              allowing you to focus on creating unforgettable events. Event
              staffing in Nigeria runs on WhatsApp and word of mouth.
              Last-minute cancellations, fake profiles, no standards, no payment
              protection. Hosté fixes all of this. A four-sided app — Brands,
              Event Planners, Hostés, and Admin — with verified profiles, escrow
              payments via Paystack, AI-powered matching, group bookings, and a
              fully transparent availability calendar. Event planners, hotels,
              clubs, and corporates across Lagos. Expanding to Abuja, Port
              Harcourt, and pan-Africa in future phases.
            </p>
          </article>
        </div>
      </section>
      <section className="about-cta">
        <div className="about-cta-content">
          <h2>Join our journey of professional excellence.</h2>

          <div className="cta-buttons">
            <Link href="/find-staff" className="cta-primary">
              {" "}
              Hire Staff{" "}
            </Link>
            <Link href="/become-host" className="cta-secondary">
              {" "}
              Become a Host{" "}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
