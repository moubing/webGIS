"use client";

import { IoCheckmark } from "react-icons/io5";
import { useContext } from "react";
import {
  LMConCtx,
  LogConCtx,
  MapConCtx,
  SetLMConCtx,
  SetLogConCtx,
  SetMapConCtx,
  SetTipConCtx,
  SetToolConCtx,
  TipConCtx,
  ToolConCtx,
} from "../../ctx/switchContainer";
import { MenuItem } from "@headlessui/react";
import { IoClose } from "react-icons/io5";

export function LayerBtn() {
  const layerManagerContainerState = useContext(LMConCtx);
  const setLayerManagerContainerState = useContext(SetLMConCtx);
  return (
    <MenuItem className="data-[focus]:bg-sky-200">
      <button
        className="flex items-center justify-between p-2 rounded-md w-full"
        onClick={() => {
          setLayerManagerContainerState((preState) => !preState);
        }}
      >
        <div className=" flex items-center gap-2">
          {layerManagerContainerState ? (
            <IoCheckmark className=" size-5 text-sky-500" />
          ) : (
            <IoClose className=" size-5 text-red-500" />
          )}
          <section>图层管理器</section>
        </div>
        <section>Ctrl + I</section>
      </button>
    </MenuItem>
  );
}
export function MapBtn() {
  const mapContainerState = useContext(MapConCtx);
  const setMapContainerState = useContext(SetMapConCtx);
  return (
    <MenuItem className="data-[focus]:bg-sky-200">
      <button
        className="flex items-center justify-between p-2 rounded-md w-full "
        onClick={() => {
          setMapContainerState((preState) => !preState);
        }}
      >
        <div className=" flex items-center gap-2">
          {mapContainerState ? (
            <IoCheckmark className=" size-5 text-sky-500" />
          ) : (
            <IoClose className=" size-5 text-red-500" />
          )}
          <section>地图容器</section>
        </div>
        <section>Alt + I</section>
      </button>
    </MenuItem>
  );
}
export function LogBtn() {
  const logContainerState = useContext(LogConCtx);
  const setLogContainerState = useContext(SetLogConCtx);
  return (
    <MenuItem className="data-[focus]:bg-sky-200">
      <button
        className="flex items-center justify-between p-2 rounded-md w-full"
        onClick={() => {
          setLogContainerState((preState) => !preState);
        }}
      >
        <div className=" flex items-center gap-2">
          {logContainerState ? (
            <IoCheckmark className=" size-5 text-sky-500" />
          ) : (
            <IoClose className=" size-5 text-red-500" />
          )}
          <section>控制台</section>
        </div>
        <section>Ctrl + Shift + I</section>
      </button>
    </MenuItem>
  );
}
export function ToolBtn() {
  const toolContainerState = useContext(ToolConCtx);
  const setToolContainerState = useContext(SetToolConCtx);
  return (
    <MenuItem className="data-[focus]:bg-sky-200">
      <button
        className="flex items-center justify-between p-2 rounded-md w-full "
        onClick={() => {
          setToolContainerState((preState) => !preState);
        }}
      >
        <div className=" flex items-center gap-2">
          {toolContainerState ? (
            <IoCheckmark className=" size-5 text-sky-500" />
          ) : (
            <IoClose className=" size-5 text-red-500" />
          )}
          <section>工具栏</section>
        </div>
        <section>Ctrl + K</section>
      </button>
    </MenuItem>
  );
}
export function TipBtn() {
  const tipContainerState = useContext(TipConCtx);
  const setTipContainerState = useContext(SetTipConCtx);
  return (
    <MenuItem className="data-[focus]:bg-sky-200">
      <button
        className="flex items-center justify-between p-2 rounded-md w-full "
        onClick={() => {
          setTipContainerState((preState) => !preState);
        }}
      >
        <div className=" flex items-center gap-2">
          {tipContainerState ? (
            <IoCheckmark className=" size-5 text-sky-500" />
          ) : (
            <IoClose className=" size-5 text-red-500" />
          )}
          <section>状态栏</section>
        </div>
        <section>Ctrl + J</section>
      </button>
    </MenuItem>
  );
}
