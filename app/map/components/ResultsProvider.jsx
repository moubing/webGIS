"use client";

import { useState } from "react";
import { ResultsContext, SetResultsContext } from "../ctx/RecordsContext";

export function ResultProvider({ children }) {
  const [results, setResults] = useState([]);

  return (
    <ResultsContext.Provider value={results}>
      <SetResultsContext.Provider value={setResults}>
        {children}
      </SetResultsContext.Provider>
    </ResultsContext.Provider>
  );
}
