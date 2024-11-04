"use client";

import { TabPanel } from "@headlessui/react";
import { CustomTab } from "./CustomTab";
import { memo, useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  TableCell,
  TableRow,
  TableHeaderCell,
  TableHeaderRow,
} from "./TableComponents";
import { strokeColor } from "../../variables/style";
import {
  FaArrowDownUpAcrossLine,
  FaArrowsDownToLine,
  FaArrowsUpToLine,
} from "react-icons/fa6";
import clsx from "clsx";
import { TablePagination } from "./TablePagination";
import { selectedStyle } from "../../lib/createStyle";

const columnHelper = createColumnHelper();

export function AttributeTableTab() {
  return <CustomTab>属性表</CustomTab>;
}

export const AttributeTablePanel = memo(function AttributeTablePanel({ data }) {
  const [tableData, setData] = useState(data);
  const [columns] = useState(() => {
    const selecteColumn = [
      {
        id: "select",
        header: ({ table, column }) => (
          <div style={{ width: column.getSize() }}>
            <input
              className="size-4"
              type="checkbox"
              checked={table.getIsAllRowsSelected()}
              onChange={(e) => {
                const toggleHanlder = table.getToggleAllRowsSelectedHandler();
                toggleHanlder(e);
                if (e.target.checked === true) {
                  data.forEach((row) => {
                    row.feature.setStyle(selectedStyle);
                  });
                } else {
                  data.forEach((row) => {
                    row.feature.setStyle(null);
                  });
                }
              }}
            />
          </div>
        ),
        cell: ({ row, column }) => (
          <div style={{ width: column.getSize() }}>
            <input
              className="size-4"
              type="checkbox"
              checked={row.getIsSelected()}
              disabled={!row.getCanSelect()}
              onChange={(e) => {
                const checkHandler = row.getToggleSelectedHandler();
                checkHandler(e);
                if (e.target.checked === true) {
                  row.original.feature.setStyle(selectedStyle);
                } else {
                  row.original.feature.setStyle(null);
                }
              }}
            />
          </div>
        ),
        size: 30,
      },
    ];
    const keys = Object.keys(data[0]).filter((key) => key !== "feature");
    return selecteColumn.concat(
      keys.map((key) => {
        return columnHelper.accessor(key, {
          cell: (props) => <>{props.getValue()}</>,
        });
      })
    );
  });

  const table = useReactTable({
    data: tableData,
    columns: columns,
    initialState: {
      columnOrder: columns.map((column) => column.id || column.accessorKey),
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    columnResizeMode: "onChange",
    enableRowSelection: true,
  });

  return (
    <TabPanel className="relative overflow-auto flex-grow shadow-lg focus:outline-none">
      <TablePagination table={table} />
      <div style={{ width: table.getTotalSize() }}>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableHeaderRow key={headerGroup.id}>
            {headerGroup.headers.map((header, index) => (
              <TableHeaderCell
                width={header.column.getSize() + 40}
                key={header.id}
                color={strokeColor[index % 7]}
              >
                {header.id === "select" ? (
                  flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )
                ) : (
                  <div
                    className={clsx("flex gap-2 items-center", {
                      "cursor-pointer select-none": header.column.getCanSort(),
                      "": !header.column.getCanSort(),
                    })}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {header.column.getIsSorted() === "asc" ? (
                      <FaArrowsUpToLine />
                    ) : header.column.getIsSorted() === "desc" ? (
                      <FaArrowsDownToLine />
                    ) : (
                      <FaArrowDownUpAcrossLine />
                    )}
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </div>
                )}
                <div
                  onMouseDown={header.getResizeHandler()}
                  onTouchStart={header.getResizeHandler()}
                  className={clsx(
                    "absolute top-0 right-0 h-full w-1 cursor-pointer rounded-md hover:bg-sky-500",
                    {
                      "bg-sky-500": header.column.getIsResizing(),
                      "bg-sky-200": !header.column.getIsResizing(),
                    }
                  )}
                />
              </TableHeaderCell>
            ))}
          </TableHeaderRow>
        ))}
        {table.getRowModel().rows.map((row) => (
          <TableRow key={row.id}>
            {row.getVisibleCells().map((cell, index) => (
              <TableCell
                key={cell.id}
                width={cell.column.getSize() + 40}
                color={strokeColor[index % 7]}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </div>
    </TabPanel>
  );
});
