"use client";

import { IoSearch } from "react-icons/io5";

export function SearchBtn({ handleOpen }) {
  return (
    <button
      className=" rounded-full shadow-md outline outline-2 outline-sky-500 text-slate-400 flex items-center justify-between px-4 py-1 gap-8 font-bold"
      onClick={handleOpen}
    >
      <div className="flex items-center gap-3">
        <IoSearch className="size-6" />
        <p>Quick search...</p>
      </div>
      <p>Ctrl K</p>
    </button>
  );
}
