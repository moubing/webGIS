"use client";

import Image from "next/image";
import { NormalBlock } from "./ColorBlocks";
import { StyleSettingContainer } from "./StyleSettingContainer";
import { useCallback, useContext, useState } from "react";
import { LayerContext, StyleContext } from "../../ctx/LayerAndStyleContext";

const iconList = [
  "icons/点.png",
  "icons/餐厅.png",
  "icons/飞机场.png",
  "icons/学校.png",
  "icons/酒店.png",
  "icons/公交站点.png",
  "icons/电力设施.png",
  "icons/火车站.png",
  "icons/消防.png",
  "icons/公园.png",
  "icons/预警.png",
  "icons/次生灾害.png",
  "icons/地震.png",
];

export function IconStyleSetting() {
  const layer = useContext(LayerContext);
  const style = useContext(StyleContext);
  const iconSrc = useState(style.getImage().getSrc());

  return <StyleSettingContainer title={"图标选择"}></StyleSettingContainer>;
}
