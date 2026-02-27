"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import IconRightArrow from "../icons/IconRightArrow";
import IconLeftArrow from "../icons/IconLeftArrow";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      }
      if (e.key === "ArrowRight") {
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
          <div key={index} className="relative h-screen w-full shrink-0">
            <Image
              src={item.image}
              alt={`Slide ${index}`}
              fill
              className="object-cover"
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
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
