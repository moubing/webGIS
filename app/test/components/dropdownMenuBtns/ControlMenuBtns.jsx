"use client";

import { MenuItem } from "@headlessui/react";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoCheckmark } from "react-icons/io5";

export function MousePositionBtn() {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <MenuItem className="data-[focus]:bg-sky-200">
      <button
        className="flex items-center justify-between p-2 rounded-md w-full"
        onClick={() => {
          setIsChecked((preState) => !preState);
        }}
      >
        <div className=" flex items-center gap-2">
          {isChecked ? (
            <IoCheckmark className=" size-5 text-sky-500" />
          ) : (
            <IoClose className=" size-5 text-red-500" />
          )}
          <section>鼠标位置</section>
        </div>
        <section>显示经纬度</section>
      </button>
    </MenuItem>
  );
}
export function AttributionBtn() {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <MenuItem className="data-[focus]:bg-sky-200">
      <button
        className="flex items-center justify-between p-2 rounded-md w-full"
        onClick={() => {
          setIsChecked((preState) => !preState);
        }}
      >
        <div className=" flex items-center gap-2">
          {isChecked ? (
            <IoCheckmark className=" size-5 text-sky-500" />
          ) : (
            <IoClose className=" size-5 text-red-500" />
          )}
          <section>归属标识</section>
        </div>
        <section>地图的相关信息</section>
      </button>
    </MenuItem>
  );
}
export function FullScreenBtn() {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <MenuItem className="data-[focus]:bg-sky-200">
      <button
        className="flex items-center justify-between p-2 rounded-md w-full"
        onClick={() => {
          setIsChecked((preState) => !preState);
        }}
      >
        <div className=" flex items-center gap-2">
          {isChecked ? (
            <IoCheckmark className=" size-5 text-sky-500" />
          ) : (
            <IoClose className=" size-5 text-red-500" />
          )}
          <section>全屏</section>
        </div>
        <section></section>
      </button>
    </MenuItem>
  );
}
export function OverviewMapBtn() {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <MenuItem className="data-[focus]:bg-sky-200">
      <button
        className="flex items-center justify-between p-2 rounded-md w-full"
        onClick={() => {
          setIsChecked((preState) => !preState);
        }}
      >
        <div className=" flex items-center gap-2">
          {isChecked ? (
            <IoCheckmark className=" size-5 text-sky-500" />
          ) : (
            <IoClose className=" size-5 text-red-500" />
          )}
          <section>缩略图</section>
        </div>
        <section></section>
      </button>
    </MenuItem>
  );
}
export function RotateBtn() {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <MenuItem className="data-[focus]:bg-sky-200">
      <button
        className="flex items-center justify-between p-2 rounded-md w-full"
        onClick={() => {
          setIsChecked((preState) => !preState);
        }}
      >
        <div className=" flex items-center gap-2">
          {isChecked ? (
            <IoCheckmark className=" size-5 text-sky-500" />
          ) : (
            <IoClose className=" size-5 text-red-500" />
          )}
          <section>旋转复位</section>
        </div>
        <section></section>
      </button>
    </MenuItem>
  );
}
export function ScaleLineBtn() {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <MenuItem className="data-[focus]:bg-sky-200">
      <button
        className="flex items-center justify-between p-2 rounded-md w-full"
        onClick={() => {
          setIsChecked((preState) => !preState);
        }}
      >
        <div className=" flex items-center gap-2">
          {isChecked ? (
            <IoCheckmark className=" size-5 text-sky-500" />
          ) : (
            <IoClose className=" size-5 text-red-500" />
          )}
          <section>比例尺</section>
        </div>
        <section></section>
      </button>
    </MenuItem>
  );
}
export function ZoomSliderBtn() {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <MenuItem className="data-[focus]:bg-sky-200">
      <button
        className="flex items-center justify-between p-2 rounded-md w-full"
        onClick={() => {
          setIsChecked((preState) => !preState);
        }}
      >
        <div className=" flex items-center gap-2">
          {isChecked ? (
            <IoCheckmark className=" size-5 text-sky-500" />
          ) : (
            <IoClose className=" size-5 text-red-500" />
          )}
          <section>缩放滑块</section>
        </div>
        <section></section>
      </button>
    </MenuItem>
  );
}
export function ZoomBtn() {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <MenuItem className="data-[focus]:bg-sky-200">
      <button
        className="flex items-center justify-between p-2 rounded-md w-full"
        onClick={() => {
          setIsChecked((preState) => !preState);
        }}
      >
        <div className=" flex items-center gap-2">
          {isChecked ? (
            <IoCheckmark className=" size-5 text-sky-500" />
          ) : (
            <IoClose className=" size-5 text-red-500" />
          )}
          <section>缩放按钮</section>
        </div>
        <section></section>
      </button>
    </MenuItem>
  );
}
