"use client";

import { LogBtn, TipBtn, ToolBtn } from "../dropdownMenuBtns/ViewMenuBtns";
import { StyledMenu } from "./StyledMenu";

export function ViewMenu() {
  return (
    <StyledMenu title={"视图"}>
      <LogBtn />
      <ToolBtn />
      <TipBtn />
    </StyledMenu>
  );
}
