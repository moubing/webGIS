"use client";

import { IconStyleSetting } from "./IconStyleSetting";
import { SizeSetting } from "./SizeSetting";
import { OpacitySetting } from "./OpacitySetting";

// 点的样式：
// 1. 大小
// 2. 透明度
// 3. 图标

export function PointStyleSetting() {
  return (
    <div>
      <p>还未完善</p>
      <IconStyleSetting />
      <SizeSetting />
      <OpacitySetting />
    </div>
  );
}
