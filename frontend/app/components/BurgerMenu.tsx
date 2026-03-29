import { Link, usePathname } from "@/app/i18n/navigation";
import { useLocale } from "next-intl";
import { useState, useEffect, useCallback } from "react";
import type { Locale } from "@/app/i18n/routing";
import IconGitHub from "../icons/IconGitHub";
import IconLinkedin from "../icons/IconLinkedin";
import IconClose from "../icons/IconClose";

type Props = {
  onNavigate: (href: string) => void;
  onLocaleChange: (locale: Locale) => void;
  onClose: () => void;
};

export default function BurgerMenu({
  onNavigate,
  onLocaleChange,
  onClose,
}: Props) {
  const pathname = usePathname();
  const locale = useLocale();
  const [isEntering, setIsEntering] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  const [showCloseWipe, setShowCloseWipe] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsEntering(false), 10);
    return () => clearTimeout(timer);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" || pathname === "";
    }
    return pathname.startsWith(href);
  };

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault(); // blokujemy natychmiastowy navigation
    onNavigate(href); // next-intl router sam dodaje aktualny prefiks locale
    setTimeout(onClose, 2000); // Zamykamy menu po zakończeniu animacji nawigacji
  };

  const linkClass = (href: string) =>
    `${isActive(href) ? "text-[#222222] border-[#222222]" : "text-[#aaaaaa] border-[#aaaaaa]"} 
     block border-b transition-all hover:text-[#222222] hover:border-[#222222] pb-3`;

  const handleLocaleChange = (nextLocale: Locale) => {
    if (nextLocale === locale) return;
    onLocaleChange(nextLocale);
  };

  const handleCloseButton = useCallback(() => {
    if (showCloseWipe || isClosing) return;

    setShowCloseWipe(true);
    setTimeout(() => {
      setIsClosing(true);
    }, 1200);
    setTimeout(onClose, 2200);
  }, [isClosing, onClose, showCloseWipe]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleCloseButton();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleCloseButton]);

  return (
    <div
      className="fixed top-0 left-0 z-7 flex h-screen w-full flex-col items-center justify-between bg-white p-10 transition-transform duration-1000 ease-out max-sm:p-5"
      style={{
        transform: isClosing
          ? "translateX(100%)"
          : isEntering
            ? "translateX(100%)"
            : "translateX(0)",
      }}
    >
      <div className="white-wipe-in-burgerMenu absolute inset-0 z-10 bg-white" />
      {showCloseWipe && (
        <div className="white-wipe-out-burgerMenu absolute inset-0 z-20 bg-white" />
      )}
      <div className="items-between flex w-full justify-between">
        <div className="flex items-center space-x-2 text-lg">
          <button
            type="button"
            onClick={() => handleLocaleChange("pl")}
            aria-pressed={locale === "pl"}
            className={`cursor-pointer py-2 ${locale === "pl" ? "text-[#222222]" : "text-[#aaaaaa]"} `}
          >
            Polski
          </button>
          <div className="text-[#222222]">/</div>
          <button
            type="button"
            onClick={() => handleLocaleChange("en")}
            aria-pressed={locale === "en"}
            className={`cursor-pointer py-2 ${locale === "en" ? "text-[#222222]" : "text-[#aaaaaa]"}`}
          >
            English
          </button>
        </div>
        <button
          onClick={handleCloseButton}
          className="tra cursor-pointer rounded-lg p-2 transition-all duration-350 hover:scale-120 hover:rotate-270"
        >
          <IconClose />
        </button>
      </div>

      <nav className="w-full text-2xl font-bold tracking-wide">
        <ul className="flex flex-col space-y-6">
          <li>
            <Link
              href="/technologies"
              onClick={(e) => handleClick(e, "/technologies")}
              className={linkClass("/technologies")}
            >
              Technologies
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio"
              onClick={(e) => handleClick(e, "/portfolio")}
              className={linkClass("/portfolio")}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="/"
              onClick={(e) => handleClick(e, "/")}
              className={linkClass("/")}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>

      <div className="items-between relative flex w-full justify-between max-sm:flex-col">
        <div className="flex max-md:text-sm max-sm:mb-4">
          <div className="font-bold text-[#011933]">Email:</div>
          <div className="ml-4 font-bold text-[#aaa]">
            arturwisniewski1998@gmail.com
          </div>
        </div>
        <div className="flex items-center space-x-4 before:absolute before:top-1/2 before:right-21 before:h-[0.1px] before:w-8 before:-translate-y-1/2 before:bg-[#011933] before:content-[''] max-sm:before:w-0">
          <a target="_blank" href="https://github.com/ArturDBW">
            <IconGitHub bgColor={"#011933"} size={"20px"} />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/artur-wi%C5%9Bniewski-4045041b8/"
          >
            <IconLinkedin bgColor={"#011933"} size={"20px"} />
          </a>
        </div>
      </div>
    </div>
  );
}
