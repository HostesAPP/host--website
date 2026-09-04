import type { ComponentProps } from "react";
import { FaChevronRight } from "react-icons/fa6";

type InputProps = ComponentProps<"input">;

export default function Input({ ...props }: InputProps) {
  return (
    <div className="input-container flex items-center bg-white/20 w-screen md:w-150 md:py-4 px-5 rounded-[50px] md:h-20 h-15 border border-gray-300">
      <input {...props} className="outline-none w-full" />
      <FaChevronRight color="#EF5A22" />
    </div>
  );
}
