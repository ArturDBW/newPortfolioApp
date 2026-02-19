"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  onNavigate: (href: string) => void;
};

export default function Header({ onNavigate }: Props) {
  const pathname = usePathname();

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
    onNavigate(href); // uruchamiamy animację → potem router.push
  };

  const linkClass = (href: string) =>
    `${isActive(href) ? "text-[#222222]" : "text-[#aaaaaa]"} 
     transition-all hover:text-[#222222] cursor-pointer`;

  return (
    <header className="z-10 flex h-screen w-25 flex-col items-center justify-between border-r border-[#e6e6e6] bg-white py-12 text-[#011933]">
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
        <button className="border-b border-[#aaaaaa] py-2">PL</button>
        <button className="py-2">EN</button>
      </div>
    </header>
  );
}
