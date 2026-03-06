"use client";

import { Link, usePathname, useRouter } from "@/app/i18n/navigation";
import { useLocale } from "next-intl";
import type { Locale } from "@/app/i18n/routing";
// import { usePathname } from "next/navigation";

type Props = {
  onNavigate: (href: string) => void;
};

export default function Header({ onNavigate }: Props) {
  const router = useRouter();
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

    // Ręcznie budujemy ścieżkę z prefiksem językowym.
    // Zabezpieczamy się przed podwójnym slashem np. /en/ zamiast /en
    const localeHref = href === "/" ? `/${locale}` : `/${locale}${href}`;

    onNavigate(localeHref); // uruchamiamy animację → potem router.push
  };

  const linkClass = (href: string) =>
    `${isActive(href) ? "text-[#222222]" : "text-[#aaaaaa]"} 
     transition-all hover:text-[#222222] cursor-pointer`;

  const handleLocaleChange = (nextLocale: Locale) => {
    if (nextLocale === locale) return;

    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <header className="sticky top-0 left-0 z-10 flex h-screen w-25 flex-col items-center justify-between border-r border-[#e6e6e6] bg-white py-12 text-[#011933]">
      <div className="text-3xl font-bold">dBw</div>

      <nav className="rotate-270 text-sm font-bold tracking-widest uppercase">
        <ul className="flex space-x-10">
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

      <div className="flex flex-col font-bold text-[#aaaaaa]">
        <button
          type="button"
          onClick={() => handleLocaleChange("pl")}
          aria-pressed={locale === "pl"}
          className={`cursor-pointer border-b border-[#aaaaaa] py-2 ${locale === "pl" ? "text-[#222222]" : ""}`}
        >
          PL
        </button>
        <button
          type="button"
          onClick={() => handleLocaleChange("en")}
          aria-pressed={locale === "en"}
          className={`cursor-pointer py-2 ${locale === "en" ? "text-[#222222]" : ""}`}
        >
          EN
        </button>
      </div>
    </header>
  );
}
