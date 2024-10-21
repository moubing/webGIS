"use client";

import { useCallback, useContext, useState } from "react";
import { NormalBlock } from "./ColorBlocks";
import { StyleSettingContainer2 } from "./StyleSettingContainer";
import { PiRectangleDashedBold } from "react-icons/pi";
import { PiRectangleBold } from "react-icons/pi";
import { LayerContext, StyleContext } from "../../ctx/LayerAndStyleContext";
import { dashArr } from "@/app/globalVarible";

export function LineDashSetting() {
  const layer = useContext(LayerContext);
  const style = useContext(StyleContext);
  const [dash, setDash] = useState(style.getStroke().getLineDash());
  const updateStrokeDash = useCallback(
    function updateStrokeColor(property) {
      style.getStroke().setLineDash(property);

      setDash(property);
      layer.setStyle(style);
    },
    [layer, style]
  );
  return (
    <StyleSettingContainer2 title={"描边样式"}>
      <NormalBlock
        handleClick={updateStrokeDash}
        isSelected={dash === null}
        property={null}
        layoutId={"dash"}
      >
        <PiRectangleBold className="text-gray-600 size-5" />
      </NormalBlock>
      <NormalBlock
        handleClick={updateStrokeDash}
        isSelected={dash === dashArr}
        property={dashArr}
        layoutId={"dash"}
      >
        <PiRectangleDashedBold className="text-gray-600 size-5" />
      </NormalBlock>
    </StyleSettingContainer2>
  );
}
