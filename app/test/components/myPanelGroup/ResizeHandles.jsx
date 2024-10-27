"use client";

import clsx from "clsx";
import { PanelResizeHandle } from "react-resizable-panels";

export function HorizontalHandle({ isDisabled = false }) {
  return (
    <PanelResizeHandle
      disabled={isDisabled}
      className={clsx({
        "relative w-1 h-full bg-pink-500 z-50 after:content-[''] after:absolute  after:-left-1 after:w-2 after:h-full after:hover:bg-sky-200 after:active:bg-sky-500 ":
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
        "relative h-1 w-full bg-pink-500 z-50 after:content-[''] after:absolute after:-top-1  after:h-2 after:w-full after:hover:bg-sky-200 after:active:bg-sky-500":
          !isDisabled,
        hidden: isDisabled,
      })}
    />
  );
}
