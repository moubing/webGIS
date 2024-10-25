"use client";

import { MenuItem } from "@headlessui/react";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoCheckmark } from "react-icons/io5";

export function DblClickDragZoomBtn() {
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
          <section>双击拖动缩放</section>
        </div>
        <section>双击 + 拖动</section>
      </button>
    </MenuItem>
  );
}
export function DoubleClickZoomBtn() {
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
          <section>双击放大</section>
        </div>
        <section>双击</section>
      </button>
    </MenuItem>
  );
}
export function KeyboardPanBtn() {
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
          <section>键盘平移</section>
        </div>
        <section>地图获得焦点</section>
      </button>
    </MenuItem>
  );
}
export function KeyboardZoomBtn() {
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
          <section>键盘缩放</section>
        </div>
        <section>地图获得焦点</section>
      </button>
    </MenuItem>
  );
}
export function LinkBtn() {
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
          <section>视图链接</section>
        </div>
        <section></section>
      </button>
    </MenuItem>
  );
}
export function MouseWheelZoomBtn() {
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
          <section>滚动缩放</section>
        </div>
        <section>鼠标滚轮</section>
      </button>
    </MenuItem>
  );
}
export function DragZoomBtn() {
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
          <section>拉框放大</section>
        </div>
        <section>Shift + 拖动</section>
      </button>
    </MenuItem>
  );
}
export function DragPanBtn() {
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
          <section>拖动平移</section>
        </div>
        <section>拖动</section>
      </button>
    </MenuItem>
  );
}
export function DragRotateAndZoomBtn() {
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
          <section>拖动旋转缩放</section>
        </div>
        <section>Alt + Shift + 拖动</section>
      </button>
    </MenuItem>
  );
}
export function DragRotateBtn() {
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
          <section>拖动旋转</section>
        </div>
        <section>Ctrl + 拖动</section>
      </button>
    </MenuItem>
  );
}
