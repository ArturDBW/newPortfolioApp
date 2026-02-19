"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Header from "./Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isClosingAnimation, setIsClosingAnimation] = useState(false);

  const handleNavigation = (href: string) => {
    if (isClosingAnimation) return;
    setIsClosingAnimation(true);

    setTimeout(() => {
      router.push(href);
      // setIsAnimating(false);
    }, 2000); // 2 sekundy animacji
  };

  useEffect(() => {
    if (!isClosingAnimation) return;

    // mała pauza żeby nowa strona się wyrenderowała pod overlayem
    const timeout = setTimeout(() => {
      setIsClosingAnimation(false);
    }, 100);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      <div className={`overlay ${isClosingAnimation && "white-wipe-in"}`} />
      <Header onNavigate={handleNavigation} />
      {children}
    </>
  );
}
