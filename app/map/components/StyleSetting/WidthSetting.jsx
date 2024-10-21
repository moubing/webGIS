"use client";

import { useCallback, useContext, useState } from "react";
import { NormalBlock } from "./ColorBlocks";
import { StyleSettingContainer2 } from "./StyleSettingContainer";
import { LayerContext, StyleContext } from "../../ctx/LayerAndStyleContext";
import { bold, mid, thin, veryBold } from "@/app/globalVarible";

// 这里的normalblock肯定可以不同写的怎么冗余
// 后面使用列表渲染，它的children都是一个Image，我只需要给它传一个图片src就行了

export function WidthSetting() {
  const layer = useContext(LayerContext);
  const style = useContext(StyleContext);
  const [width, setWidth] = useState(style.getStroke().getWidth());
  const updateStrokeWidth = useCallback(
    function updateStrokeColor(property) {
      style.getStroke().setWidth(property);

      setWidth(property);
      layer.setStyle(style);
    },
    [layer, style]
  );
  return (
    <StyleSettingContainer2 title={"描边线宽"}>
      <NormalBlock
        handleClick={updateStrokeWidth}
        isSelected={width === thin}
        property={thin}
        layoutId={"width"}
      >
        <div className="w-3 rounded-full h-[2px] bg-gray-600"></div>
      </NormalBlock>
      <NormalBlock
        handleClick={updateStrokeWidth}
        isSelected={width === mid}
        property={mid}
        layoutId={"width"}
      >
        <div className="w-4 rounded-full h-[3px] bg-gray-600"></div>
      </NormalBlock>
      <NormalBlock
        handleClick={updateStrokeWidth}
        isSelected={width === bold}
        property={bold}
        layoutId={"width"}
      >
        <div className="w-4 rounded-full h-[4px] bg-gray-600"></div>
      </NormalBlock>
      <NormalBlock
        handleClick={updateStrokeWidth}
        isSelected={width === veryBold}
        property={veryBold}
        layoutId={"width"}
      >
        <div className="w-5 rounded-full h-[6px] bg-gray-600"></div>
      </NormalBlock>
    </StyleSettingContainer2>
  );
}
