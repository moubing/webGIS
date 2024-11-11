"use client";

import { TabPanel } from "@headlessui/react";
import { useEffect, useState } from "react";
import { ShortCutTable } from "./ShortCutTable";

export function ShortCutPanel() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data/geoJsonData.json")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  return (
    <TabPanel className="flex-grow h-full overflow-auto relative flex flex-col">
      {data && <ShortCutTable data={data} />}
    </TabPanel>
  );
}
