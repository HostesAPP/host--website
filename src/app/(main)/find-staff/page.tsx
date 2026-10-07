import Image from "next/image";
import Link from "next/link";
import "./find-staff.css";

export default function FindStaff() {
  return (
    <div className="find-staff-page bg-background">
      <section className="find-staff-layout">
        <div className="find-staff-copy">
          <p className="find-staff-heading font-secondary font-extrabold">
            Get our Finest <span className="text-primary">Hosté</span> on{" "}
            <span className="text-primary">our App</span>
          </p>
          <div className="links mt-10">
            <p className="font-extrabold text-[16px] font-secondary mb-3 text-center">
              Download and Start booking now
            </p>
            <div className="find-staff-downloads">
              <Link
                href="https://whatsapp.com/channel/0029VbAnnPP0wajvbeWCn944"
                className="relative h-16.25 w-49"
              >
                <Image
                  src={"/images/andriod-btn.png"}
                  alt="Andriod Link"
                  fill
                  className="object-cover"
                />
              </Link>
              <Link
                href="https://whatsapp.com/channel/0029VbAnnPP0wajvbeWCn944"
                className="relative h-16.25 w-49"
              >
                <Image
                  src={"/images/iphone-btn.png"}
                  alt="Apple Link"
                  fill
                  className="object-cover"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="find-staff-image">
          <Image
            src="/images/hand-bg.png"
            alt="Hoste App Image"
            width={836}
            height={1189}
            sizes="(min-width: 1200px) calc((100vw - 34rem) / 2), (min-width: 500px) 360px, 72vw"
            className="h-auto w-full object-contain"
          />
        </div>
      </section>
    </div>
  );
}
