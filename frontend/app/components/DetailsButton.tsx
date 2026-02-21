export default function DetailsButton() {
  return (
    <button className="group /* 👈 POWIĘKSZA OBSZAR HOVER */ absolute bottom-20 left-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center px-28 text-lg tracking-wider text-[#eee] uppercase transition-colors duration-500 hover:text-white">
      <span className="absolute top-1/2 left-0 h-px w-24 origin-left -translate-y-1/2 scale-x-40 bg-[#aaa] transition-all duration-500 ease-out group-hover:scale-x-70 group-hover:bg-white" />
      Click to discover
      <span className="absolute top-1/2 right-0 h-px w-24 origin-right -translate-y-1/2 scale-x-40 bg-[#aaa] transition-all duration-500 ease-out group-hover:scale-x-70 group-hover:bg-white" />
    </button>
  );
}
