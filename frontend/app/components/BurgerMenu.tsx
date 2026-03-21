import { Link, usePathname } from "@/app/i18n/navigation";
import { useLocale } from "next-intl";
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
    onClose(); // Zamykamy menu po kliknięciu linku
  };

  const linkClass = (href: string) =>
    `${isActive(href) ? "text-[#222222] border-[#222222]" : "text-[#aaaaaa] border-[#aaaaaa]"} 
     block border-b transition-all hover:text-[#222222] hover:border-[#222222] pb-3`;

  const handleLocaleChange = (nextLocale: Locale) => {
    if (nextLocale === locale) return;
    onLocaleChange(nextLocale);
  };

  return (
    <div className="absolute top-0 left-0 z-3 flex h-screen w-full flex-col items-center justify-between bg-white p-10 max-md:p-5">
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
          onClick={onClose}
          className="tra cursor-pointer rounded-lg p-1 transition-all duration-350 hover:scale-120 hover:rotate-270"
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
          <IconGitHub bgColor={"#011933"} size={"20px"} />
          <IconLinkedin bgColor={"#011933"} size={"20px"} />
        </div>
      </div>
    </div>
  );
}
