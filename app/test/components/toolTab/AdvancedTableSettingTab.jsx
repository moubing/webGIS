"use client";

import { TabPanel } from "@headlessui/react";
import { TbRestore } from "react-icons/tb";
import { CustomTab } from "../consoleTab/CustomTab";
import { useCallback, useState } from "react";
import { ToggleAllColumnsVisible } from "./ToggleVisible";
import { ReorderColumns } from "./ReorderColumns";

export function AdvancedTableSettingTab() {
  return <CustomTab>高级</CustomTab>;
}

// 此处的payload为table
export function AdvancedTableSettingPanel({ payload }) {
  const [_, rerender] = useState({});

  const handleAllToggle = useCallback((table) => {
    table.toggleAllColumnsVisible();
    rerender({});
  }, []);
  const handleToggle = useCallback((column) => {
    column.toggleVisibility();
    rerender({});
  }, []);

  return (
    <TabPanel className="relative overflow-auto flex-grow shadow-lg focus:outline-none text-sm text-sky-500 font-bold bg-gray-200">
      <div className="text-gray-800 p-2">字段的显示和顺序</div>
      <div className="flex px-4 items-center justify-between">
        <ToggleAllColumnsVisible
          isAllVisible={payload.getIsAllColumnsVisible()}
          handleAllToggle={handleAllToggle}
          table={payload}
        />
        <button className=" flex items-center gap-2">
          <TbRestore
            className="size-4 "
            onClick={() => {
              payload.resetColumnOrder();
              payload.resetColumnVisibility();
              rerender({});
            }}
          />
        </button>
      </div>
      <ReorderColumns table={payload} handleToggle={handleToggle} />
    </TabPanel>
  );
}
