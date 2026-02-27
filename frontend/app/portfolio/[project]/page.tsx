"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import IconLeftArrow from "@/app/icons/IconLeftArrow";
import IconRightArrow from "@/app/icons/IconRightArrow";

export default function Page() {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showWelcomeText, setShowWelcomeText] = useState(true);

  const items = [
    {
      id: 1,
      title: "Turnadon",
      desc: "Dynamic advertising posters",
      image: "/img/mountain1.jpg",
    },
    {
      id: 2,
      title: "Turnadon",
      desc: "Dynamic advertising posters",
      image: "/img/mountain2.jpg",
    },
    {
      id: 3,
      title: "Turnadon",
      desc: "Dynamic advertising posters",
      image: "/img/mountain3.jpg",
    },
  ];

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    setShowWelcomeText(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    setShowWelcomeText(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setShowWelcomeText(false);
        prevSlide();
      }
      if (e.key === "ArrowRight") {
        setShowWelcomeText(false);
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div
        className="flex transition-transform duration-1200"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="relative h-screen w-full shrink-0 overflow-hidden"
          >
            <Image
              src={item.image}
              alt={`Slide ${index}`}
              fill
              className={`object-cover ${isButtonHovered ? "scale-105" : "scale-100"} transition-transform duration-2000 ease-out group-hover:scale-105`}
              priority // opcjonalnie, szybciej ładuje pierwsze slajdy
            />
          </div>
        ))}
      </div>
      <button onClick={prevSlide}>
        <IconLeftArrow />
      </button>
      <button onClick={nextSlide}>
        <IconRightArrow />
      </button>
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-3">
        {items.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 cursor-pointer rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => {
              setCurrentIndex(index);
              setShowWelcomeText(false);
            }}
          />
        ))}
      </div>

      <div
        className={`${showWelcomeText ? "opacity-100" : "opacity-0"} absolute top-1/2 left-1/2 z-2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center text-center text-white duration-600`}
      >
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
