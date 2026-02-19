"use client";

import { useState } from "react";

export default function Page() {
  const [isActive, setIsActive] = useState(false);
  console.log(isActive);

  return (
    <>
      <div className={` ${isActive ? "white-wipe-in" : "white-wipe-out"}`} />
      <button
        className="z-20 bg-amber-900"
        onClick={() => setIsActive(!isActive)}
      >
        Click me
      </button>
      <div className="text-5xl text-red-500">Test Page</div>
    </>
  );
}
