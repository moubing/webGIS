"use client";

import { memo } from "react";
export const ToggleAllColumnsVisible = memo(function ToggleAllColumnsVisible({
  isAllVisible,
  table,
  handleAllToggle,
}) {
  return (
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={isAllVisible}
        onChange={() => {
          handleAllToggle(table);
        }}
        className="size-3"
      />
      显示所有列
    </label>
  );
});

export const ToggleColumnVisible = memo(function ToggleColumnVisible({
  isVisible,
  handlToggle,
  column,
}) {
  return (
    <>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={isVisible}
          onChange={() => {
            handlToggle(column);
          }}
          className="size-3"
        />
        <p>{column.id}</p>
      </div>
    </>
  );
});
