import Image from "next/image";
import Link from "next/link";

export default function FindStaff() {
  return (
    <div className="relative page-container bg-background">
      <div className="container mx-auto px-6">
        <section className="flex flex-col md:flex-row justify-center items-center min-h-[70vh]">
          <div className="desc flex flex-col justify-center items-center">
            <p className="font-secondary font-extrabold text-center mx-auto md:mx-0 text-[20px] md:text-[48px] max-w-56.25 md:max-w-134.75">
              Get our Finest <span className="text-primary">Hosté</span> on{" "}
              <span className="text-primary">our App</span>
            </p>
            <div className="links mt-10">
              <p className="font-extrabold text-[16px] font-secondary mb-3 text-center">
                Download and Start booking now
              </p>
              <div className="download-links flex flex-col sm:flex-row space-x-5 space-y-3 justify-center items-center sm:items-start md:justify-start">
                <Link href={""} className="relative h-16.25 w-49">
                  <Image
                    src={"/images/andriod-btn.png"}
                    alt="Andriod Link"
                    fill
                    className="object-cover"
                  />
                </Link>
                <Link href={""} className="relative h-16.25 w-49">
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
          <div className="image relative mt-8 mr-[calc((100%-100vw)/2)] w-[min(72vw,280px)] max-w-full self-end md:absolute md:right-0 md:bottom-0 md:mt-0 md:mr-0 md:w-169.25 md:self-auto">
            <Image
              src="/images/hand-bg.png"
              alt="Hoste App Image"
              width={677}
              height={573}
              sizes="(min-width: 768px) 677px, (max-width: 388px) 72vw, 280px"
              className="h-auto w-full object-contain"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
