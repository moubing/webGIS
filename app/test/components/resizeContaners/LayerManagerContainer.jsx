"use client";

import { useContext } from "react";
import { LMConCtx } from "../../ctx/switchContainer";

export function LayerManagerContainer({ children }) {
  console.log("layer render");

  const layerManagerContainerState = useContext(LMConCtx);
  if (layerManagerContainerState) {
    return (
      <div className="h-full flex-grow-0 w-32 bg-indigo-200 relative z-50">
        {children}
      </div>
    );
  }
}
