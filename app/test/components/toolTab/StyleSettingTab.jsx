"use client";

import { TabPanel } from "@headlessui/react";
import { CustomTab } from "../consoleTab/CustomTab";
import { DynamicStyleSetting } from "./DynamicStyleSetting";

export function StyleSettingTab() {
  return <CustomTab>样式设置</CustomTab>;
}

export function StyleSettingPanel({ payload }) {
  const StyleSetting = payload.component;
  return (
    <TabPanel className="relative overflow-auto flex-grow bg-gray-200">
      <StyleSetting
        style={payload.style}
        updateStyle={(style) => payload.layer.setStyle(style)}
      />
      <DynamicStyleSetting layer={payload.layer} />
    </TabPanel>
  );
}
