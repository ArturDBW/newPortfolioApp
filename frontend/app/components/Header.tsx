"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" || pathname === "";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="z-10 flex h-screen w-25 flex-col items-center justify-between border-r border-[#e6e6e6] bg-white py-12 text-[#011933]">
      <div className="text-3xl font-bold">dBw</div>
      <nav className="rotate-270 text-sm font-bold tracking-widest uppercase">
        <ul className="flex space-x-10">
          <Link href="/technologies">
            <li
              className={`${isActive("/technologies") ? "text-[#222222]" : "text-[#aaaaaa]"} transition-all hover:text-[#222222]`}
            >
              Technologies
            </li>
          </Link>
          <Link href="/portfolio">
            <li
              className={`${isActive("/portfolio") ? "text-[#222222]" : "text-[#aaaaaa]"} transition-all hover:text-[#222222]`}
            >
              Portfolio
            </li>
          </Link>
          <Link href="/">
            <li
              className={`${isActive("/") ? "text-[#222222]" : "text-[#aaaaaa]"} transition-all hover:text-[#222222]`}
            >
              About
            </li>
          </Link>
          <Link href="/test">
            <li
              className={`${isActive("/test") ? "text-[#222222]" : "text-[#aaaaaa]"} transition-all hover:text-[#222222]`}
            >
              test
            </li>
          </Link>
        </ul>
      </nav>
      <div className="flex flex-col font-bold text-[#aaaaaa]">
        <button className="border-b border-[#aaaaaa] py-2">PL</button>
        <button className="py-2">EN</button>
      </div>
    </header>
  );
}
