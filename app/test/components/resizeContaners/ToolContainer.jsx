"use client";

import { useContext } from "react";
import { ToolConCtx } from "../../ctx/switchContainer";

export function ToolContainer({ children }) {
  console.log("tool render");

  const toolContainerState = useContext(ToolConCtx);
  if (toolContainerState) {
    return (
      <div className="h-full flex-grow-0 w-64 bg-yellow-200 relative z-30">
        {children}
      </div>
    );
  }
}
