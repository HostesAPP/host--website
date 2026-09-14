import Image from "next/image";
import Link from "next/link";

export default function FindStaff() {
  return (
    <div className="page-container bg-white md:-mt-37.5 -mt-30">
      <div className="container mx-auto px-6">
        <section className="grid md:grid-cols-2 items-center">
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
            <p className="font-secondary font-extrabold text-center md:text-left mx-auto md:mx-0 text-[20px] md:text-[48px] max-w-56.25 md:max-w-134.75">
              Get our Finest <span className="text-primary">Hosté</span> on{" "}
              <span className="text-primary">our App</span>
            </p>
            <div className="links mt-10">
              <p className="font-extrabold text-[16px] font-secondary mb-3 text-center md:text-left">
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
