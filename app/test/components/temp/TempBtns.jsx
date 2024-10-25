"use client";

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
import clsx from "clsx";

export function TempBtns() {
  console.log("btns render");

  const layerManagerContainerState = useContext(LMConCtx);
  const setLayerManagerContainerState = useContext(SetLMConCtx);
  const mapContainerState = useContext(MapConCtx);
  const setMapContainerState = useContext(SetMapConCtx);
  const logContainerState = useContext(LogConCtx);
  const setLogContainerState = useContext(SetLogConCtx);
  const toolContainerState = useContext(ToolConCtx);
  const setToolContainerState = useContext(SetToolConCtx);
  const tipContainerState = useContext(TipConCtx);
  const setTipContainerState = useContext(SetTipConCtx);

  return (
    <div className="flex items-center gap-2 text-xs w-full h-full p-2 text-gray-600">
      <button
        className={clsx("px-2 py-1 rounded-md shadow-md", {
          "bg-pink-300": layerManagerContainerState,
          "bg-gray-200": !layerManagerContainerState,
        })}
        onClick={() => {
          setLayerManagerContainerState((preState) => !preState);
        }}
      >
        switch LayerManagerContainer
      </button>
      <button
        className={clsx("px-2 py-1 rounded-md shadow-md", {
          "bg-pink-300": mapContainerState,
          "bg-gray-200": !mapContainerState,
        })}
        onClick={() => {
          setMapContainerState((preState) => !preState);
        }}
      >
        switch MapContainer
      </button>
      <button
        className={clsx("px-2 py-1 rounded-md shadow-md", {
          "bg-pink-300": logContainerState,
          "bg-gray-200": !logContainerState,
        })}
        onClick={() => {
          setLogContainerState((preState) => !preState);
        }}
      >
        switch LogContainer
      </button>
      <button
        className={clsx("px-2 py-1 rounded-md shadow-md", {
          "bg-pink-300": toolContainerState,
          "bg-gray-200": !toolContainerState,
        })}
        onClick={() => {
          setToolContainerState((preState) => !preState);
        }}
      >
        switch ToolContainer
      </button>
      <button
        className={clsx("px-2 py-1 rounded-md shadow-md", {
          "bg-pink-300": tipContainerState,
          "bg-gray-200": !tipContainerState,
        })}
        onClick={() => {
          setTipContainerState((preState) => !preState);
        }}
      >
        switch TipContainer
      </button>
    </div>
  );
}
