import IconGitHub from "./icons/IconGitHub";
import IconLinkedin from "./icons/IconLinkedin";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col justify-between bg-gray-900 px-26 py-12">
      <div className="flex items-center justify-between">
        <div className="text-xl">Artur Wiśniewski</div>
        <div className="flex space-x-4">
          <IconGitHub />
          <IconLinkedin />
        </div>
      </div>
      <div className="ml-24">
        <h1 className="relative mb-6 inline-block text-9xl font-bold after:absolute after:right-0 after:-bottom-2 after:left-1/2 after:border-b after:border-[#e6e6e6]">
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
