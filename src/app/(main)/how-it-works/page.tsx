import Image from "next/image";
import Link from "next/link";
import { LuShield, LuShieldCheck, LuLockKeyhole } from "react-icons/lu";

const steps = [
  {
    number: "1",
    title: "Discover & Filter",
    description:
      "Browse vetted professionals with transparent rates and real reviews.",
  },
  {
    number: "2",
    title: "Book Securely",
    description:
      "Send booking requests and pay via our Paystack-integrated escrow system.",
  },
  {
    number: "3",
    title: "Brief & Confirm",
    description:
      "Communicate requirements and coordinate arrival times directly through the platform.",
  },
  {
    number: "4",
    title: "Release Payment",
    description:
      "Confirm completion after the event to release funds to your staff.",
  },
];

export default function HowItWorksPage() {
  return (
    <main className="how-it-works-page">
      <section className="how-hero">
        <h1>Seamless staffing from discovery to payment.</h1>

        <p>
          The Hosté marketplace eliminates friction, ensuring you focus on your
          event while we handle the logistics.
        </p>
      </section>

      <section className="how-steps">
        {steps.map((step) => (
          <article className="how-step-card" key={step.number}>
            <div className="how-step-number">{step.number}</div>

            <h2>{step.title}</h2>

            <p>{step.description}</p>
          </article>
        ))}
      </section>

      <section className="how-escrow">
        <div className="how-escrow-content">
          <span className="how-protected-badge">
            <LuShield size={16} />
            <span>Secure &amp; Protected</span>
          </span>

          <h2>The Green Escrow Guarantee</h2>

          <p>
            Your funds are held securely in escrow until the event is
            successfully completed. We protect organizers from no-shows and
            guarantee staff they will be paid for their hard work.
          </p>

          <div className="how-guarantees">
            <span>
              <LuShieldCheck size={16} />
              <span>Identity Verification</span>
            </span>

            <span>
              <LuLockKeyhole size={16} />
              <span>Secured by Paystack</span>
            </span>
          </div>
        </div>

        <div className="how-person">
          <Image
            src="/images/how.png"
            alt="Professional staff member holding a red cup"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      <div className="how-cta">
        <Link href="/find-staff">Start Your First Booking</Link>
      </div>
    </main>
  );
}
