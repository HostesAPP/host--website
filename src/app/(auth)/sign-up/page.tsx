"use client";

import Button from "@/components/button";
import GridBackground from "@/components/GridBackground";
import Input from "@/components/Input";
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();
  return (
    <>
      <GridBackground className="absolute inset-0 -z-10 h-screen w-full" />
      <main className="font-secondary relative">
        <button
          className="go-back fixed left-4 top-4 z-20 flex h-11 items-center gap-2 rounded-full border border-(--border-subtle) bg-(--surface)/90 px-3 text-primary shadow-[0_12px_30px_rgba(28,27,27,0.08)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_18px_40px_rgba(239,90,34,0.14)] md:left-8 md:top-8 md:px-4"
          type="button"
          onClick={() => router.back()}
          aria-label="Go back"
        >
          <FaArrowLeftLong aria-hidden="true" />
          <span className="hidden text-sm font-bold leading-none sm:inline">
            Back
          </span>
        </button>
        <div className="container mx-auto px-6">
          <div className="content flex flex-col space-y-4 items-center justify-center h-screen">
            <h1 className="font-extrabold text-[20px] md:text-[48px] text-primary text-center md:max-w-160">
              Your people are waiting. Secure your spot.
            </h1>
            <p className="desc font-medium tetx-[16px] ">
              Don’t just show up. Get on the list.
            </p>
            <div className="input-fields flex flex-col space-y-3">
              <Input type="text" placeholder="Full Name" />
              <Input type="email" placeholder="Type your email" />
            </div>
            <Button text="Join Now" className="bg-primary text-white w-49.25" />
          </div>
        </div>
      </main>
    </>
  );
}
