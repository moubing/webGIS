"use client";

import { useContext } from "react";
import { MapConCtx } from "../../ctx/switchContainer";

export function MapContainer({ children }) {
  console.log("map render");

  const mapContainerState = useContext(MapConCtx);
  if (mapContainerState) {
    return (
      <div className="flex-grow bg-violet-200 relative z-10">{children}</div>
    );
  }
}
