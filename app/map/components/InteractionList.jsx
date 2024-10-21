"use client";

import { useContext, useRef } from "react";
import { InteractionsContext } from "../ctx/MapContext";
import { CheckBoxMB } from "@/app/components/CheckBoxMB";

// todo 以后这里的这个ListItem要优化一下，样式太丑了，同样的control的也要改一下

export function InteractionList() {
  const interactionList = useContext(InteractionsContext);
  return (
    <div className="overflow-auto h-[280px] space-y-2">
      {interactionList.map((interaction) => (
        <ListItem key={interaction.get("name")} interaction={interaction} />
      ))}
    </div>
  );
}

function ListItem({ interaction }) {
  const name = interaction.get("name");
  const description = interaction.get("description");
  const useInfo = interaction.get("useInfo");
  const activeRef = useRef(interaction.get("active"));

  function handleSwitch() {
    interaction.set("active", !activeRef.current);
  }

  return (
    <div className="flex items-center gap-3 p-2 bg-gray-200 rounded-md">
      <CheckBoxMB initialState={activeRef.current} handler={handleSwitch} />
      <h1>{name}</h1>
      <p>{description}</p>
      <p className="text-xs text-pink-500 font-bold">{useInfo}</p>
    </div>
  );
}
