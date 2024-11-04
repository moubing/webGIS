"use client";

import { TabGroup, TabList, TabPanels } from "@headlessui/react";
import { Fragment, useContext, useEffect, useState } from "react";
import { TabListContext } from "../../ctx/tabListContext";

//todo 这里的key设置为index，这里需要修改

export function Console() {
  const tabList = useContext(TabListContext);
  const initialIndex = tabList.length - 1;
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);

  useEffect(() => {
    setSelectedIndex(initialIndex);
  }, [initialIndex]);

  return (
    <TabGroup
      selectedIndex={selectedIndex}
      onChange={setSelectedIndex}
      className="w-full h-full  flex flex-col"
    >
      <TabList className="flex-grow-0">
        {tabList.map(({ Tab }, index) => (
          <Tab key={index} />
        ))}
      </TabList>
      <TabPanels as={Fragment}>
        {tabList.map(({ Panel, data }, index) => (
          <Panel key={index} data={data} />
        ))}
      </TabPanels>
    </TabGroup>
  );
}
