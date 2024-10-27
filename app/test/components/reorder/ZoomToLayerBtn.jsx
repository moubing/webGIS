"use client";

import { useContext, useRef } from "react";
import { MdOutlineZoomInMap } from "react-icons/md";
import { View } from "ol";
import { MapContext } from "../../ctx/MapContext";

export function ZoomToLayerBtn({ layer }) {
  const map = useContext(MapContext);
  const isClicked = useRef(false);
  return (
    <MdOutlineZoomInMap
      className="size-6 text-sky-500 hover:text-pink-500 hover:scale-105"
      onClick={() => {
        if (isClicked.current === false) {
          map.setView(layer.getSource().getView());
          isClicked.current = true;
        } else {
          map.setView(
            new View({
              center: [0, 0],
              zoom: 1,
            })
          );
          isClicked.current = false;
        }
      }}
    />
  );
}
