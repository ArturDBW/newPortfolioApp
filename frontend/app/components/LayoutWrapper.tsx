"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "@/app/i18n/navigation";
import type { Locale } from "@/app/i18n/routing";
import { useLocale } from "next-intl";
import Header from "./Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isClosingAnimation, setIsClosingAnimation] = useState(false);

  const handleNavigation = (href: string) => {
    if (isClosingAnimation) return;
    setIsClosingAnimation(true);

    setTimeout(() => {
      router.push(href);
      // setIsAnimating(false);
    }, 2000); // 2 sekundy animacji
  };

  const handleLocaleChange = (locale: Locale) => {
    if (isClosingAnimation) return;
    setIsClosingAnimation(true);

    setTimeout(() => {
      router.replace(pathname, { locale });
    }, 2000); // 2 sekundy animacji
  };

  useEffect(() => {
    // Resetujemy overlay dopiero po zakończonej nawigacji (zmiana ścieżki lub locale).
    const timeout = setTimeout(() => {
      setIsClosingAnimation(false);
    }, 100);

    return () => clearTimeout(timeout);
  }, [pathname, locale]);

  return (
    <>
      <div
        className={isClosingAnimation ? "overlay white-wipe-in" : "overlay"}
      />
      <Header
        onNavigate={handleNavigation}
        onLocaleChange={handleLocaleChange}
      />
      {children}
    </>
  );
}
