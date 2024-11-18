"use client";

import { MenuItem } from "@headlessui/react";
import { useContext, useRef } from "react";
import { LuPaintbrush } from "react-icons/lu";
import { PiTable } from "react-icons/pi";
import { LayerContext } from "../../ctx/LayerCardContext";
import {
  SetTabListContext,
  SetToolTabListContext,
} from "../../ctx/tabListContext";
import {
  AttributeTablePanel,
  AttributeTableTab,
} from "../consoleTab/AtrributeTableTab";
import { featuresToStingData } from "../../lib/transfrom";
import { MdOutlineEditNote } from "react-icons/md";
import { SetEditLayerContext } from "../../ctx/LayerContext";
import { MapContext } from "../../ctx/MapContext";
import { GeoTIFFTag, TileTag, VectorTag } from "../../variables/tags";
import { View } from "ol";
import { MdOutlineZoomInMap } from "react-icons/md";
import { StyleSettingPanel, StyleSettingTab } from "../toolTab/StyleSettingTab";
import { styleSettingMap } from "../../lib/styleSettingMap";
import { ChartsPanel, ChartsTab } from "../toolTab/ChartsTab";

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

export function EditBtn() {
  const layer = useContext(LayerContext);
  const setEditLayer = useContext(SetEditLayerContext);
  return (
    <MenuItem className="data-[focus]:bg-sky-200">
      <button
        className="flex items-center justify-between p-2 rounded-md w-full"
        onClick={() => {
          setEditLayer(layer);
        }}
      >
        <div className=" flex items-center gap-2">
          <MdOutlineEditNote className="size-5 text-sky-500" />
          <section>编辑</section>
        </div>
        <section>Ctrl + I</section>
      </button>
    </MenuItem>
  );
}

export function ZoomToExtentBtn() {
  const map = useContext(MapContext);
  const layer = useContext(LayerContext);

  return (
    <MenuItem className="data-[focus]:bg-sky-200">
      <button
        className="flex items-center justify-between p-2 rounded-md w-full"
        onClick={() => {
          if (layer.get("tags")[1] === GeoTIFFTag) {
            map.setView(layer.getSource().getView());
          }
          if (layer.get("tags")[0] === TileTag) {
            map.setView(
              new View({
                center: [0, 0],
                zoom: 1,
              })
            );
          }
          if (layer.get("tags")[0] === VectorTag) {
            map.getView().fit(layer.getSource().getExtent());
          }
        }}
      >
        <div className=" flex items-center gap-2">
          <MdOutlineZoomInMap className="size-5 text-sky-500" />
          <section>缩放至图层</section>
        </div>
        <section>Ctrl + I</section>
      </button>
    </MenuItem>
  );
}

export function StyleSettingBtn() {
  const layer = useContext(LayerContext);
  const setToolTabList = useContext(SetToolTabListContext);
  return (
    <MenuItem className="data-[focus]:bg-sky-200">
      <button
        className="flex items-center justify-between p-2 rounded-md w-full"
        onClick={() => {
          setToolTabList((pre) => [
            ...pre,
            {
              Tab: StyleSettingTab,
              Panel: StyleSettingPanel,
              payload: {
                component: styleSettingMap.get(layer.get("geometryType")),
                style: layer.getStyle(),
                layer: layer,
              },
            },
          ]);
        }}
      >
        <div className=" flex items-center gap-2">
          <LuPaintbrush className="size-5 text-sky-500" />
          <section>样式设置</section>
        </div>
        <section>Ctrl + I</section>
      </button>
    </MenuItem>
  );
}
export function GenerateChartsBtn() {
  const layer = useContext(LayerContext);
  const setToolTabList = useContext(SetToolTabListContext);
  return (
    <MenuItem className="data-[focus]:bg-sky-200">
      <button
        className="flex items-center justify-between p-2 rounded-md w-full"
        onClick={() => {
          setToolTabList((pre) => [
            ...pre,
            {
              Tab: ChartsTab,
              Panel: ChartsPanel,
              payload: layer.getSource().getFeatures(),
            },
          ]);
        }}
      >
        <div className=" flex items-center gap-2">
          <LuPaintbrush className="size-5 text-sky-500" />
          <section>生成图表</section>
        </div>
        <section>Ctrl + I</section>
      </button>
    </MenuItem>
  );
}
