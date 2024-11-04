"use client";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFacetedMinMaxValues,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { memo, useState } from "react";
import DATA from "./data";
import clsx from "clsx";
import { EditCell } from "./EditCell";
import { RangeFilter, SelectFilter, TextFilter } from "./Filter";

const columnHelper = createColumnHelper();

const columns = [
  {
    id: "select",
    header: ({ table, column }) => (
      <div style={{ width: column.getSize() }}>
        <input
          type="checkbox"
          checked={table.getIsAllRowsSelected()}
          onChange={table.getToggleAllRowsSelectedHandler()}
        />
      </div>
    ),
    cell: ({ row, column }) => (
      <div style={{ width: column.getSize() }}>
        <input
          type="checkbox"
          checked={row.getIsSelected()}
          disabled={!row.getCanSelect()}
          onChange={row.getToggleSelectedHandler()}
        />
      </div>
    ),
    size: 10,
  },
  {
    accessorKey: "status.name",
    header: "Status",
    cell: (props) => <>{props.getValue() || "none"}</>,
    enableSorting: true,
    meta: {
      filterVariant: "select",
    },
    size: 200,
  },
  columnHelper.accessor("task", {}),
  {
    accessorKey: "due",
    cell: (props) => (
      <>{props.getValue()?.toLocaleTimeString() ?? "none time"}</>
    ),
    enableColumnFilter: false,
  },
  {
    accessorKey: "notes",
    header: "Notes",
    cell: (props) => <>{props.getValue() || "none notes"}</>,
  },
  columnHelper.accessor("num", {
    header: "Number",
    cell: (props) => <>{props.getValue() || 999}</>,
    meta: {
      filterVariant: "range",
    },
  }),
];

export function Table() {
  const [data, setData] = useState(DATA);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [columnOrder, setColumnOrder] = useState([]);
  const [columnPinning, setColumnPinning] = useState({});
  const [columnFilters, setColumnFilters] = useState([]);
  const [sorting, setSorting] = useState([]);
  const [rowSelection, setRowSelection] = useState({});
  const table = useReactTable({
    data,
    columns,
    state: {
      columnOrder,
      columnVisibility,
      columnPinning,
      columnFilters,
      sorting,
      rowSelection,
    },

    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    onColumnOrderChange: setColumnOrder,
    onColumnVisibilityChange: setColumnVisibility,
    onColumnPinningChange: setColumnPinning,
    onSortingChange: setSorting,
    onRowSelectionChange: setRowSelection,
    columnResizeMode: "onChange",
    enableRowSelection: true,

    meta: {
      updateData: (rowIndex, columnId, value) =>
        setData((preData) =>
          preData.map((row, index) =>
            rowIndex === index
              ? {
                  ...row,
                  [columnId]: value,
                }
              : row
          )
        ),
    },
  });
  table.getToggleAllRowsSelectedHandler();
  return (
    <div style={{ width: "100%" }}>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <TableCell width={header.getSize()} key={header.id}>
              <div
                className={clsx({
                  "cursor-pointer select-none": header.column.getCanSort(),
                  "": !header.column.getCanSort(),
                })}
                onClick={header.column.getToggleSortingHandler()}
              >
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
                {{
                  asc: " 🔼",
                  desc: " 🔽",
                }[header.column.getIsSorted()] ?? null}
              </div>
              {/* <div>
                {header.column.getIsFirstColumn("center") ? (
                  <MyBtn handleClick={() => {}}>{"x"}</MyBtn>
                ) : (
                  <MyBtn
                    handleClick={() => {
                      const cur = header.column.getIndex("center");
                      const newColumnOrder = [...columnOrder];
                      newColumnOrder[cur - 1] = columnOrder[cur];
                      newColumnOrder[cur] = columnOrder[cur - 1];
                      table.setColumnOrder(newColumnOrder);
                    }}
                  >
                    {"<="}
                  </MyBtn>
                )}
                {header.column.getIsLastColumn("center") ? (
                  <MyBtn>{"x"}</MyBtn>
                ) : (
                  <MyBtn
                    handleClick={() => {
                      const cur = header.column.getIndex("center");
                      const newColumnOrder = [...columnOrder];
                      newColumnOrder[cur + 1] = columnOrder[cur];
                      newColumnOrder[cur] = columnOrder[cur + 1];
                      table.setColumnOrder(newColumnOrder);
                    }}
                  >
                    {"=>"}
                  </MyBtn>
                )}
              </div> */}
              {header.column.getCanFilter() ? (
                <div>
                  {header.column.columnDef.meta?.filterVariant === "range" ? (
                    <RangeFilter column={header.column} />
                  ) : header.column.columnDef.meta?.filterVariant ===
                    "select" ? (
                    <SelectFilter column={header.column} />
                  ) : (
                    <TextFilter column={header.column} />
                  )}
                </div>
              ) : null}
              <div
                onMouseDown={header.getResizeHandler()}
                onTouchStart={header.getResizeHandler()}
                className={clsx(
                  "absolute top-0 -right-1 h-full w-2 cursor-col-resize hover:bg-sky-500 ",
                  {
                    "bg-pink-500": header.column.getIsResizing(),
                    "bg-transparent": !header.column.getIsResizing(),
                  }
                )}
              />
            </TableCell>
          ))}
        </TableRow>
      ))}
      {table.getRowModel().rows.map((row) => (
        <TableRow key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <TableCell width={cell.column.getSize()} key={cell.id}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </TableCell>
          ))}
        </TableRow>
      ))}
      <div>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={table.getIsAllColumnsVisible()}
            onChange={table.getToggleAllColumnsVisibilityHandler()}
          />
          toggle all columns
        </label>
      </div>
      <div className="flex items-center gap-2">
        <button
          className="p-1 rounded border"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {"<<"}
        </button>
        <button
          className="p-1 rounded border"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<"}
        </button>
        <button
          className="p-1 rounded border"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {">"}
        </button>
        <button
          className="p-1 rounded border"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {">>"}
        </button>
        <input
          type="number"
          defaultValue={table.getState().pagination.pageIndex + 1}
          onChange={(e) => {
            const pageIndex = e.target.value ? Number(e.target.value) - 1 : 0;
            table.setPageIndex(pageIndex);
          }}
        />
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </select>
        <div>{table.getPrePaginationRowModel().rows.length}</div>
        <div>{`current page: ${
          table.getState().pagination.pageIndex + 1
        }`}</div>
      </div>
      {table.getAllLeafColumns().map((column) => (
        <div key={column.id}>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={column.getIsVisible()}
              onChange={column.getToggleVisibilityHandler()}
            />
            <p>{column.id}</p>
          </label>
        </div>
      ))}
    </div>
  );
}

const TableRow = memo(function TableRow({ children }) {
  return (
    <div className="bg-sky-200 flex hover:bg-pink-500  min-w-fit ">
      {children}
    </div>
  );
});

const TableCell = memo(function TableCell({ children, width }) {
  return (
    <div style={{ width }} className="flex relative truncate hover:z-50 p-1">
      {children}
    </div>
  );
});
