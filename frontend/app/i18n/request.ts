import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const messages = (await import(`../messages/${locale}.json`)).default;
  const projectMessages = (await import(`../messages/${locale}.project.json`))
    .default;

  return {
    locale,
    messages: {
      ...messages,
      projects: projectMessages,
    },
  };
});
