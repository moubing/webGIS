"use client";

import { Panle } from "@/app/components/Panle";
import { useEffect, useState } from "react";
import { SearchBtn } from "./SearchBtn";
import { SearchComboBox } from "./SearchComboBox";
import { RecordProvider } from "./RecordsProvider";
import { ResultProvider } from "./ResultsProvider";

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
      <RecordProvider>
        <ResultProvider>
          <SearchBtn handleOpen={() => setIsOpen(true)} />
          {isOpen && (
            <Panle isOpen={isOpen} handleClose={() => setIsOpen(false)}>
              <SearchComboBox handleClose={() => setIsOpen(false)} />
            </Panle>
          )}
        </ResultProvider>
      </RecordProvider>
    </div>
  );
}
