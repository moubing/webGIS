"use client";

import clsx from "clsx";
import { PanelResizeHandle } from "react-resizable-panels";

export function HorizontalHandle({ isDisabled = false }) {
  return (
    <PanelResizeHandle
      disabled={isDisabled}
      className={clsx({
        "relative z-50 after:hover:bg-sky-200 after:active:bg-sky-500 after:content-[''] after:absolute after:w-2 after:h-full after:-left-1  ":
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
        "relative  z-50 after:hover:bg-sky-200 after:active:bg-sky-500 after:content-[''] after:absolute after:h-2 after:w-full after:-top-1 ":
          !isDisabled,
        hidden: isDisabled,
      })}
    />
  );
}
