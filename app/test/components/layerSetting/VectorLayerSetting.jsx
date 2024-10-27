"use client";

import { useContext } from "react";
import { LayerContext } from "../../ctx/LayerCardContext";
import { styleSettingMap } from "../../lib/styleSettingMap";

export function VectorLayerSetting() {
  const layer = useContext(LayerContext);
  const StyleSetting = styleSettingMap.get(layer.get("geometryType"));
  return (
    <div>
      <StyleSetting />
      <p>矢量图层设置</p>
      <Part title={"基本设置"}>
        <Item>
          <p>图层透明度</p>
          <input
            type="range"
            max={1}
            min={0}
            defaultValue={0}
            step={0.01}
            onChange={(e) => {
              layer.setOpacity(+e.target.value);
            }}
          />
        </Item>
      </Part>
    </div>
  );
}

export function Item({ children }) {
  return (
    <div className="flex items-center gap-2 bg-gray-200 rounded-sm shadow-md px-2 py-1">
      {children}
    </div>
  );
}

export function Part({ children, title }) {
  return (
    <section className="p-2 space-y-2">
      <p>{title}</p>
      {children}
    </section>
  );
}

export function ColorInput({ value, handleChange }) {
  return (
    <input
      type="color"
      value={value}
      onChange={handleChange}
      className=" size-6"
    />
  );
}
