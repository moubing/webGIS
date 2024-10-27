"use client";

import { useState } from "react";
import {
  RecordsContext,
  SetRecordsContext,
  ResultsContext,
  SetResultsContext,
} from "../../ctx/SearchContext";

export function SearchProvider({ children }) {
  const [records, setRecords] = useState([]);
  const [results, setResults] = useState([]);

  return (
    <RecordsContext.Provider value={records}>
      <SetRecordsContext.Provider value={setRecords}>
        <ResultsContext.Provider value={results}>
          <SetResultsContext.Provider value={setResults}>
            {children}
          </SetResultsContext.Provider>
        </ResultsContext.Provider>
      </SetRecordsContext.Provider>
    </RecordsContext.Provider>
  );
}
