"use client";

import { useEffect, useState } from "react";
import { AddLayerBtn } from "./AddLayerBtn";
import { Panle } from "@/app/components/Panle";
import { AddLayerTab } from "./AddLayerTab";

export function AddLayerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function keyDown(e) {
      if (e.key === "i" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((preState) => !preState);
      }
    }
    window.addEventListener("keydown", keyDown);
    return () => {
      window.removeEventListener("keydown", keyDown);
    };
  }, []);
  return (
    <div className="absolute top-2 right-4">
      <AddLayerBtn
        handleOpen={() => {
          setIsOpen(true);
        }}
      />
      {isOpen && (
        <Panle
          isOpen={isOpen}
          handleClose={() => {
            setIsOpen(false);
          }}
          height={"h-[500px]"}
          width={"w-[700px]"}
        >
          <AddLayerTab
            handleClose={() => {
              setIsOpen(false);
            }}
          />
        </Panle>
      )}
    </div>
  );
}
