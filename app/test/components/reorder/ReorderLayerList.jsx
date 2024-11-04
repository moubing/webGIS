"use client";

import { useContext, useState, useEffect } from "react";
import { MapContext } from "../../ctx/MapContext";
import { LayerListContext, SetLayerListContext } from "../../ctx/LayerContext";
import { DragAndDrop } from "ol/interaction";
import { GPX, KML, GeoJSON, IGC, TopoJSON } from "ol/format";
import { KMZ } from "../../lib/kmz";
import { supportFormat } from "../../variables/supportFormat";
import { createDefaultStyle } from "../../lib/createStyle";
import { VectorTag, GeoTIFFTag } from "../../variables/tags";
import { Reorder } from "framer-motion";
import { BaseLayerCard } from "./BaseLayerCard";
import { EditBtn } from "./EditBtn";
import { ZoomToLayerBtn } from "./ZoomToLayerBtn";
import { Vector } from "ol/source";
import VectorLayer from "ol/layer/Vector";

export function ReorderLayerList() {
  const map = useContext(MapContext);
  const layerList = useContext(LayerListContext);
  const setLayerList = useContext(SetLayerListContext);
  const [dragAndDrop, set_] = useState(
    new DragAndDrop({
      formatConstructors: [KML, GPX, GeoJSON, TopoJSON, IGC, KMZ],
    })
  );

  useEffect(() => {
    function addFeatures(e) {
      let vSource;
      const fileName = e.file.name;
      const [name, extendName] = fileName.split(".");

      if (!supportFormat.some((item) => item === extendName)) {
        return;
      } else {
        vSource = new Vector({
          features: e.features,
        });
      }
      const vLayer = new VectorLayer({
        source: vSource,
        layerName: name,
        style: createDefaultStyle(),
        geometryType: vSource.getFeatures()[0].getGeometry().getType(),
        tags: [VectorTag, extendName],
      });
      map.addLayer(vLayer);
      map.getView().fit(vSource.getExtent());
      setLayerList((pre) => [vLayer, ...pre]);
    }
    dragAndDrop.on("addfeatures", addFeatures);
    map.addInteraction(dragAndDrop);

    return () => {
      dragAndDrop.un("addfeatures", addFeatures);
      map.removeInteraction(dragAndDrop);
    };
  }, [setLayerList, map, dragAndDrop]);
  return (
    <Reorder.Group
      axis="y"
      values={layerList}
      onReorder={setLayerList}
      className="space-y-2 p-2 w-full flex-grow border-t-2 border-gray-400"
    >
      {layerList.map((layer, index, arr) => (
        <Reorder.Item
          initial={{ scale: 1, boxShadow: "0px 0px 0px 0px #ec4899" }}
          whileDrag={{ scale: 1.05, boxShadow: "0px 0px 5px 2px #ec4899" }}
          key={layer.get("layerName")}
          value={layer}
          className="relative hover:z-50 z-0"
        >
          <BaseLayerCard layer={layer} zIndex={arr.length - index}>
            {layer.get("tags")[0] === VectorTag && <EditBtn layer={layer} />}
            {layer.get("tags")[1] === GeoTIFFTag && (
              <ZoomToLayerBtn layer={layer} />
            )}
          </BaseLayerCard>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}
