"use client";

import { useState } from "react";
import { RecordsContext, SetRecordsContext } from "../ctx/RecordsContext";

export function RecordProvider({ children }) {
  const [records, setRecords] = useState([]);

  return (
    <RecordsContext.Provider value={records}>
      <SetRecordsContext.Provider value={setRecords}>
        {children}
      </SetRecordsContext.Provider>
    </RecordsContext.Provider>
  );
}
