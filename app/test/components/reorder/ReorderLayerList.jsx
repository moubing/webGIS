"use client";

import { useContext } from "react";
import { LayerListContext, SetLayerListContext } from "../../ctx/LayerContext";
import { VectorTag, GeoTIFFTag } from "../../variables/tags";
import { Reorder } from "framer-motion";
import { BaseLayerCard } from "./BaseLayerCard";
import { EditBtn } from "./EditBtn";
import { ZoomToLayerBtn } from "./ZoomToLayerBtn";

export function ReorderLayerList() {
  const layerList = useContext(LayerListContext);
  const setLayerList = useContext(SetLayerListContext);

  return (
    <Reorder.Group
      axis="y"
      values={layerList}
      onReorder={setLayerList}
      className="space-y-2 p-2 w-full flex-grow overflow-auto"
    >
      {layerList.map((layer, index, arr) => (
        <Reorder.Item
          // initial={{ scale: 1 }}
          // whileDrag={{ scale: 1.05 }}
          key={layer.get("layerName")}
          value={layer}
          className="relative hover:z-50 z-0"
        >
          <BaseLayerCard layer={layer} zIndex={arr.length - index}>
            {/* {layer.get("tags")[0] === VectorTag && <EditBtn layer={layer} />}
            {layer.get("tags")[1] === GeoTIFFTag && (
              <ZoomToLayerBtn layer={layer} />
            )} */}
          </BaseLayerCard>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}
