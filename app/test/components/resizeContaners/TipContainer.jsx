"use client";

import { useContext } from "react";
import { TipConCtx } from "../../ctx/switchContainer";

export function TipContainer({ children }) {
  console.log("tip render");
  const tipContainerState = useContext(TipConCtx);
  if (tipContainerState) {
    return (
      <div className="flex-grow-0 h-6 bg-sky-200 relative z-30">{children}</div>
    );
  }
}
