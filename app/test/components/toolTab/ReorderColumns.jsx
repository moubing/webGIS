"use client";

import { Reorder } from "framer-motion";
import { useState } from "react";
import { ToggleColumnVisible } from "./ToggleVisible";

export function ReorderColumns({ table, handleToggle }) {
  const [columnOrder, setColumnsOrder] = useState(table.getState().columnOrder);
  return (
    <Reorder.Group
      axis="y"
      values={columnOrder}
      onReorder={(newOrder) => {
        table.setColumnOrder(newOrder);
        setColumnsOrder(newOrder);
      }}
      className="p-2 space-y-1"
    >
      {table.getAllLeafColumns().map((column, index) => (
        <Reorder.Item
          className="bg-white px-2 relative hover:z-50 z-0 py-0.5 rounded-md shadow-md flex items-center justify-between"
          key={column.id}
          value={column.id}
        >
          <ToggleColumnVisible
            isVisible={column.getIsVisible()}
            handlToggle={handleToggle}
            column={column}
          />
          <div>{index}</div>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}
