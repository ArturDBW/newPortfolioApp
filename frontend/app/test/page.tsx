"use client";

import Image from "next/image";
import { useState } from "react";

interface CarouselProps {}

const Carousel: React.FC<CarouselProps> = () => {
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

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slajdy */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="relative h-screen w-full flex-shrink-0">
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

      {/* Strzałki */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-white/70 p-3 shadow transition hover:bg-white"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-white/70 p-3 shadow transition hover:bg-white"
      >
        &#8594;
      </button>

      {/* Kropki */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-3">
        {items.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full transition-colors ${
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
