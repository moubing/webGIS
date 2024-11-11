"use client";

import { Panle } from "@/app/components/Panle";
import { useState } from "react";
import { GeoTIFFOption } from "../options/GeoTIFFOption";

export function GeoTiffMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="px-2 py-1 rounded-md shadow-md bg-white text-indigo-500"
        onClick={() => setIsOpen(true)}
      >
        geoTiff
      </button>
      {isOpen && (
        <Panle isOpen={isOpen} handleClose={() => setIsOpen(false)}>
          <GeoTIFFOption handleClose={() => setIsOpen(false)} />
        </Panle>
      )}
    </>
  );
}
