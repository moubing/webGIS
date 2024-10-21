"use client";

import { StrokeColorSetting } from "./ColorSetting";
import { WidthSetting } from "./WidthSetting";
import { LineCapSetting } from "./LineCapSetting";
import { LineJoinSetting } from "./LineJoinSetting";
import { LineDashSetting } from "./LineDashSetting";

export function LineStyleSetting() {
  return (
    <div>
      <StrokeColorSetting />
      <WidthSetting />
      <LineCapSetting />
      <LineJoinSetting />
      <LineDashSetting />
    </div>
  );
}
