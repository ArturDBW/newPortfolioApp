import IconGitHub from "./icons/IconGitHub";
import IconLinkedin from "./icons/IconLinkedin";

export default function Home() {
  return (
    <div className="flex h-screen w-full flex-col justify-between overflow-hidden bg-gray-900 px-26 py-12">
      <div className="flex items-center justify-between">
        <div className="slide-down-animation -translate-y-25 text-xl font-bold">
          Artur Wiśniewski
        </div>
        <div className="before:w- slide-down-animation relative flex -translate-y-25 space-x-4 before:absolute before:top-1/2 before:right-26 before:h-px before:w-6 before:-translate-y-1/2 before:bg-[#e6e6e6] before:content-['']">
          <IconGitHub />
          <IconLinkedin />
        </div>
      </div>
      <div className="ml-24">
        <h1 className="mb-6 inline-block text-9xl font-bold">
          <span>H</span>
          <span>e</span>
          <span>l</span>
          <span>l</span>
          <span>o</span>
        </h1>
        <div className="line-fade-animation mb-6 ml-24 h-px w-72 bg-[#e6e6e6] opacity-0">
          &nbsp;
        </div>
        <p className="slide-up-animation ml-24 translate-y-25 opacity-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi enim
          voluptate, itaque saepe commodi rerum a eius, quis error labore,{" "}
          <br />
          accusantium obcaecati reprehenderit animi tempore sequi laudantium non
          quasi aspernatur.
        </p>
      </div>
      <div className="slide-up-animation translate-y-25 self-end overflow-hidden text-xl">
        <div className="font-bold">Email:</div>
        <div className="font-bold text-[#aaa]">
          arturwisniewski1998@gmail.com
        </div>
      </div>
    </div>
  );
}
