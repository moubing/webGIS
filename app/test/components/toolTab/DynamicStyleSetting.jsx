"use client";

import { memo, useState } from "react";
import { colorMaps } from "../../variables/style";
import Style from "ol/style/Style";
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";
import { getColor } from "../../lib/createStyle";
import { ListBoxMB } from "@/app/components/ListBoxMB";

export function DynamicStyleSetting({ layer }) {
  const [numericList] = useState(() => {
    const properties = layer.getSource().getFeatures()[0].getProperties();
    return Object.entries(properties)
      .filter(([key, value]) => typeof value === "number")
      .map((item) => item[0]);
  });

  const [selectedField, setSelectedField] = useState(numericList[0]);
  const [selectedColormaps, setSelectedColormaps] = useState(colorMaps[0]);
  const [selectedColorSteps, setSelectedColorSteps] = useState(10);

  function applyDynamicStyle() {
    let min = Infinity;
    let max = -Infinity;
    layer
      .getSource()
      .getFeatures()
      .forEach((feature) => {
        min = Math.min(feature.getProperties()[selectedField], min);
        max = Math.max(feature.getProperties()[selectedField], max);
      });
    layer.setStyle((feature) => {
      return new Style({
        fill: new Fill({
          color: getColor(
            selectedColorSteps,
            min,
            max,
            feature.getProperties()[selectedField],
            selectedColormaps
          ),
        }),
        stroke: new Stroke({
          color: "rgba(255,255,255,0.8)",
        }),
      });
    });
  }

  return (
    <div className="p-2 space-y-2">
      <div className="font-bold">动态样式设置</div>
      <ListBoxMB
        state={selectedField}
        list={numericList}
        title={"字段"}
        updateState={setSelectedField}
      />
      <ListBoxMB
        state={selectedColormaps}
        list={colorMaps}
        title={"色带"}
        updateState={setSelectedColormaps}
      />
      <TempInput
        title={"颜色数"}
        state={selectedColorSteps}
        updateState={setSelectedColorSteps}
      />
      <button
        onClick={applyDynamicStyle}
        className="px-2 py-1 rounded-md shadow-md bg-white"
      >
        确定
      </button>
    </div>
  );
}

const TempInput = memo(function TempInput({ title, state, updateState }) {
  return (
    <div>
      <div>{title}</div>
      <input
        type="number"
        step={1}
        min={0}
        max={50}
        value={state}
        onChange={(e) => {
          updateState(+e.target.value);
        }}
      />
    </div>
  );
});
