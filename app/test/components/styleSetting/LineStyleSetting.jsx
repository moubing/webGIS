"use client";

import { StrokeColorSetting } from "./ColorSetting";
import { WidthSetting } from "./WidthSetting";
import { LineCapSetting } from "./LineCapSetting";
import { LineJoinSetting } from "./LineJoinSetting";
import { LineDashSetting } from "./LineDashSetting";

export function LineStyleSetting({ style, updateStyle }) {
  return (
    <div className=" bg-white">
      <StrokeColorSetting style={style} updateStyle={updateStyle} />
      <WidthSetting style={style} updateStyle={updateStyle} />
      <LineCapSetting style={style} updateStyle={updateStyle} />
      <LineJoinSetting style={style} updateStyle={updateStyle} />
      <LineDashSetting style={style} updateStyle={updateStyle} />
    </div>
  );
}
