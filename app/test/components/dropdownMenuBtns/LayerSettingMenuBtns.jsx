"use client";

import { MenuItem } from "@headlessui/react";
import { useContext } from "react";
import { PiTable } from "react-icons/pi";
import { LayerContext } from "../../ctx/LayerCardContext";
import { SetTabListContext, TabListContext } from "../../ctx/tabListContext";
import {
  AttributeTablePanel,
  AttributeTableTab,
} from "../consoleTab/AtrributeTableTab";
import { featuresToStingData } from "../../lib/transfrom";

export function OpenAttributeTableBtn() {
  const layer = useContext(LayerContext);
  const setTabList = useContext(SetTabListContext);

  return (
    <MenuItem className="data-[focus]:bg-sky-200">
      <button
        className="flex items-center justify-between p-2 rounded-md w-full"
        onClick={() => {
          const features = layer.getSource().getFeatures();
          const data = featuresToStingData(features);
          setTabList((pre) => [
            ...pre,
            {
              Tab: AttributeTableTab,
              Panel: AttributeTablePanel,
              data: data,
            },
          ]);
        }}
      >
        <div className=" flex items-center gap-2">
          <PiTable className="size-5 text-sky-500" />
          <section>打开属性表</section>
        </div>
        <section>Ctrl + I</section>
      </button>
    </MenuItem>
  );
}
