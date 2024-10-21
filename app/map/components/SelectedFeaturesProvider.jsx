"use client";

import { useState } from "react";
import {
  SelectedFeaturesContext,
  SetSelectedFeaturesContext,
} from "../ctx/SelectedFeaturesContext";

export function SelectedFeaturesProvider({ children }) {
  const [selectedFeatures, setSelectedFeatures] = useState(null);

  return (
    <SelectedFeaturesContext.Provider value={selectedFeatures}>
      <SetSelectedFeaturesContext.Provider value={setSelectedFeatures}>
        {children}
      </SetSelectedFeaturesContext.Provider>
    </SelectedFeaturesContext.Provider>
  );
}
