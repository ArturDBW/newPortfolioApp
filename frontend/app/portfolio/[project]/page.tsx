"use client";

import { useState } from "react";
import Image from "next/image";

export default function Page() {
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  return (
    <div className="relative h-screen w-full flex-1 overflow-hidden">
      <Image
        src="/img/mountain2.jpg"
        alt="Mountain width"
        fill
        className={`relative transition-transform duration-2000 ${
          isButtonHovered ? "scale-105" : "scale-100"
        } object-cover`}
      />
      <div className="absolute top-1/2 left-1/2 z-2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center text-center text-white">
        <h2 className="slide-up-animation-now translate-y-25 text-8xl font-bold opacity-0">
          Personal Finance
        </h2>
        <p className="slide-up-animation-05s mt-8 mb-10 translate-y-25 text-xl opacity-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do <br />
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
          className="slide-up-animation translate-y-25 cursor-pointer px-32 text-lg tracking-wider text-[#eee] uppercase opacity-0 duration-900 before:absolute before:top-1/2 before:left-10 before:h-px before:w-8 before:origin-left before:-translate-y-1/2 before:bg-[#aaa] before:transition-all before:duration-900 before:ease-out before:content-[''] after:absolute after:top-1/2 after:right-10 after:h-px after:w-8 after:origin-right after:-translate-y-1/2 after:bg-[#aaa] after:transition-all after:duration-900 after:ease-out after:content-[''] hover:text-white hover:before:w-16 hover:before:bg-white hover:after:w-16 hover:after:bg-white"
        >
          Visit on github
        </button>
      </div>
    </div>
  );
}
