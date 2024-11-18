"use client";

import { useCallback, useState } from "react";
import { NormalBlock } from "./Blocks";
import { StyleSettingContainer2 } from "./StyleSettingContainer";
import { Item } from "./TextItem";
import { butt, round, square } from "../../variables/style";

export function LineCapSetting({ style, updateStyle }) {
  const [cap, setCap] = useState(style.getStroke().getLineCap());
  const updateStrokeWidth = useCallback(
    function updateStrokeLineCap(property) {
      style.getStroke().setLineCap(property);

      setCap(property);
      updateStyle(style);
    },
    [updateStyle, style]
  );
  return (
    <StyleSettingContainer2 title={"描边线帽"}>
      <NormalBlock
        handleClick={updateStrokeWidth}
        isSelected={cap === round}
        property={round}
        layoutId={"cap"}
        size={"w-14"}
      >
        <Item>{round}</Item>
      </NormalBlock>
      <NormalBlock
        handleClick={updateStrokeWidth}
        isSelected={cap === butt}
        property={butt}
        size={"w-14"}
        layoutId={"cap"}
      >
        <Item>{butt}</Item>
      </NormalBlock>
      <NormalBlock
        handleClick={updateStrokeWidth}
        isSelected={cap === square}
        property={square}
        size={"w-14"}
        layoutId={"cap"}
      >
        <Item>{square}</Item>
      </NormalBlock>
    </StyleSettingContainer2>
  );
}
