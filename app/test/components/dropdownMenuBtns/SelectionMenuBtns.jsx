"use client";

import { MenuItem } from "@headlessui/react";
import { PiTable } from "react-icons/pi";
import { GrMapLocation } from "react-icons/gr";
import { IoShapesOutline } from "react-icons/io5";
import { MdOutlinePanToolAlt } from "react-icons/md";
import { TbZoomInArea } from "react-icons/tb";
import { FcStatistics } from "react-icons/fc";
import { AiOutlineClear } from "react-icons/ai";
import { FaBorderStyle } from "react-icons/fa";

export function SelectByAttributeBtn() {
  return (
    <MenuItem className="data-[focus]:bg-sky-200">
      <button
        className="flex items-center justify-between p-2 rounded-md w-full"
        onClick={() => {}}
      >
        <div className=" flex items-center gap-2">
          <PiTable className="size-5 text-sky-500" />
          <section>按属性选择</section>
        </div>
        <section>Ctrl + I</section>
      </button>
    </MenuItem>
  );
}
export function SelectByLocationBtn() {
  return (
    <MenuItem className="data-[focus]:bg-sky-200">
      <button
        className="flex items-center justify-between p-2 rounded-md w-full"
        onClick={() => {}}
      >
        <div className=" flex items-center gap-2">
          <GrMapLocation className="size-5 text-sky-500" />
          <section>按位置选择</section>
        </div>
        <section>Ctrl + I</section>
      </button>
    </MenuItem>
  );
}
export function SelectByGraphicsBtn() {
  return (
    <MenuItem className="data-[focus]:bg-sky-200">
      <button
        className="flex items-center justify-between p-2 rounded-md w-full"
        onClick={() => {}}
      >
        <div className=" flex items-center gap-2">
          <IoShapesOutline className="size-5 text-sky-500" />
          <section>按图形选择</section>
        </div>
        <section>Ctrl + I</section>
      </button>
    </MenuItem>
  );
}
export function ZoomToSelectedFeatureBtn() {
  return (
    <MenuItem className="data-[focus]:bg-sky-200">
      <button
        className="flex items-center justify-between p-2 rounded-md w-full"
        onClick={() => {}}
      >
        <div className=" flex items-center gap-2">
          <TbZoomInArea className="size-5 text-sky-500" />
          <section>缩放至选择要素</section>
        </div>
        <section>Ctrl + I</section>
      </button>
    </MenuItem>
  );
}
export function PanToSelectedFeatureBtn() {
  return (
    <MenuItem className="data-[focus]:bg-sky-200">
      <button
        className="flex items-center justify-between p-2 rounded-md w-full"
        onClick={() => {}}
      >
        <div className=" flex items-center gap-2">
          <MdOutlinePanToolAlt className="size-5 text-sky-500" />
          <section>平移至选择要素</section>
        </div>
        <section>Ctrl + I</section>
      </button>
    </MenuItem>
  );
}
export function StatisticsBtn() {
  return (
    <MenuItem className="data-[focus]:bg-sky-200">
      <button
        className="flex items-center justify-between p-2 rounded-md w-full"
        onClick={() => {}}
      >
        <div className=" flex items-center gap-2">
          <FcStatistics className="size-5 text-sky-500" />
          <section>统计</section>
        </div>
        <section>Ctrl + I</section>
      </button>
    </MenuItem>
  );
}
export function ClearSelectedFeatureBtn() {
  return (
    <MenuItem className="data-[focus]:bg-sky-200">
      <button
        className="flex items-center justify-between p-2 rounded-md w-full"
        onClick={() => {}}
      >
        <div className=" flex items-center gap-2">
          <AiOutlineClear className="size-5 text-sky-500" />
          <section>清空所选要素</section>
        </div>
        <section>Ctrl + I</section>
      </button>
    </MenuItem>
  );
}
export function SelectionStyleSettingBtn() {
  return (
    <MenuItem className="data-[focus]:bg-sky-200">
      <button
        className="flex items-center justify-between p-2 rounded-md w-full"
        onClick={() => {}}
      >
        <div className=" flex items-center gap-2">
          <FaBorderStyle className="size-5 text-sky-500" />
          <section>设置选中样式</section>
        </div>
        <section>Ctrl + I</section>
      </button>
    </MenuItem>
  );
}
