"use client";

import { useContext } from "react";
import { LayerContext } from "../../ctx/LayerAndStyleContext";
import { styleSettingMap } from "../../lib/styleSettingMap";

// 现在没有时间去改进代码，和添加新的东西
// todo 这里的input的事件应该统一一下，这样写它冗余了
// todo 样式就用一个对象表达，没有必要创建很多的state，就像option那样

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
