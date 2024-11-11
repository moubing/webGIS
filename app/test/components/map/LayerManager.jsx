"use client";

import { TabGroup, TabList, TabPanels } from "@headlessui/react";
import {
  AccountTab,
  AddLayerTab,
  BaseMapTab,
  LayerTab,
  SettingTab,
  ShortcutTab,
} from "../layerManager/LayerManagerTabs";
import { Fragment, useContext, useState, useEffect } from "react";
import { LayerManagerPanel } from "../layerManager/LayerManagerPanel";
import { AddLayerPanel } from "../layerManager/AddLayerPanel";
import { MapContext } from "../../ctx/MapContext";
import { SetLayerListContext } from "../../ctx/LayerContext";
import { DragAndDrop } from "ol/interaction";
import { GPX, KML, GeoJSON, TopoJSON, IGC } from "ol/format";
import { KMZ } from "../../lib/kmz";
import { supportFormat } from "../../variables/supportFormat";
import { Vector } from "ol/source";
import VectorLayer from "ol/layer/Vector";
import { createDefaultStyle } from "../../lib/createStyle";
import { VectorTag } from "../../variables/tags";
import { EditBar } from "../editLayer/EditBar";
import { ShortCutPanel } from "../layerManager/ShortCutPanel";
import { BaseMapPanel } from "../layerManager/BaseMapPanel";

export function LayerManager() {
  const map = useContext(MapContext);
  const setLayerList = useContext(SetLayerListContext);

  const [dragAndDrop] = useState(
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
      vLayer.setZIndex(map.getAllLayers().length + 1);
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
    <>
      <TabGroup vertical className="h-full w-full relative flex bg-gray-200">
        <TabList className="flex flex-col justify-between bg-gray-800 h-full w-fit">
          <div className="flex flex-col">
            <LayerTab />
            <AddLayerTab />
            <ShortcutTab />
            <BaseMapTab />
          </div>
          <div>
            <SettingTab />
            <AccountTab />
          </div>
        </TabList>
        <TabPanels as={Fragment}>
          <LayerManagerPanel />
          <AddLayerPanel />
          <ShortCutPanel />
          <BaseMapPanel />
        </TabPanels>
      </TabGroup>
      <EditBar />
    </>
  );
}

// export function LayerManager() {
//   return (
//     <div className="h-full w-full relative flex ">
//       <TempSliderbar />
//       <div className=" h-full flex-grow flex flex-col bg-gray-200">
//         <TempTopbar />
//         <ReorderLayerList />
//       </div>
//       <EditBar />
//     </div>
//   );
// }
