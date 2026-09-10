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
          className="go-back absolute top-2 left-2 md:top-55 md:left-135 flex h-10 w-10 items-center justify-center border border-gray-200 shadow-sm cursor-pointer"
          type="button"
          onClick={() => router.back()}
          aria-label="Go back"
        >
          <FaArrowLeftLong color="#EF5A22" />
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
