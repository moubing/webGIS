"use client";

import { useContext } from "react";
import { LogConCtx } from "../../ctx/switchContainer";

export function LogContainer({ children }) {
  console.log("log render");

  const logContainerState = useContext(LogConCtx);
  if (logContainerState) {
    return (
      <div className="flex-grow-0 h-32 bg-teal-200 relative z-50">
        {children}
      </div>
    );
  }
}
