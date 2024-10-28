"use client";

import clsx from "clsx";
import { PanelResizeHandle } from "react-resizable-panels";

export function HorizontalHandle({ isDisabled = false }) {
  return (
    <PanelResizeHandle
      disabled={isDisabled}
      className={clsx({
        "relative w-2 h-full bg-transparent z-50 hover:bg-sky-200 active:bg-sky-500  ":
          !isDisabled,
        hidden: isDisabled,
      })}
    />
  );
}
export function VerticalHandle({ isDisabled = false }) {
  return (
    <PanelResizeHandle
      disabled={isDisabled}
      className={clsx({
        "relative h-2 w-full bg-transparent z-50 hover:bg-sky-200 active:bg-sky-500 ":
          !isDisabled,
        hidden: isDisabled,
      })}
    />
  );
}
