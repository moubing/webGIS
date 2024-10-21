"use client";

import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

// 这里有两个IconContainer组件
// 其实它们两个大差不差
// 就算是在padding和背景的透明度上有变化
// 第一个用在了EditBar组件中
// 第二个用在了ToolBar组件中
// todo 后面把他们统一起来

export function IconContainer({
  children,
  handler,
  isSelected = false,
  tooltip = "未知",
}) {
  const [isHover, setIsHover] = useState(false);
  return (
    <motion.div
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
      className={clsx(
        "p-2 hover:text-pink-500  bg-white text-2xl rounded-md shadow-md  relative",
        {
          "text-pink-500 z-50 ": isSelected,
          "text-sky-500 z-0": !isSelected,
        }
      )}
      onClick={handler}
    >
      <AnimatePresence>
        {isHover && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: 10 }}
            animate={{ opacity: 1, scale: 1, x: -8 }}
            exit={{ opacity: 0, scale: 0.5, x: -20 }}
            className="absolute bg-white select-none text-xs rounded-md shadow-md  -mt-10 w-max px-2 py-1 text-gray-500 font-bold"
          >
            {tooltip}
          </motion.div>
        )}
      </AnimatePresence>
      {isSelected && (
        <motion.div
          layoutId="outline"
          className="absolute inset-0 rounded-md outline-2 pointer-events-none outline-dashed outline-pink-500"
        />
      )}
      {children}
    </motion.div>
  );
}

export function IconContainer2({ children, handler }) {
  return (
    <div
      className="p-1 hover:text-pink-500 hover:scale-105 text-sky-500 bg-white/20 text-2xl rounded-md shadow-md backdrop-blur  "
      onClick={handler}
    >
      {children}
    </div>
  );
}
