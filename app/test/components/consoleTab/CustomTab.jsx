"use client";

import { Tab } from "@headlessui/react";

export function CustomTab({ children }) {
  return (
    <Tab className="px-2 py-1 text-sm font-bold text-slate-600 focus:outline-none data-[selected]:bg-sky-200 data-[hover]:bg-sky-200  data-[focus]:outline-1 data-[focus]:outline-red-500">
      {children}
    </Tab>
  );
}
