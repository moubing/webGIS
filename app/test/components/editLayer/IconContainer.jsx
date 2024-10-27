"use client";

import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

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
