"use client";

import { Panle } from "@/app/components/Panle";
import { useState } from "react";
import { GeoJSONOption } from "../options/GeoJSONOption";

export function GeoJsonMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-2 py-1 rounded-md shadow-md bg-white text-sky-500"
      >
        geoJson
      </button>
      {isOpen && (
        <Panle isOpen={isOpen} handleClose={() => setIsOpen(false)}>
          <GeoJSONOption handleClose={() => setIsOpen(false)} />
        </Panle>
      )}
    </>
  );
}
