"use client";
import Button from "@/components/button";
import Image from "next/image";
import GridBackground from "@/components/GridBackground";
import { useRouter } from "next/navigation";

const CarouselItems = [
  {
    bgImg: "",
    stats: [
      { num: 0, desc: "" },
      { num: 0, desc: "" },
      { num: 0, desc: "" },
    ],
  },
  {
    bgImg: "",
    stats: [
      { num: 0, desc: "" },
      { num: 0, desc: "" },
      { num: 0, desc: "" },
    ],
  },
  {
    bgImg: "",
    stats: [
      { num: 0, desc: "" },
      { num: 0, desc: "" },
      { num: 0, desc: "" },
    ],
  },
];

export default function Home() {
  const router = useRouter();
  return (
    <div className="relative">
      <div className="container mx-auto px-6">
        <GridBackground className="absolute left-0 -top-55 -z-10 h-screen w-full" />
        <section>
          <div className="hero-container relative flex flex-col justify-center items-center md:h-[85vh]">
            <div className="hero-content flex flex-col justify-center items-center">
              <p className="text-[24px] md:text-[52px] font-semibold leading-6.5 tracking-normal mb-10">
                Book a <span className="text-primary">Hostess</span> Today
              </p>
              <p className="text-[16px] font-semibold leading-6.5 tracking-normal text-center">
                Hosté is a platform where Brands and Event Planners can book
                Event Staffs.
              </p>
              <div className="book-now mt-6">
                <Button text="Book Now" onClick={() => router.push("/")} />
              </div>
              <div className="images">
                <div className="mobile-image md:hidden">
                  <Image
                    src={"/images/sarah-mobile.png"}
                    height={400}
                    width={400}
                    sizes=""
                    alt="Hosté Worker"
                  />
                </div>
                <div className="left-image absolute -left-50 top-20 hidden md:block">
                  <Image
                    src={"/images/sarah.png"}
                    height={400}
                    width={400}
                    sizes=""
                    alt="Hosté Worker"
                  />
                </div>

                <div className="right-image absolute -right-50 top-20 hidden md:block">
                  <Image
                    src={"/images/bimpe.png"}
                    height={600}
                    width={450}
                    alt="Bimpe Hosté worker"
                    // className="object-contain"
                  />
                </div>
              </div>
              <div className="user-stats flex gap-5 items-center md:mt-75">
                <Image
                  src={"/images/group-image.png"}
                  alt="user images"
                  height={35}
                  width={92}
                />
                <p className="font-semibold text-[8px] md:text-[14px] leading-6.5">
                  10,000+ Active Hostés working across Nigeria
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="sub-hero bg-[#fafafa] py-20 md:py-10">
          <h2 className="font-bold text-[20px] md:text-[48px] leading-10 tracking-[-0.32px] text-center">
            Nigeria's finest <span className="text-primary">Event Staff</span>,
            all in one place.
          </h2>
          {/* Here is a Carousel */}
          <div className="section-details flex items-center justify-center mt-15">
            <div className="group-image relative h-138.25 w-207.75">
              <Image
                src={"/images/sub-section-image.png"}
                alt="Section-Image"
                fill
                className="object-cover rounded-[20px]"
              />
              <div className="stats bg-[#D9D9D94D]/30 backdrop-blur-sm absolute bottom-8 md:bottom-4 left-4 px-10 py-5 h-20 md:h-30 rounded-full flex items-center justify-center space-x-5">
                <div className="stat">
                  <p className="num">500+</p>
                  <p className="name">Verified Staff</p>
                </div>
                <div className="stat">
                  <p className="num">1200+</p>
                  <p className="name">Events Covered</p>
                </div>
                <div className="stat">
                  <p className="num">Lagos</p>
                  <p className="name">& Expanding</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
