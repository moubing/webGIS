"use client";

import { FillColorSetting, StrokeColorSetting } from "./ColorSetting";
import { WidthSetting } from "./WidthSetting";
import { LineCapSetting } from "./LineCapSetting";
import { LineJoinSetting } from "./LineJoinSetting";
import { LineDashSetting } from "./LineDashSetting";

// 多边形的样式：
// 1. 填充颜色
// 2. 轮廓线颜色
// 3. 轮廓线线宽
// 4. 轮廓线端点样式
// 5. 轮廓线连接
// 6. 轮廓线虚线
// 7. 填充颜色透明度
// 8. 轮廓线颜色透明度

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
