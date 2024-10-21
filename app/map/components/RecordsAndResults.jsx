"use client";

import { memo, useContext } from "react";
import { RecordsContext, ResultsContext } from "../ctx/RecordsContext";
import { SearchFallback } from "@/app/components/SearchFallback";
import { ComboboxOption } from "@headlessui/react";
import { TbArrowBigRightLines } from "react-icons/tb";

export const Records = memo(function Records() {
  const records = useContext(RecordsContext);
  console.log("records:", records);
  return records.length !== 0 ? (
    records.map((item) => <ListItem key={item.hotPointID} item={item} />)
  ) : (
    <SearchFallback>无搜索记录</SearchFallback>
  );
});

export const Results = memo(function Results() {
  const results = useContext(ResultsContext);
  console.log("results:", results);

  return results.length !== 0 ? (
    results.map((item) => <ListItem key={item.hotPointID} item={item} />)
  ) : (
    <SearchFallback>没有找到</SearchFallback>
  );
});

function ListItem({ item }) {
  return (
    <ComboboxOption
      value={item}
      className="py-2 px-12 select-none relative items-center gap-4 group data-[focus]:bg-sky-200 space-y-1"
    >
      <p>
        <span className="text-gray-500">名称：</span>
        <span className="text-pink-500">{item.name}</span>
      </p>
      <p className="text-xs">
        <span className="text-gray-500">地址：</span>
        <span className="text-pink-500">{item.address}</span>
      </p>
      <TbArrowBigRightLines className="absolute top-1/2 size-6 group-data-[focus]:visible invisible   -translate-y-1/2 left-3 text-sky-500" />
      <p className="absolute top-1/2 -translate-y-1/2 right-2 group-data-[focus]:visible invisible text-gray-400">
        Enter
      </p>
    </ComboboxOption>
  );
}
