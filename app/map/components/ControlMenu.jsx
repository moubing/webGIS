"use client";

import { IconContainer2 } from "@/app/components/IconContainer";
import { useState } from "react";
import { MdOutlineSettingsInputComponent } from "react-icons/md";
import { Panle } from "@/app/components/Panle";
import { ControlList } from "./ControlList";

export function ControlMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <IconContainer2
      handler={() => {
        setIsOpen(true);
      }}
    >
      <MdOutlineSettingsInputComponent />
      {isOpen && (
        <Panle
          isOpen={isOpen}
          handleClose={() => {
            setIsOpen(false);
          }}
          height={"h-[310px]"}
          width={"w-[500px]"}
        >
          <ControlList />
        </Panle>
      )}
    </IconContainer2>
  );
}
