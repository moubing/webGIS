"use client";

import { useContext } from "react";
import { SelectedFeaturesContext } from "../ctx/SelectedFeaturesContext";
import { motion, AnimatePresence, useDragControls } from "framer-motion";

// 这里有待改进的地方
// 1. dragConstraints是自己硬编码的 --> 使用一个ref来改进
// 2. 表的样式

// todo 这里的表显示也有点问题，就是如果feature没有name字段就没有key，就会报错
// todo 我这里只是暂时处理了一下，如果没有name字段，就使用index 2024/10/20 17:19

export function FeaturesPanel() {
  const selectedFeatures = useContext(SelectedFeaturesContext);
  const dragcontrol = useDragControls();
  return (
    <AnimatePresence>
      {selectedFeatures && selectedFeatures.length !== 0 && (
        <motion.div
          drag
          dragListener={false}
          dragControls={dragcontrol}
          dragConstraints={{ right: 100, top: 0, bottom: 300, left: -1400 }}
          dragTransition={{ bounceStiffness: 100, bounceDamping: 5, power: 0 }}
          initial={{ y: 400, opacity: 0, scale: 0.1 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 400, opacity: 0, scale: 0.1 }}
          className="fixed top-16 right-8 bg-white/50 backdrop-blur pb-4 rounded-lg  "
        >
          <div
            className="flex items-center justify-between px-4 py-2 font-bold text-xl text-pink-500 hover:cursor-move "
            onPointerDown={(e) => {
              dragcontrol.start(e);
            }}
          >
            <p className=" select-none">要素属性表</p>
            <p className="select-none text-xs">
              已选：
              <span className="text-sky-500">{selectedFeatures.length}</span>
              个要素
            </p>
          </div>

          <motion.div className="overflow-auto space-y-2  p-4 pt-1 min-w-80 max-h-[400px]">
            {selectedFeatures.map((feature, index) => (
              <FeatureTable
                key={feature.get("name") || index}
                feature={feature.getProperties()}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function FeatureTable({ feature }) {
  const keys = Object.keys(feature);
  if (keys.length === 1 && keys[0] === "geometry") {
    return (
      <p className="shadow-lg rounded-md overflow-hidden outline-dashed outline-2 outline-pink-500 px-2 py-1 text-center text-gray-700">
        该要素暂无属性
      </p>
    );
  }
  return (
    <div className="shadow-lg rounded-md overflow-hidden outline-dashed outline-2 outline-pink-500">
      {Object.entries(feature).map(([key, value]) => (
        <FeatrueRecord key={key} myKey={key} value={value} />
      ))}
    </div>
  );
}

function FeatrueRecord({ myKey, value }) {
  let myValue;
  if (typeof value === "object") {
    if (Array.isArray(value) === true) {
      myValue = value.join();
    } else {
      return null;
    }
  } else {
    myValue = value.toString();
  }

  return (
    <div className="flex items-center justify-between p-2 odd:bg-gray-100 even:bg-slate-200 hover:bg-sky-200 ">
      <p className="text-sky-500">{myKey}</p>
      <p className="text-gray-700">{myValue}</p>
    </div>
  );
}
