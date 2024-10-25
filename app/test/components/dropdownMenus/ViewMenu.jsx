"use client";

import {
  LayerBtn,
  LogBtn,
  MapBtn,
  TipBtn,
  ToolBtn,
} from "../dropdownMenuBtns/ViewMenuBtns";
import { StyledMenu } from "./StyledMenu";

export function ViewMenu() {
  return (
    <StyledMenu title={"视图"}>
      <LayerBtn />
      <MapBtn />
      <LogBtn />
      <ToolBtn />
      <TipBtn />
    </StyledMenu>
  );
}
