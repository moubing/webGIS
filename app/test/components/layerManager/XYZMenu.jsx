"use client";

import { Panle } from "@/app/components/Panle";
import { useState } from "react";
import { XYZOption } from "../options/XYZOption";

export function XYZMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-2 py-1 rounded-md shadow-md bg-white text-pink-500"
      >
        XYZ
      </button>
      {isOpen && (
        <Panle isOpen={isOpen} handleClose={() => setIsOpen(false)}>
          <XYZOption handleClose={() => setIsOpen(false)} />
        </Panle>
      )}
    </>
  );
}
