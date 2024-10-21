"use client";

import { IconContainer2 } from "@/app/components/IconContainer";
import { useState } from "react";
import { FaRegHandPointer } from "react-icons/fa";
import { Panle } from "@/app/components/Panle";
import { InteractionList } from "./InteractionList";

export function InteractionMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <IconContainer2
      handler={() => {
        setIsOpen(true);
      }}
    >
      <FaRegHandPointer />
      {isOpen && (
        <Panle
          isOpen={isOpen}
          handleClose={() => {
            setIsOpen(false);
          }}
          height={"h-[310px]"}
          width={"w-[500px]"}
        >
          <InteractionList />
        </Panle>
      )}
    </IconContainer2>
  );
}
