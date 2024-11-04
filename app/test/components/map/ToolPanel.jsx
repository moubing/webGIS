"use client";

import { useContext, useState, Fragment, useEffect } from "react";
import { ToolTabListContext } from "../../ctx/tabListContext";
import { TabGroup, TabList, TabPanels } from "@headlessui/react";

export function ToolPanel() {
  const toolTabList = useContext(ToolTabListContext);
  const initialIndex = toolTabList.length - 1;
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);

  useEffect(() => {
    setSelectedIndex(initialIndex);
  }, [initialIndex]);

  return (
    <TabGroup
      selectedIndex={selectedIndex}
      onChange={setSelectedIndex}
      className="w-full h-full  flex flex-col "
    >
      <TabList className="flex-grow-0">
        {toolTabList.map(({ Tab }, index) => (
          <Tab key={index} />
        ))}
      </TabList>
      <TabPanels as={Fragment}>
        {toolTabList.map(({ Panel, payload }, index) => (
          <Panel key={index} payload={payload} />
        ))}
      </TabPanels>
    </TabGroup>
  );
}
