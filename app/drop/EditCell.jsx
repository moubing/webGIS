"use client";

import { useEffect, useState } from "react";

export function EditCell({ getValue, row, column, table }) {
  const initialState = getValue();
  const [value, setValue] = useState(initialState);
  useEffect(() => {
    setValue(initialState);
  }, [initialState]);
  return (
    <input
      className="w-full h-full px-2 py-1 text-slate-400 rounded-md bg-transparent "
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter")
          table.options.meta.updateData(row.index, column.id, value);
        if (e.key === "Escape") {
          setValue(initialState);
        }
      }}
    />
  );
}

export function MyBtn({ children, handleClick }) {
  return (
    <button onClick={handleClick} className="px-2 py-1 text-pink-300 ">
      {children}
    </button>
  );
}
