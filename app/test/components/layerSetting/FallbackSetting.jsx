"use client";

import { useContext } from "react";
import { LayerContext } from "../../ctx/LayerCardContext";
import { Item, Part } from "./VectorLayerSetting";

export function FallbackSetting() {
  const layer = useContext(LayerContext);
  return (
    <div>
      <div>
        <p>一般图层设置</p>
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
        <p>fallback setting(under development)</p>
      </div>
    </div>
  );
}
