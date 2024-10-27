"use client";

import { useContext, useState } from "react";
import {
  EditLayerContext,
  LayerListContext,
  SelectedFeaturesContext,
  SetEditLayerContext,
  SetLayerListContext,
  SetSelectedFeaturesContext,
} from "../../ctx/LayerContext";
import { MapContext } from "../../ctx/MapContext";

export function LayerProvider({ children }) {
  const map = useContext(MapContext);
  const [layerList, setLayerList] = useState(map.getAllLayers());
  const [editLayer, setEditlayer] = useState(null);
  const [selectedFeatures, setSelectedFeatures] = useState(null);

  return (
    <LayerListContext.Provider value={layerList}>
      <SetLayerListContext.Provider value={setLayerList}>
        <EditLayerContext.Provider value={editLayer}>
          <SetEditLayerContext.Provider value={setEditlayer}>
            <SelectedFeaturesContext.Provider value={selectedFeatures}>
              <SetSelectedFeaturesContext.Provider value={setSelectedFeatures}>
                {children}
              </SetSelectedFeaturesContext.Provider>
            </SelectedFeaturesContext.Provider>
          </SetEditLayerContext.Provider>
        </EditLayerContext.Provider>
      </SetLayerListContext.Provider>
    </LayerListContext.Provider>
  );
}
