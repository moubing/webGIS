import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { useState } from "react";
import { SourceList } from "./SourceList";
import { optionMap } from "../optionMap";
import { LoadFile } from "./LoadFile";
import { EmptyVectorLayer } from "./addLayer/EmptyVectorLayer";

// 有点累了今天就先到这里了
// 大概思路就是通过选择的sourceName使用两个Map
// 第一个map对应的是配置组件
// 第二个map对应的是添加图层的函数，这个函数给确定按钮用

// 算了直接就用一个map，里面就是一个对应的配置组件，添加图层的函数也直接写里面
// 当然还有写一些基础组件
// InputText --> 获取输入的字符串
// InputNumber --> 获取输入的数字
// CheckBoxMB --> 获取布尔值
// 它们应该有的props
// 1. initialState --> 初始值，value={state === undefined ? "" : state}
// 2. handler --> 提交值
// function handleLayerOption(e) {
//     setLayerOption({...layerOption, [e.target.name]: e.target.value})
// }
// function handleSourceOption(e) {
//     setSourceOption({...sourceOption, [e.target.name]: e.target.value})
// }
// 确定按钮的添加图层函数
// 首先的步骤是错误检查，看看必填项有没有填，没有填就出错误提示，其他的不管了
// 如果是xyz，就像下面这样
// const newLayer = new TileLayer(layerOption)
// const newSource = new XYZ(sourceOption)
// newLayer.setSource(newSource)
// 不用这样，我tag直接就在layerOption里面吧，第一个和第二个标签当做默认标签，所以我还...， 算了自定义标签还是以后再弄吧
//todo 实现自定义标签
// newlayer.set("tags", ['tile', 'XYZ'])

//todo 这里的handleClose属于props drill，后面看看是不是要使用context

//! 吃一堑长一智，向组件传递的函数如果需要参数一定要记得
//! typeScript就是干这个的

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
          <EmptyVectorLayer handleClose={handleClose} />
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
