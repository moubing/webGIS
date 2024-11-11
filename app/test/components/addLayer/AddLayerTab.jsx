import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { useState } from "react";
import { SourceList } from "./SupportSourceList";
import { optionMap } from "../../lib/optionMap";
import { LoadFile } from "./LoadFile";
import { EmptyVectorLayer } from "./EmptyVectorLayer";

export function AddLayerTab({ handleClose }) {
  const [selectedSourceName, setSelectedSourceName] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isDisable, setIsDisable] = useState(true);

  let OptionComponent = null;
  if (selectedSourceName && optionMap.has(selectedSourceName)) {
    OptionComponent = optionMap.get(selectedSourceName);
  }

  return (
    <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
      <TabList className="p-2 space-x-3 border-b-2 ">
        <MyTab isDisable={false}>本地文件</MyTab>
        <MyTab isDisable={false}>URL</MyTab>
        <MyTab isDisable={false}>快捷创建</MyTab>
        <MyTab isDisable={isDisable}>配置</MyTab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <LoadFile handleClose={handleClose} />
        </TabPanel>
        <TabPanel>
          <SourceList
            handleSelect={(sourceName) => {
              setSelectedSourceName(sourceName);
              setSelectedIndex(3);
              setIsDisable(false);
            }}
          />
        </TabPanel>
        <TabPanel>
          {/* <EmptyVectorLayer handleClose={handleClose} /> */}
          <div>none</div>
        </TabPanel>
        <TabPanel>
          {selectedSourceName && <OptionComponent handleClose={handleClose} />}
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
}

function MyTab({ children, isDisable }) {
  return (
    <Tab
      disabled={isDisable}
      className="px-2 py-1 rounded-md shadow-md bg-white data-[selected]:bg-sky-500 data-[selected]:text-white disabled:bg-gray-300"
    >
      {children}
    </Tab>
  );
}
