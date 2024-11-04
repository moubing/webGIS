"use client";

import { useMemo } from "react";

export function RangeFilter({ column }) {
  const columnFilterValue = column.getFilterValue();
  const min = Number(column.getFacetedMinMaxValues()?.[0] ?? "");
  const max = Number(column.getFacetedMinMaxValues()?.[1] ?? "");
  return (
    <div>
      <input
        type="number"
        min={min}
        max={max}
        value={columnFilterValue?.[0] ?? ""}
        onChange={(e) =>
          column.setFilterValue((old) => [e.target.value, old?.[1]])
        }
        placeholder={`Min ${
          column.getFacetedMinMaxValues()?.[0] !== undefined
            ? `(${column.getFacetedMinMaxValues()?.[0]})`
            : ""
        }`}
      />

      <input
        type="number"
        min={min}
        max={max}
        value={columnFilterValue?.[1] ?? ""}
        onChange={(e) =>
          column.setFilterValue((old) => [old?.[0], e.target.value])
        }
        placeholder={`Max ${
          column.getFacetedMinMaxValues()?.[1] !== undefined
            ? `(${column.getFacetedMinMaxValues()?.[1]})`
            : ""
        }`}
      />
    </div>
  );
}
export function TextFilter({ column }) {
  const columnFilterValue = column.getFilterValue();
  const sortedUniqueValues = useMemo(
    () => Array.from(column.getFacetedUniqueValues().keys()).sort(),
    [column]
  );
  return (
    <>
      {/* Autocomplete suggestions from faceted values feature */}
      <datalist id={column.id + "list"}>
        {sortedUniqueValues.map((value) => (
          <option value={value} key={value} />
        ))}
      </datalist>
      <input
        type="text"
        value={columnFilterValue ?? ""}
        onChange={(e) => column.setFilterValue(e.target.value)}
        placeholder={`Search... (${column.getFacetedUniqueValues().size})`}
        className="w-36 border shadow rounded"
        list={column.id + "list"}
      />
      <div className="h-1" />
    </>
  );
}

export function SelectFilter({ column }) {
  const columnFilterValue = column.getFilterValue();
  const sortedUniqueValues = useMemo(
    () => Array.from(column.getFacetedUniqueValues().keys()).sort(),
    [column]
  );
  return (
    <select
      onChange={(e) => column.setFilterValue(e.target.value)}
      value={columnFilterValue?.toString()}
    >
      <option value="">All</option>
      {sortedUniqueValues.map((value) => (
        //dynamically generated select options from faceted values feature
        <option value={value} key={value}>
          {value}
        </option>
      ))}
    </select>
  );
}
