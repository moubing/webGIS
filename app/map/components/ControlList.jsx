"use client";

import { useContext, useRef } from "react";
import { ControlsContext, MapContext } from "../ctx/MapContext";
import { CheckBoxMB } from "@/app/components/CheckBoxMB";

export function ControlList() {
  const controlList = useContext(ControlsContext);

  return (
    <div className="overflow-auto h-[280px] space-y-2">
      {controlList.map((control) => (
        <ListItem key={control.get("name")} control={control} />
      ))}
    </div>
  );
}

function ListItem({ control }) {
  const map = useContext(MapContext);
  const name = control.get("name");
  const description = control.get("description");
  const checkRef = useRef(control.get("check"));

  function handleSwitch() {
    if (checkRef.current) {
      map.removeControl(control);
    } else {
      map.addControl(control);
    }
    control.set("check", !checkRef.current);
    checkRef.current = !checkRef.current;
  }
  return (
    <div className="flex items-center gap-3 p-2 bg-gray-200 rounded-md">
      <CheckBoxMB initialState={checkRef.current} handler={handleSwitch} />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
}
