import IconCSS from "../icons/IconCSS";
import IconExpress from "../icons/IconExpress";
import IconFigma from "../icons/IconFigma";
import IconHTML from "../icons/IconHTML";
import IconJavaScript from "../icons/IconJavaScript";
import IconMongoDB from "../icons/IconMongoDB";
import IconNextJS from "../icons/IconNextJS";
import IconNodeJS from "../icons/IconNodeJS";
import IconReact from "../icons/IconReact";
import IconSass from "../icons/IconSass";
import IconTailwind from "../icons/IconTailwind";
import IconTypeScript from "../icons/IconTypeScript";
import IconVite from "../icons/IconVite";

export default function Page() {
  return (
    <>
      <div className="white-wipe-out" />
      <div className="flex w-full">
        <div className="flex-3 bg-white">
          <div className="slide-up-animation-2s translate-y-25 border-b border-[#e6e6e6] px-25 py-30 opacity-0">
            <h2 className="text-5xl font-bold tracking-wider text-[#011933]">
              Technologies
            </h2>
            <h5 className="mt-5 flex items-center text-sm tracking-widest text-[#8A6B0C] uppercase before:mr-3 before:h-px before:w-6 before:bg-[#8A6B0C] before:content-['']">
              Updated: 10 February 2026
            </h5>
          </div>
          <div className="border-b border-[#e6e6e6] px-25 py-20">
            <p className="slide-up-animation-2s translate-y-25 text-[#011933] opacity-0">
              Below are the technologies I`ve used in completed projects and am
              ready to apply in a Junior Developer <br /> role. I`m always eager
              to learn new tools and frameworks, so this list is constantly
              evolving as I expand my skill set.
            </p>
          </div>
          <div className="slide-up-animation-3s flex translate-y-25 flex-wrap space-y-12 space-x-12 px-25 py-20 opacity-0">
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
          className="relative flex-2 bg-cover bg-center bg-no-repeat"
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
