import { useTranslations } from "next-intl";
import IconCSS from "../../icons/IconCSS";
import IconExpress from "../../icons/IconExpress";
import IconFigma from "../../icons/IconFigma";
import IconHTML from "../../icons/IconHTML";
import IconJavaScript from "../../icons/IconJavaScript";
import IconMongoDB from "../../icons/IconMongoDB";
import IconNextJS from "../../icons/IconNextJS";
import IconNodeJS from "../../icons/IconNodeJS";
import IconReact from "../../icons/IconReact";
import IconSass from "../../icons/IconSass";
import IconTailwind from "../../icons/IconTailwind";
import IconTypeScript from "../../icons/IconTypeScript";
import IconVite from "../../icons/IconVite";

export default function Page() {
  const t = useTranslations("Technologies");

  return (
    <>
      <div className="white-wipe-out" />
      <div className="flex min-h-screen w-full">
        <div className="flex-3 bg-white">
          <div className="slide-up-animation-2s translate-y-25 border-b border-[#e6e6e6] px-25 py-30 opacity-0 max-xl:px-10 max-lg:py-10 max-sm:p-5">
            <h2 className="text-5xl font-bold tracking-wider text-[#011933] max-md:text-4xl">
              Technologies
            </h2>
            <h5 className="mt-5 flex items-center text-sm tracking-widest text-[#8A6B0C] uppercase before:mr-3 before:h-px before:w-6 before:bg-[#8A6B0C] before:content-[''] max-md:text-xs">
              Updated: 10 February 2026
            </h5>
          </div>
          <div className="border-b border-[#e6e6e6] px-25 py-20 max-xl:px-10 max-md:py-10 max-sm:p-5">
            <p className="slide-up-animation-2s translate-y-25 text-[#011933] opacity-0">
              {t("description")}
            </p>
          </div>
          <div className="slide-up-animation-3s flex translate-y-25 flex-wrap space-y-12 space-x-12 px-25 py-20 opacity-0 max-[400px]:flex-col max-[400px]:items-center max-[400px]:justify-center max-xl:px-10 max-md:py-10">
            <IconHTML />
            <IconCSS />
            <IconSass />
            <IconTailwind />
            <IconJavaScript />
            <IconTypeScript />
            <IconReact />
            <IconNodeJS />
            <IconExpress />
            <IconMongoDB />
            <IconVite />
            <IconNextJS />
            <IconFigma />
          </div>
        </div>
        <div
          className="sticky top-0 right-0 h-screen flex-2 bg-cover bg-center bg-no-repeat max-lg:hidden"
          style={{
            backgroundImage: "url('/img/technologiesbgimage.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "25% center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="grey-wipe-out absolute" />
        </div>
      </div>
    </>
  );
}
