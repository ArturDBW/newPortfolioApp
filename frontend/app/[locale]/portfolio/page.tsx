"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import DetailsButton from "../../components/DetailsButton";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

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
  const [fullscreenImage, setFullscreenImage] = useState(false);
  const timeoutsRef = useRef<number[]>([]);
  const navigationTimeoutRef = useRef<number | null>(null);

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

  const handleImageClick = () => {
    if (fullscreenImage) return; // blokada wielokrotnego kliku

    setFullscreenImage(true);

    navigationTimeoutRef.current = window.setTimeout(() => {
      router.push("/portfolio/test");
    }, 2000);
  };

  useEffect(() => {
    return () => {
      clearAllTimeouts();
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="white-wipe-out" />
      {/* Dodano h-screen i overflow-hidden do głównego kontenera */}
      <div className="flex h-screen w-full overflow-hidden bg-white">
        {/* LEWA STRONA - Płynnie zwija się do szerokości 0 */}
        <div
          className={`flex flex-col items-center justify-center overflow-hidden bg-white transition-all duration-2000 ease-in-out ${
            fullscreenImage ? "w-0 px-0 opacity-0" : "w-[40%] opacity-100"
          }`}
        >
          {/* Dodano min-w-max (lub w-full), aby tekst nie łamał się brzydko w trakcie zwijania */}
          <div
            className={`${fullscreenImage ? "opacity-0" : "opacity-100"} transition-opacity duration-500`}
          >
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
        </div>

        {/* PRAWA STRONA - Rozszerza się z 60% do 100% */}
        <div
          className={`relative transition-all duration-1000 ease-in-out ${
            fullscreenImage ? "w-full" : "w-[60%]"
          }`}
        >
          <div
            onClick={handleImageClick}
            className="group relative h-full w-full overflow-hidden"
          >
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
              className={`cursor-pointer object-cover transition-transform duration-2000 ease-out ${
                fullscreenImage ? "" : "group-hover:scale-105"
              }`}
            />

            {/* Tutaj ukrywamy przycisk DetailsButton, jeśli jesteśmy w fullscreen */}
            <div
              className={`transition-opacity duration-500 ${fullscreenImage ? "pointer-events-none opacity-0" : "opacity-100"}`}
            >
              <DetailsButton />
            </div>
            <div className="grey-wipe-out" />
          </div>
        </div>
      </div>
    </>
  );
}
