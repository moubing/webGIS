"use client";

import clsx from "clsx";
import { useContext } from "react";
import {
  FaAnglesLeft,
  FaAnglesRight,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa6";
import { FaEllipsis } from "react-icons/fa6";
import { SetToolTabListContext } from "../../ctx/tabListContext";
import {
  AdvancedTableSettingPanel,
  AdvancedTableSettingTab,
} from "../toolTab/AdvancedTableSettingTab";

export function TablePagination({
  table,
  isShowGoToPage = true,
  isShowPageSize = true,
  isShowAdvance = true,
  isShowRowCount = true,
  isShowCurrentPage = true,
}) {
  const setToolTabList = useContext(SetToolTabListContext);
  const canPre = table.getCanPreviousPage();
  const canNext = table.getCanNextPage();

  return (
    <div
      className={`flex items-center justify-between sticky top-0 left-0 py-1 px-2 text-sm text-sky-500  font-bold bg-gray-100 `}
    >
      <section className="flex items-center gap-4">
        {isShowRowCount && (
          <div>{"总行数：" + table.getPrePaginationRowModel().rows.length}</div>
        )}
        {isShowCurrentPage && (
          <div>{`当前页： ${
            table.getState().pagination.pageIndex + 1
          } / ${table.getPageCount()}`}</div>
        )}
      </section>
      <section className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <button
            className={clsx("p-1 rounded shadow-md bg-white ", {
              "text-sky-500": canPre,
              "text-gray-400": !canPre,
            })}
            onClick={() => table.setPageIndex(0)}
            disabled={!canPre}
          >
            <FaAnglesLeft className="size-4" />
          </button>
          <button
            className={clsx("p-1 rounded shadow-md bg-white", {
              "text-sky-500": canPre,
              "text-gray-400": !canPre,
            })}
            onClick={() => table.previousPage()}
            disabled={!canPre}
          >
            <FaAngleLeft className="size-4" />
          </button>
          <button
            className={clsx("p-1 rounded shadow-md bg-white", {
              "text-sky-500": canNext,
              "text-gray-400": !canNext,
            })}
            onClick={() => table.nextPage()}
            disabled={!canNext}
          >
            <FaAngleRight className="size-4" />
          </button>
          <button
            className={clsx("p-1 rounded shadow-md bg-white", {
              "text-sky-500": canNext,
              "text-gray-400": !canNext,
            })}
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!canNext}
          >
            <FaAnglesRight className="size-4" />
          </button>
        </div>

        {isShowGoToPage && (
          <label>
            跳转至：
            <input
              className="px-2 rounded-sm shadow-md w-12 mx-0.5 focus:outline-sky-500 text-sky-500"
              type="number"
              min={1}
              max={table.getPageCount()}
              step={1}
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                if (e.target.value === "") return;
                if (e.target.value > table.getPageCount())
                  e.target.value = table.getPageCount();
                if (e.target.value < 1) e.target.value = 1;
                e.target.value = Math.floor(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  const pageIndex = e.target.value
                    ? Number(e.target.value) - 1
                    : 0;
                  table.setPageIndex(pageIndex);
                }
              }}
              onBlur={(e) => {
                if (e.target.value === "") e.target.value = 1;
              }}
            />
            页
          </label>
        )}
        {isShowPageSize && (
          <label>
            每页显示
            <select
              className="rounded-sm shadow-md px-2 mx-0.5 focus:outline-sky-500"
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
            行
          </label>
        )}
        {isShowAdvance && (
          <button
            className={clsx("p-1 rounded shadow-md bg-white text-sky-500")}
            onClick={() => {
              setToolTabList((pre) => [
                ...pre,
                {
                  Tab: AdvancedTableSettingTab,
                  Panel: AdvancedTableSettingPanel,
                  payload: table,
                },
              ]);
            }}
          >
            <FaEllipsis className="size-4" />
          </button>
        )}
      </section>
    </div>
  );
}
