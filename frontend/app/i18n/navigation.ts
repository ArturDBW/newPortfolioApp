// frontend/app/i18n/navigation.ts
import { createNavigation } from "next-intl/navigation";

export const { Link, useRouter, usePathname, redirect } = createNavigation({
  locales: ["pl", "en"],
  defaultLocale: "en",
});
