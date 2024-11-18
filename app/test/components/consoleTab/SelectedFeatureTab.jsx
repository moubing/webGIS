"use client";

import { TabPanel } from "@headlessui/react";
import { CustomTab } from "./CustomTab";
import { TempFallback } from "../temp/TempFallback";
import { memo, useContext, useState } from "react";
import { SelectedFeaturesContext } from "../../ctx/LayerContext";
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

const columnHelper = createColumnHelper();

export function SelectedFeatureTab() {
  return <CustomTab>已选要素</CustomTab>;
}

export function TransitionPanel() {
  const data = useContext(SelectedFeaturesContext);
  if (data) {
    return <SelectedFeaturePanel data={data} />;
  } else {
    return (
      <TabPanel className="w-full h-full p-5 focus:outline-none">
        <TempFallback content={"暂无选中的要素"} />
      </TabPanel>
    );
  }
}

const SelectedFeaturePanel = memo(function SelectedFeaturePanel({ data }) {
  const [columns] = useState(() => {
    const keys = Object.keys(data[0]).filter((key) => key !== "feature");
    return keys.map((key) => {
      return columnHelper.accessor(key, {
        cell: (props) => <>{props.getValue()}</>,
      });
    });
  });

  const [sorting, setSorting] = useState([]);
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      rowSelection,
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    onRowSelectionChange: setRowSelection,
    columnResizeMode: "onChange",
    enableRowSelection: true,
  });

  return (
    <TabPanel className="relative overflow-auto flex-grow rounded-lg shadow-lg focus:outline-none">
      <TablePagination table={table} isShowAdvance={false} />
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
                    "absolute top-0 right-1 h-full w-1 cursor-pointer rounded-md hover:bg-sky-500",
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
