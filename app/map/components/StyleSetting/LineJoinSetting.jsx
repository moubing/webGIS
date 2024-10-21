"use client";

import { useCallback, useContext, useState } from "react";
import { NormalBlock } from "./ColorBlocks";
import { StyleSettingContainer2 } from "./StyleSettingContainer";
import { Item } from "./TextItem";
import { LayerContext, StyleContext } from "../../ctx/LayerAndStyleContext";
import { bevel, miter, round } from "@/app/globalVarible";

export function LineJoinSetting() {
  const layer = useContext(LayerContext);
  const style = useContext(StyleContext);
  const [join, setJoin] = useState(style.getStroke().getLineJoin());
  const updateStrokeWidth = useCallback(
    function updateStrokeLineJoin(property) {
      style.getStroke().setLineJoin(property);

      setJoin(property);
      layer.setStyle(style);
    },
    [layer, style]
  );
  return (
    <StyleSettingContainer2 title={"描边连接"}>
      <NormalBlock
        handleClick={updateStrokeWidth}
        isSelected={join === round}
        property={round}
        layoutId={"join"}
        size={"w-14"}
      >
        <Item>{round}</Item>
      </NormalBlock>
      <NormalBlock
        handleClick={updateStrokeWidth}
        isSelected={join === miter}
        property={miter}
        size={"w-14"}
        layoutId={"join"}
      >
        <Item>{miter}</Item>
      </NormalBlock>
      <NormalBlock
        handleClick={updateStrokeWidth}
        isSelected={join === bevel}
        property={bevel}
        size={"w-14"}
        layoutId={"join"}
      >
        <Item>bevel</Item>
      </NormalBlock>
    </StyleSettingContainer2>
  );
}
