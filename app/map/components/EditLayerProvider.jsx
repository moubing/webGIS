"use client";

import { useState } from "react";
import { EditLayerContext, SetEditLayerContext } from "../ctx/EditLayerContext";

export function EditLayerProvider({ children }) {
  const [editLayer, setEditlayer] = useState(null);

  return (
    <EditLayerContext.Provider value={editLayer}>
      <SetEditLayerContext.Provider value={setEditlayer}>
        {children}
      </SetEditLayerContext.Provider>
    </EditLayerContext.Provider>
  );
}
