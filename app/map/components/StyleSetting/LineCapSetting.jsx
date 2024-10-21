"use client";

import { useCallback, useContext, useState } from "react";
import { NormalBlock } from "./ColorBlocks";
import { StyleSettingContainer2 } from "./StyleSettingContainer";
import { Item } from "./TextItem";
import { LayerContext, StyleContext } from "../../ctx/LayerAndStyleContext";
import { butt, round, square } from "@/app/globalVarible";

export function LineCapSetting() {
  const layer = useContext(LayerContext);
  const style = useContext(StyleContext);
  const [cap, setCap] = useState(style.getStroke().getLineCap());
  const updateStrokeWidth = useCallback(
    function updateStrokeLineCap(property) {
      style.getStroke().setLineCap(property);

      setCap(property);
      layer.setStyle(style);
    },
    [layer, style]
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
