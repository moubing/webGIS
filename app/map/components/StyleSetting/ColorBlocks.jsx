"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { memo } from "react";
import { CgColorPicker } from "react-icons/cg";

export const NormalBlock = memo(function NormalBlock({
  handleClick,
  isSelected,
  property,
  layoutId,
  children,
  size = "w-6 h-6",
}) {
  return (
    <div
      onClick={() => {
        handleClick(property);
      }}
      className={clsx(
        `rounded-md shadow-sm flex items-center ${size} justify-center relative cursor-pointer  border-2 border-gray-200 `,
        {
          "z-50": isSelected,
          "z-0": !isSelected,
        }
      )}
    >
      {isSelected && (
        <motion.div
          layoutId={layoutId}
          className="absolute inset-0 rounded-md outline-offset-2 outline-2 pointer-events-none outline-dashed outline-pink-500"
        />
      )}
      {children}
    </div>
  );
});

export const ColorBlock = memo(function ColorBlock({
  handleClick,
  isSelected,
  color,
  bg,
  layoutId,
}) {
  return (
    <div
      onClick={() => {
        handleClick(color);
      }}
      className={clsx(
        `${bg} rounded-md shadow-sm size-6 relative cursor-pointer border-2 border-gray-200 `,
        {
          "z-50": isSelected,
          "z-0": !isSelected,
        }
      )}
    >
      {isSelected && (
        <motion.div
          layoutId={layoutId}
          className="absolute inset-0 rounded-md outline-offset-2 outline-2 pointer-events-none outline-dashed outline-pink-500"
        />
      )}
    </div>
  );
});
export const ColorInputBlock = memo(function ColorInputBlock({
  isSelected,
  children,
  layoutId,
}) {
  return (
    <div
      className={clsx(
        "rounded-md shadow-sm flex items-center justify-center size-6 relative bg-gradient-to-br from-pink-300 to-sky-300 cursor-pointer border-2 border-gray-200",
        {
          "z-50": isSelected,
          "z-0": !isSelected,
        }
      )}
    >
      {isSelected && (
        <motion.div
          layoutId={layoutId}
          className="absolute inset-0 rounded-md outline-offset-2 outline-2 pointer-events-none outline-dashed outline-pink-500"
        />
      )}
      <CgColorPicker className="size-5 text-pink-500" />
      {children}
    </div>
  );
});
