"use client";

import { FillColorSetting, StrokeColorSetting } from "./ColorSetting";
import { WidthSetting } from "./WidthSetting";
import { LineCapSetting } from "./LineCapSetting";
import { LineJoinSetting } from "./LineJoinSetting";
import { LineDashSetting } from "./LineDashSetting";

export function PolygonStyleSetting() {
  return (
    <div>
      <FillColorSetting />
      <StrokeColorSetting />
      <WidthSetting />
      <LineCapSetting />
      <LineJoinSetting />
      <LineDashSetting />
    </div>
  );
}
