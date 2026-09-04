import Image from "next/image";
import Link from "next/link";

export default function FindStaff() {
  return (
    <div className="page-container bg-white/80">
      <div className="container mx-auto px-6">
        <section className="grid grid-cols-2 items-center">
          <div className="images">
            <Image
              src={"/images/phone.png"}
              height={924}
              width={682}
              alt="Image"
              className="object-contain"
            />
          </div>
          <div className="desc">
            <p className="font-secondary font-extrabold text-[48px] max-w-134.75">
              Get our Finest <span className="text-primary">Hosté</span> on{" "}
              <span className="text-primary">our App</span>
            </p>
            <div className="links mt-10">
              <p className="font-extrabold text-[16px] font-secondary mb-3">
                Download and Start booking now
              </p>
              <div className="download-links flex space-x-5">
                <Link href={""} className="relative h-15.25 w-46.25">
                  <Image
                    src={"/images/andriod.svg"}
                    alt="Andriod Link"
                    fill
                    className="object-cover"
                  />
                </Link>
                <Link href={""} className="relative h-15.25 w-46.25">
                  <Image
                    src={"/images/app-store.svg"}
                    alt="Apple Link"
                    fill
                    className="object-cover"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
