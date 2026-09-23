"use client";
import Button from "@/components/button";
import Image from "next/image";
import { BsPersonCheck } from "react-icons/bs";
import { MdShield, MdGroups2 } from "react-icons/md";
import GridBackground from "@/components/GridBackground";
import { useRouter } from "next/navigation";
import ScrollText from "@/components/ScrollText";
import { CSSProperties, useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";

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

const Offerings = [
  {
    title: "Vetted Professionals",
    description:
      "Every Hosté is identity-verified and performance-rated. Quality guaranteed.",
    icon: <BsPersonCheck />,
    bgColor: "#D044081A",
    opacity: 10,
  },
  {
    title: "Secure Escrow",
    description:
      "Payments are held safely until the event is successfully completed.",
    icon: <MdShield />,
    bgColor: "#9EF6B633",
    opacity: 20,
  },
  {
    title: "Group Bookings",
    description:
      "Staff entire events in minutes, not days. Seamless coordination.",
    icon: <MdGroups2 />,
    bgColor: "#75765A1A",
    opacity: 10,
  },
];

const keyWords = [
  "Hostess",
  "Pole Dancer",
  "Bartender",
  "Party starter",
  "Private Chef",
];

const text =
  "Hosté is a technology platform that connects brands, hotels, clubs, and event planners with verified, professional event staff ushers, bartenders, hosts, performers, and more on demand";

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 56,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.72,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.56,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function Home() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentItem) => {
        return (currentItem + 1) % keyWords.length;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative">
      <GridBackground className="absolute left-0 -top-30 md:-top-34 -z-10 h-screen w-full" />
      <div className="container mx-auto px-6">
        <section>
          <div className="hero-container relative left-1/2 flex min-h-[calc(100vh-7.5rem)] w-screen -translate-x-1/2 flex-col items-center justify-center overflow-hidden md:min-h-[calc(100vh-8.5rem)]">
            <div className="hero-content flex flex-col w-full max-w-full items-center justify-center px-6">
              <p className="home-rise relative z-20 text-[24px] md:text-[52px] font-semibold leading-6.5 tracking-normal mb-10 text-center">
                Book a{" "}
                <span
                  key={keyWords[currentIndex]}
                  className="home-word-swap text-primary"
                >
                  {keyWords[currentIndex]}
                </span>{" "}
                Today
              </p>
              <p className="home-rise home-delay-1 relative z-20 text-[16px] font-semibold leading-6.5 tracking-normal text-center max-w-200 hidden md:block">
                Hosté solves the challenge of helping brands and clubs quickly
                find, book and reliably manage verified event staff without the
                stress and uncertainty of traditional staffing.
              </p>
              <p className="home-rise home-delay-1 relative z-20 text-[16px] font-semibold leading-6.5 tracking-normal text-center md:hidden text-wrap">
                Hosté is a platform where Brands and Event Planners can book
                Event Staffs.
              </p>
              <div className="home-rise home-delay-2 book-now relative z-20 mt-6">
                <Button
                  text="Download Now"
                  onClick={() => router.push("/find-staff")}
                  className="bg-[#ef5a22] text-white"
                />
              </div>
              <div className="images w-full">
                <div className="mobile-image md:hidden mt-10 mb-3 relative h-95 w-screen left-1/2 -translate-x-1/2">
                  <Image
                    src={"/images/erica-mobile-2.png"}
                    fill
                    sizes="100vw"
                    // sizes="(max-width: 768px) calc(100vw - 3rem)"
                    quality={100}
                    priority
                    alt="Hosté Worker"
                    className="object-cover"
                  />
                </div>
                <div className="left-image absolute left-0 top-1/2 z-0 hidden h-[min(800px,82vh)] w-[min(800px,42vw)] -translate-y-1/2 md:block">
                  <Image
                    src={"/images/salewa.png"}
                    fill
                    sizes="(min-width: 768px) 42vw, 100vw"
                    quality={100}
                    priority
                    alt="Hosté Worker"
                    className="object-contain object-top -translate-x-8"
                  />
                </div>

                <div className="right-image absolute right-0 top-1/2 z-0 hidden h-[min(800px,82vh)] w-[min(800px,42vw)] -translate-y-1/2 md:block">
                  <Image
                    src={"/images/erica.png"}
                    fill
                    alt="Bimpe Hosté worker"
                    sizes="(min-width: 768px) 42vw, 100vw"
                    quality={100}
                    priority
                    className="object-contain object-top translate-x-8"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 hidden h-[clamp(22rem,62vh,44rem)] bg-linear-to-b from-transparent via-[var(--fade-mid)] to-[var(--background)] md:block" />
              <div className="home-rise-center home-delay-4 user-stats absolute bottom-2 left-1/2 z-20 flex max-w-[calc(100%-2rem)] items-center gap-2 md:gap-5">
                <Image
                  src={"/images/group-image.png"}
                  alt="user images"
                  height={35}
                  width={92}
                  className="h-auto w-20.5 shrink-0 md:w-23"
                />
                <p className="whitespace-nowrap font-semibold text-[7px] leading-6.5 min-[360px]:text-[8px] md:text-[14px]">
                  10,000+ Active Hostés working across Nigeria
                </p>
              </div>
            </div>
          </div>
        </section>
        <motion.section
          className="sub-hero py-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="font-bold text-[20px] md:text-[48px] leading-10 tracking-[-0.32px] text-center mb-20">
            Nigeria&apos;s finest{" "}
            <span className="text-primary">Event Staff</span>, all in one place.
          </h2>
          {/* Here is a Carousel */}
          {/* <div className="section-details flex items-center justify-center mt-15">
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
          </div> */}
          <ScrollText
            text={text}
            className="font-bold text-[40px] text-center md:text-[58px] md:leading-15 tracking-[0.7px]"
          />
        </motion.section>
        <motion.section
          className="offers font-primary pt-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className="font-bold text-[32px] leading-8 text-primary text-center font-secondary">
            The Marketplace for Excellence
          </h2>
          <p className="description font-primary font-normal text-[16px] leading-6.5 text-center mt-5">
            Elevate your events with reliable, top-tier talent managed
            effortlessly.
          </p>
          <div className="offerings flex flex-col md:flex-row gap-6 my-10">
            {Offerings.map(
              ({ title, description, icon, bgColor, opacity }, index) => {
                const hexToRgba = (hex: string, opacity: number) => {
                  const cleanHex = hex.replace("#", "");

                  const r = parseInt(cleanHex.substring(0, 2), 16);
                  const g = parseInt(cleanHex.substring(2, 4), 16);
                  const b = parseInt(cleanHex.substring(4, 6), 16);

                  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
                };
                return (
                  <motion.div
                    className="offer group bg-[var(--card)] p-16 rounded-[30px] flex flex-col gap-4 border border-[var(--border-subtle)] shadow-[0_12px_40px_rgba(28,27,27,0.04)] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#EF5A22]/20 hover:bg-[var(--offer-hover-bg)] hover:shadow-[0_24px_60px_rgba(239,90,34,0.14)]"
                    key={title}
                    custom={index}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.35 }}
                    style={
                      {
                        "--offer-hover-bg": hexToRgba(bgColor, opacity / 100),
                      } as CSSProperties
                    }
                  >
                    <h3
                      className="h-12 w-12 flex items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110 group-hover:text-white"
                      style={{
                        backgroundColor: hexToRgba(bgColor, opacity / 100),
                      }}
                    >
                      {icon}
                    </h3>
                    <h4 className="capitalize font-bold text-[20px] leading-8 transition-colors duration-300 group-hover:text-white">
                      {title}
                    </h4>
                    <p className="font-normal text-[16px] leading-7.5 transition-colors duration-300 group-hover:text-white">
                      {description}
                    </p>
                  </motion.div>
                );
              },
            )}
          </div>
        </motion.section>
        <motion.section
          className="rate py-20 justify-between font-primary space-y-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="section-description flex flex-col items-center justify-center space-y-8">
            <p className="font-semibold text-[24px] md:text-[32px] leading-10 tracking-[-0.32px]">
              Your skills. Your rate.{" "}
              <span className="text-primary">Paid fast.</span>
            </p>
            <p className="font-normal text-[16px] leading-6 tracking-normal lg:max-w-203.25 text-center text-muted-foreground">
              Join the elite network of hospitality professionals. Build a
              stunning professional profile, enjoy transparent earnings, and
              rely on guaranteed payments through our Green Escrow system.
            </p>
            <Button
              text="Download Now"
              onClick={() => router.push("/find-staff")}
              className="bg-[#ef5a22] text-white"
            />
          </div>
          <div className="relative min-h-100 flex flex-col">
            <h3 className="capitalize text-[54px] lg:text-[120px] italic font-semibold text-primary leading-18 lg:leading-25">
              what brands have to say...
            </h3>
            <p className="home-float-card testimony text-primary text-[12px] md:text-[24px] absolute top-0 right-0 bg-primary/10 backdrop-blur-[2px] md:py-6 md:px-4 p-3 md:p-0  rounded-[30px] md:min-w-130 max-w-70">
              “Hosté made finding the right event staff feel simple. The
              professionalism and energy they brought to the event stood
              out.&rdquo; – Komolafe O.
            </p>
            <p className="home-float-card home-float-card-alt testimony text-primary text-[12px] md:text-[24px] absolute bottom-20 md:bottom-0 left-0 bg-primary/10 backdrop-blur-[2px] md:py-6 md:px-4 p-3 md:p-0 rounded-[30px] md:min-w-130 max-w-70">
              &ldquo;Working with Hosté has been smooth from start to finish.
              Communication was clear, the team was reliable, and the experience
              felt well organised.&rdquo; – Don K
            </p>
          </div>
        </motion.section>

        <motion.section
          className="prefooter bg-[url('/images/section-bg.JPG')] bg-cover bg-center bg-no-repeat py-10 h-96.5 flex flex-col items-center justify-center md:mt-25 mb-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <h2 className="font-primary font-bold text-[32px] md:text-[48px] leading-14 text-center text-white">
            Join our journey of professional excellence.
          </h2>
          <div className="buttons flex flex-col md:flex-row items-center justify-center gap-4 mt-10">
            <Button
              text="Hire Staff"
              className="bg-white text-primary w-59.75"
            />
            <Button
              text="Download Now"
              className="bg-transparent border border-white text-white w-59.75"
              onClick={() => router.push("/find-staff")}
            />
          </div>
        </motion.section>
      </div>
    </div>
  );
}
