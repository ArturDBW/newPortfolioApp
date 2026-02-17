import IconGitHub from "./icons/IconGitHub";
import IconLinkedin from "./icons/IconLinkedin";

export default function Home() {
  return (
    <div className="flex w-full flex-col justify-between bg-gray-900 px-26 py-12">
      <div className="flex items-center justify-between">
        <div className="text-xl">Artur Wiśniewski</div>
        <div className="before:w- relative flex space-x-4 before:absolute before:top-1/2 before:right-26 before:h-px before:w-6 before:-translate-y-1/2 before:bg-[#e6e6e6] before:content-['']">
          <IconGitHub />
          <IconLinkedin />
        </div>
      </div>
      <div className="ml-24">
        <h1 className="relative mb-6 inline-block text-9xl font-bold before:absolute before:right-0 before:-bottom-2 before:left-1/2 before:border-b before:border-[#e6e6e6]">
          Hello
        </h1>
        <p className="ml-24">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi enim
          voluptate, itaque saepe commodi rerum a eius, quis error labore,{" "}
          <br />
          accusantium obcaecati reprehenderit animi tempore sequi laudantium non
          quasi aspernatur.
        </p>
      </div>
      <div className="self-end text-xl">
        <div className="font-bold">Email:</div>
        <div className="font-bold text-[#aaa]">
          arturwisniewski1998@gmail.com
        </div>
      </div>
    </div>
  );
}
