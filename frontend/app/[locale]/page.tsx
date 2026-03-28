import { useTranslations } from "next-intl";
import IconGitHub from "../icons/IconGitHub";
import IconLinkedin from "../icons/IconLinkedin";
import Spline from "@splinetool/react-spline";

export default function Home() {
  const t = useTranslations("About");

  return (
    <>
      <div className="white-wipe-out" />
      <div className="relative z-3 flex h-screen w-full flex-col justify-between overflow-hidden px-26 py-12 max-lg:justify-start max-md:p-10 max-sm:p-5">
        <div className="flex items-center justify-between max-md:flex-col max-md:items-start max-md:space-y-3">
          <div className="slide-down-animation -translate-y-25 text-xl font-bold">
            Artur Wiśniewski
          </div>
          <div className="slide-down-animation relative flex -translate-y-25 space-x-4 before:absolute before:top-1/2 before:right-26 before:h-px before:w-6 before:-translate-y-1/2 before:bg-[#e6e6e6] before:content-[''] max-md:before:w-0">
            <a target="_blank" href="https://github.com/ArturDBW">
              <IconGitHub bgColor={"#fff"} size={"20px"} />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/artur-wi%C5%9Bniewski-4045041b8/"
            >
              <IconLinkedin bgColor={"#fff"} size={"20px"} />
            </a>
          </div>
        </div>
        <div className="mt-10 ml-24 max-xl:ml-6 max-lg:self-start max-md:mx-auto">
          <h1 className="mb-6 inline-block text-9xl font-bold max-sm:text-5xl">
            <span>H</span>
            <span>e</span>
            <span>l</span>
            <span>l</span>
            <span>o</span>
          </h1>

          <div className="line-fade-animation mb-6 ml-24 h-px w-72 bg-[#e6e6e6] opacity-0 max-sm:w-48">
            &nbsp;
          </div>
          <p className="slide-up-animation-4s ml-24 w-160 translate-y-25 opacity-0 max-2xl:w-100 max-md:ml-auto max-sm:w-auto max-sm:text-sm">
            {t("aboutMe")}
          </p>
        </div>
        <div className="slide-up-animation-4s translate-y-25 overflow-hidden text-xl max-lg:mt-auto">
          <div className="font-bold">Email:</div>
          <div className="font-bold text-[#aaa]">
            arturwisniewski1998@gmail.com
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 z-2 h-screen w-full overflow-hidden bg-black">
        <Spline
          scene="https://prod.spline.design/SxKuVXuZyQgVCFYp/scene.splinecode"
          className="robot-hidden-animation translate-x-130 opacity-0 max-2xl:translate-x-80 max-xl:translate-x-50 max-lg:translate-x-0 max-lg:translate-y-40"
        />
      </div>
    </>
  );
}
