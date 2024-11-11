"use client";

import { TabPanel } from "@headlessui/react";
import { GeoJsonMenu } from "./GeoJsonMenu";
import { GeoTiffMenu } from "./GeoTiffMenu";
import { XYZMenu } from "./XYZMenu";
import { TfiMoreAlt } from "react-icons/tfi";

// 2024/11/11 18:53
// todo 在图层管理器中的所有panel，都有一个相同的结果就是一个TabPanel里面有一个title
// todo 后面它这些相同的部分提取出来

export function AddLayerPanel() {
  return (
    <TabPanel className="flex-grow h-full  flex flex-col ">
      <div className="flex-grow-0 flex items-center justify-between p-2 border-b-2 border-slate-400">
        <div>添加图层</div>
        <button className=" hover:bg-gray-50 p-1 rounded-md">
          <TfiMoreAlt className="size-4" />
        </button>
      </div>
      <div className="space-y-2 p-2">
        <p>矢量图层</p>
        <div className="flex flex-wrap gap-2">
          <GeoJsonMenu />
          <GeoJsonMenu />
          <GeoJsonMenu />
          <GeoJsonMenu />
          <GeoJsonMenu />
          <GeoJsonMenu />
        </div>
      </div>
      <div className="space-y-2 p-2">
        <p>瓦片图层</p>
        <div className="flex flex-wrap gap-2">
          <XYZMenu />
          <XYZMenu />
          <XYZMenu />
          <XYZMenu />
          <XYZMenu />
        </div>
      </div>
      <div className="space-y-2 p-2">
        <p>栅格图层</p>
        <div className="flex flex-wrap gap-2">
          <GeoTiffMenu />
          <GeoTiffMenu />
          <GeoTiffMenu />
          <GeoTiffMenu />
          <GeoTiffMenu />
        </div>
      </div>
    </TabPanel>
  );
}
