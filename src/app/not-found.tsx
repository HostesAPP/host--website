import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--background)]">
      {/* Full-screen background images */}
      <div className="absolute inset-0 z-0">
        <Image
          alt=""
          src="/images/not-found/caution-1.png"
          fill
          priority
          className="object-cover"
        />

        <Image
          alt=""
          src="/images/not-found/caution-2.png"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Other decorative images */}
      <Image
        alt=""
        src="/images/not-found/screwdriver.png"
        height={104}
        width={194}
        className="absolute top-30 left-0 z-10 object-contain"
      />

      <Image
        alt=""
        src="/images/not-found/bulb.png"
        width={280}
        height={152}
        className="absolute top-30 right-0 z-10 object-contain"
      />

      <Image
        alt=""
        src="/images/not-found/spanner.png"
        height={104}
        width={194}
        className="absolute bottom-0 left-0 z-10 object-contain"
      />

      <Image
        alt=""
        src="/images/not-found/sprocket.png"
        height={147}
        width={270}
        className="absolute right-0 bottom-0 z-10 object-contain"
      />

      {/* Page content */}
      <div className="relative z-20 mx-auto flex flex-col min-h-screen max-w-7xl items-center justify-center px-6 space-y-8">
        <div className="rounded-[20px] bg-white/20 px-5 py-2 shadow-lg backdrop-blur-[30px]">
          <Image
            src="/images/logo.png"
            alt="Hosté Logo"
            width={100}
            height={27}
            className="object-contain"
          />
        </div>
        <h1 className="font-extrabold text-[50px] md:text-[96px] uppercase text-primary text-center">
          coming soon
        </h1>
        <Link
          href={"/"}
          className="border border-primary px-3 py-2 text-primary rounded-xl"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
