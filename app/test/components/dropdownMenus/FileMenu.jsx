"use client";

import {
  ExitBtn,
  ExportBtn,
  NewFileBtn,
  OpenFileBtn,
  PrintBtn,
  SaveAsBtn,
  SaveBtn,
} from "../dropdownMenuBtns/FileMenuBtns";
import { StyledMenu } from "./StyledMenu";

export function FileMenu() {
  return (
    <StyledMenu title={"文件"}>
      <NewFileBtn />
      <OpenFileBtn />
      <SaveBtn />
      <SaveAsBtn />
      <PrintBtn />
      <ExportBtn />
      <ExitBtn />
    </StyledMenu>
  );
}
