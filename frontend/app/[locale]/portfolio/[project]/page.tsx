"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useRouter, Link } from "@/app/i18n/navigation";
import IconLeftArrow from "@/app/icons/IconLeftArrow";
import IconRightArrow from "@/app/icons/IconRightArrow";
import projectsData from "../../../../projectsData.json";
import { useTranslations } from "next-intl";

type Project = {
  id: number;
  title: string;
  slug: string;
  previousProjectSlug: string;
  nextProjectSlug: string;
  description: string;
  images: string[];
  githubLink: string;
  projectLink: string;
  darkMode: boolean;
};

export default function Page() {
  const t = useTranslations("projects");

  const params = useParams<{ project: string }>();
  const projectSlug = params?.project;
  const router = useRouter();

  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showWelcomeText, setShowWelcomeText] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);

  const handleNavigateWithAnimation = (href: string) => {
    if (isNavigating) return;
    setIsNavigating(true);
    setTimeout(() => {
      router.push(href);
    }, 1800);
  };

  const project = (projectsData as Project[]).find(
    (projectItem) => projectItem.slug === projectSlug,
  );
  const projectImages = project?.images ?? [];
  const imagesCount = projectImages.length;
  const isDarkMode = project?.darkMode === true;

  const prevSlide = () => {
    if (imagesCount === 0) return;
    setCurrentIndex((prev) => (prev === 0 ? imagesCount - 1 : prev - 1));
    setShowWelcomeText(false);
  };

  const nextSlide = () => {
    if (imagesCount === 0) return;
    setCurrentIndex((prev) => (prev === imagesCount - 1 ? 0 : prev + 1));
    setShowWelcomeText(false);
  };

  useEffect(() => {
    if (imagesCount === 0) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev === 0 ? imagesCount - 1 : prev - 1));
        setShowWelcomeText(false);
      }
      if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev === imagesCount - 1 ? 0 : prev + 1));
        setShowWelcomeText(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [imagesCount]);

  if (!project) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-black text-center text-white">
        <p className="text-lg tracking-wide uppercase">Project not found</p>
      </div>
    );
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div
        className="flex transition-transform duration-1200"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {projectImages.map((image, index) => (
          <div
            key={index}
            className="relative h-screen w-full shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt={`Slide ${index}`}
              fill
              className={`object-cover ${isButtonHovered ? "scale-105" : "scale-100"} transition-transform duration-2000 ease-out group-hover:scale-105`}
              priority // opcjonalnie, szybciej ładuje pierwsze slajdy
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className={isDarkMode ? "text-[#0f172a]" : "text-white"}
      >
        <IconLeftArrow darkmode={isDarkMode} />
      </button>
      <button
        onClick={nextSlide}
        className={isDarkMode ? "text-[#0f172a]" : "text-white"}
      >
        <IconRightArrow darkmode={isDarkMode} />
      </button>
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-3">
        {projectImages.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 cursor-pointer rounded-full transition-colors ${
              isDarkMode
                ? index === currentIndex
                  ? "bg-[#0f172a]"
                  : "bg-[#0f172a]/40"
                : index === currentIndex
                  ? "bg-white"
                  : "bg-white/50"
            }`}
            onClick={() => {
              setCurrentIndex(index);
              setShowWelcomeText(false);
            }}
          />
        ))}
      </div>

      <div
        className={`${showWelcomeText ? "opacity-100" : "opacity-0"} absolute top-1/2 left-1/2 z-2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center text-center duration-600 ${isDarkMode ? "text-[#0f172a]" : "text-white"}`}
      >
        <h2
          className={`slide-up-animation-now translate-y-25 text-8xl font-bold opacity-0 max-lg:text-6xl max-md:text-4xl ${isDarkMode ? "text-[#0f172a]" : "text-white"}`}
        >
          {project.title}
        </h2>
        <p
          className={`slide-up-animation-05s mt-8 mb-10 w-160 translate-y-25 text-xl opacity-0 max-lg:w-100 max-lg:text-lg max-md:text-base max-sm:w-40 ${isDarkMode ? "text-[#1f2937]" : "text-white max-sm:text-xs"}`}
        >
          {t(`${project.slug}.description`)}
        </p>

        <a
          href={project.githubLink}
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
          className={`slide-up-animation translate-y-25 cursor-pointer px-32 text-lg tracking-wider uppercase opacity-0 duration-900 before:absolute before:top-1/2 before:left-10 before:h-px before:w-8 before:origin-left before:-translate-y-1/2 before:transition-all before:duration-900 before:ease-out before:content-[''] after:absolute after:top-1/2 after:right-10 after:h-px after:w-8 after:origin-right after:-translate-y-1/2 after:transition-all after:duration-900 after:ease-out after:content-[''] hover:before:w-16 hover:after:w-16 max-sm:text-sm ${
            isDarkMode
              ? "text-[#1f2937] before:bg-[#374151] after:bg-[#374151] hover:text-[#0f172a] hover:before:bg-[#0f172a] hover:after:bg-[#0f172a]"
              : "text-[#eee] before:bg-[#aaa] after:bg-[#aaa] hover:text-white hover:before:bg-white hover:after:bg-white"
          }`}
        >
          Visit on github
        </a>
      </div>
      {isNavigating && <div className="white-wipe-in" />}
      <Link
        href={`/portfolio/${project.nextProjectSlug}`}
        onClick={(e) => {
          e.preventDefault();
          handleNavigateWithAnimation(`/portfolio/${project.nextProjectSlug}`);
        }}
        className={`widest absolute right-1/2 bottom-15 translate-x-1/2 transform cursor-pointer rounded px-4 py-2 text-sm uppercase transition-all hover:bottom-16 ${isDarkMode ? "text-[#0f172a] hover:text-black" : "text-[#eee] hover:text-white"}`}
      >
        Next project
      </Link>
    </div>
  );
}
