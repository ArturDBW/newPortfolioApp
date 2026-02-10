export default function Page() {
  // const isActive = true;
  return (
    // <>
    //   {isActive && <div className="white-wipe" />}
    //   <div className="bg-green-200">Technologies</div>
    // </>
    <div className="flex w-full">
      <div className="flex-3 bg-white">
        <div className="border-b border-[#e6e6e6] px-25 py-30">
          <h2 className="text-5xl font-bold tracking-wider text-[#011933]">
            Technologies
          </h2>
          <h5 className="mt-5 flex items-center text-sm tracking-widest text-[#8A6B0C] uppercase before:mr-3 before:h-px before:w-6 before:bg-[#8A6B0C] before:content-['']">
            Updated: 10 February 2026
          </h5>
        </div>
        <div className="px-25 pt-12">
          <p className="text-[#011933]">
            Below are the technologies I`ve used in completed projects and am
            ready to apply in a Junior Developer <br /> role. I`m always eager
            to learn new tools and frameworks, so this list is constantly
            evolving as I expand my skill set.
          </p>
        </div>
      </div>
      <div className="flex-2"></div>
    </div>
  );
}
