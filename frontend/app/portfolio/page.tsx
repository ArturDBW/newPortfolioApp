"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function Page() {
  const liStyles =
    "group relative cursor-pointer transition-transform duration-500 before:absolute before:top-1/2 before:right-full before:mr-2 before:h-px before:w-4 before:-translate-y-1/2 before:bg-[#8A6B0C] before:opacity-0 before:transition-opacity before:duration-300 before:content-[''] hover:translate-x-6 hover:before:opacity-100";

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

  const [activeImage, setActiveImage] = useState(items[0].image);
  const [showGreyWipe, setShowGreyWipe] = useState(false);
  const timeoutsRef = useRef<number[]>([]);

  const clearAllTimeouts = () => {
    timeoutsRef.current.forEach((t) => clearTimeout(t));
    timeoutsRef.current = [];
  };
  const changeImage = (img: string) => {
    // anuluj wszystkie poprzednie timeouty
    clearAllTimeouts();

    // rozpocznij animację
    setShowGreyWipe(true);

    // timeout do zmiany obrazka po wjeździe maski
    const t1 = window.setTimeout(() => {
      setActiveImage(img);
    }, 350); // dopasowane do duration-500

    // timeout do wyjazdu maski po ~1s
    const t2 = window.setTimeout(() => {
      setShowGreyWipe(false);
    }, 700);

    timeoutsRef.current.push(t1, t2);
  };
  return (
    <>
      <div className="white-wipe-out" />
      <div className="flex w-full">
        <div className="flex flex-2 flex-col items-center justify-center bg-white">
          <ul className="space-y-10 text-[#011933]">
            {items.map((item) => {
              const isActive = item.image === activeImage;

              return (
                <li
                  key={item.id}
                  className={`${liStyles} ${
                    isActive ? "translate-x-6 before:opacity-100" : ""
                  } fade-in-right`}
                  onMouseEnter={() => changeImage(item.image)}
                >
                  <span
                    className={`mr-3 text-xl transition-all group-hover:text-[#8A6B0C] ${
                      isActive ? "text-[#8A6B0C]" : ""
                    }`}
                  >
                    {item.title}
                  </span>
                  <span
                    className={`text-lg text-[#aaa] transition-all group-hover:text-[#8d8d8d] ${
                      isActive ? "text-[#8d8d8d]" : ""
                    }`}
                  >
                    {item.desc}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex-3">
          <div className="flex flex-3 items-center justify-center">
            <div className="relative h-screen w-full overflow-hidden">
              <div
                className={`absolute inset-0 z-10 bg-gray-50 transition-transform duration-350 ${
                  showGreyWipe ? "translate-x-0" : "-translate-x-full"
                }`}
              />

              <Image
                src={activeImage}
                alt=""
                fill
                priority
                className="object-cover transition-opacity duration-500"
              />
              <div className="grey-wipe-out" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
