export default function Page() {
  const liStyles =
    "group relative cursor-pointer transition-transform duration-500 before:absolute before:top-1/2 before:right-full before:mr-2 before:h-px before:w-6 before:-translate-y-1/2 before:bg-[#8A6B0C] before:opacity-0 before:transition-opacity before:duration-300 before:content-[''] hover:translate-x-8 hover:before:opacity-100";

  return (
    <div className="flex w-full">
      <div className="flex flex-2 flex-col items-center justify-center bg-white">
        <ul className="space-y-10 text-[#011933]">
          <li className={liStyles}>
            <span className="mr-3 text-xl transition-all group-hover:text-[#8A6B0C]">
              Turnadon
            </span>
            <span className="text-lg text-[#aaa] transition-all group-hover:text-[#8d8d8d]">
              Dynamic advertising posters
            </span>
          </li>{" "}
          <li className={liStyles}>
            <span className="mr-3 text-xl transition-all group-hover:text-[#8A6B0C]">
              Turnadon
            </span>
            <span className="text-lg text-[#aaa] transition-all group-hover:text-[#8d8d8d]">
              Dynamic advertising posters
            </span>
          </li>
          <li className={liStyles}>
            <span className="mr-3 text-xl transition-all group-hover:text-[#8A6B0C]">
              Turnadon
            </span>
            <span className="text-lg text-[#aaa] transition-all group-hover:text-[#8d8d8d]">
              Dynamic advertising posters
            </span>
          </li>
        </ul>
      </div>
      <div className="flex-3 bg-red-200"></div>
    </div>
  );
}
