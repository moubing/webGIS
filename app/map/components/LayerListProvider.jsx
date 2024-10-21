"use client";

import { useContext, useState } from "react";
import { MapContext } from "../ctx/MapContext";
import { LayerListContext, SetLayerListContext } from "../ctx/LayerListContext";

export function LayerListProvider({ children }) {
  const map = useContext(MapContext);
  const [layerList, setLayerList] = useState(map.getAllLayers());

  return (
    <LayerListContext.Provider value={layerList}>
      <SetLayerListContext.Provider value={setLayerList}>
        {children}
      </SetLayerListContext.Provider>
    </LayerListContext.Provider>
  );
}
