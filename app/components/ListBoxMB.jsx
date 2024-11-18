"use client";

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { memo } from "react";
import { FaChevronDown } from "react-icons/fa";

// list应该是一个字符串数组

export const ListBoxMB = memo(function ListboxMB({
  state,
  list,
  title,
  updateState,
}) {
  return (
    <div className=" flex items-center gap-4 select-none">
      <div className=" flex-grow-0">{title}</div>
      <Listbox value={state} onChange={updateState}>
        <ListboxButton className="px-2 py-1 flex items-center justify-between flex-grow bg-white rounded-md shadow-md">
          <div>{state}</div>
          <FaChevronDown />
        </ListboxButton>
        <ListboxOptions
          anchor="bottom start"
          className="p-2 relative z-50 bg-white shadow-lg rounded-lg [--anchor-gap:4px] max-h-fit"
        >
          {list.map((item) => (
            <ListboxOption
              value={item}
              key={item}
              className="px-2 py-1 rounded-lg text-slate-600 data-[hover]:bg-sky-300 data-[focus]:bg-sky-300 select-none w-[var(--button-width)]"
            >
              {item}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
});
