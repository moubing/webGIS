"use client";

import { TabPanel } from "@headlessui/react";
import { TfiMoreAlt } from "react-icons/tfi";
import { ReorderLayerList } from "../reorder/ReorderLayerList";

export function LayerManagerPanel() {
  return (
    <TabPanel className="flex-grow h-full  flex flex-col">
      <div className="flex-grow-0 flex items-center justify-between p-2 border-b-2 border-slate-400">
        <div>图层列表</div>
        <button className=" hover:bg-gray-50 p-1 rounded-md">
          <TfiMoreAlt className="size-4" />
        </button>
      </div>
      <ReorderLayerList />
    </TabPanel>
  );
}
