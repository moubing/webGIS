"use client";

import { useCallback, useState } from "react";
import { StyleSettingContainer2 } from "./StyleSettingContainer";
import { PiRectangleDashedBold } from "react-icons/pi";
import { PiRectangleBold } from "react-icons/pi";
import { dashArr } from "../../variables/style";
import { NormalBlock } from "./Blocks";

export function LineDashSetting({ style, updateStyle }) {
  const [dash, setDash] = useState(style.getStroke().getLineDash());
  const updateStrokeDash = useCallback(
    function updateStrokeColor(property) {
      style.getStroke().setLineDash(property);

      setDash(property);
      updateStyle(style);
    },
    [updateStyle, style]
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
