"use client";

import { Panle } from "@/app/components/Panle";
import { useEffect, useState } from "react";
import { SearchBtn } from "./SearchBtn";
import { SearchComboBox } from "./SearchComboBox";

export function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function keyDown(e) {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
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
    <div>
      <SearchBtn handleOpen={() => setIsOpen(true)} />
      {isOpen && (
        <Panle isOpen={isOpen} handleClose={() => setIsOpen(false)}>
          <SearchComboBox handleClose={() => setIsOpen(false)} />
        </Panle>
      )}
    </div>
  );
}
