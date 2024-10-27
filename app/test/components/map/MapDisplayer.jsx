"use client";

import { useContext, useEffect, useRef } from "react";
import { MapContext } from "../../ctx/MapContext";

export function MapDisplayer() {
  const mapRef = useRef(null);
  const map = useContext(MapContext);

  useEffect(() => {
    map.setTarget(mapRef.current);
    return () => {
      map.setTarget(undefined);
    };
  }, [map]);

  return (
    <div
      tabIndex={1}
      ref={mapRef}
      className="h-full w-full relative z-10"
    ></div>
  );
}
