"use client";

import { TabPanel } from "@headlessui/react";
import { TfiMoreAlt } from "react-icons/tfi";
import { baseMapList } from "../../variables/baseMapList";
import Image from "next/image";
import { baseMapPicBaseUrl } from "../../variables/dataBaseUrl";
import { useContext } from "react";
import { MapContext } from "../../ctx/MapContext";
import { SetLayerListContext } from "../../ctx/LayerContext";
import TileLayer from "ol/layer/Tile";
import { XYZ } from "ol/source";
import { TileTag, XYZTag } from "../../variables/tags";
import { getCount, increaseCount } from "../../lib/baseMap";

export function BaseMapPanel() {
  const map = useContext(MapContext);
  const setLayerList = useContext(SetLayerListContext);

  return (
    <TabPanel className="flex-grow h-full  flex flex-col ">
      <div className="flex-grow-0 flex items-center justify-between p-2 border-b-2 border-slate-400">
        <div>切换底图</div>
        <button className=" hover:bg-gray-50 p-1 rounded-md">
          <TfiMoreAlt className="size-4" />
        </button>
      </div>
      <div className=" overflow-auto flex-grow  flex flex-wrap gap-2 p-2">
        {baseMapList.map((baseMap) => (
          <div
            key={baseMap.name}
            className=" bg-white rounded-md shadow-md p-2"
          >
            <div className="flex gap-2 ">
              <Image
                src={baseMapPicBaseUrl + baseMap.name + ".png"}
                width={150}
                height={99}
                alt={baseMap.name}
              />

              <div className="flex flex-col gap-2 text-xs font-bold">
                <button
                  className="px-2 py-1 rounded-md shadow-md bg-sky-200 text-pink-500"
                  onClick={() => {
                    const layerNameArr = map.getAllLayers().map((layer) => {
                      return layer.get("layerName");
                    });

                    if (layerNameArr.includes(baseMap.name)) {
                      return;
                    }

                    const newBaseMapLayer = new TileLayer({
                      layerName: baseMap.name,
                      tags: [TileTag, XYZTag],
                      source: new XYZ({
                        attributions: baseMap.attribution,
                        url: baseMap.url,
                      }),
                    });

                    newBaseMapLayer.setZIndex(getCount());

                    const insertIndex = map.getAllLayers().length - getCount();
                    increaseCount();
                    map.addLayer(newBaseMapLayer);

                    setLayerList((pre) => {
                      const newLayerList = [...pre];
                      newLayerList.splice(insertIndex, 0, newBaseMapLayer);
                      return newLayerList;
                    });
                  }}
                >
                  新增底图
                </button>
                <button
                  className="px-2 py-1 rounded-md shadow-md bg-sky-200 text-pink-500"
                  onClick={() => {
                    const layerNameArr = map.getAllLayers().map((layer) => {
                      return layer.get("layerName");
                    });

                    if (layerNameArr.includes(baseMap.name)) {
                      return;
                    }

                    const newBaseMapLayer = new TileLayer({
                      layerName: baseMap.name,
                      tags: [TileTag, XYZTag],
                      source: new XYZ({
                        attributions: baseMap.attribution,
                        url: baseMap.url,
                      }),
                    });

                    newBaseMapLayer.setZIndex(getCount());

                    const insertIndex = map.getAllLayers().length - getCount();
                    const replacedLayer = map.getAllLayers()[insertIndex];
                    map.removeLayer(replacedLayer);
                    map.addLayer(newBaseMapLayer);

                    setLayerList((pre) => {
                      const newLayerList = [...pre];
                      newLayerList.splice(insertIndex, 1, newBaseMapLayer);
                      return newLayerList;
                    });
                  }}
                >
                  替换底图
                </button>
              </div>
            </div>
            <div className="text-sm mt-2 text-sky-500">{baseMap.name}</div>
          </div>
        ))}
      </div>
    </TabPanel>
  );
}
