"use client";

import {
  ClearSelectedFeatureBtn,
  PanToSelectedFeatureBtn,
  SelectByAttributeBtn,
  SelectByGraphicsBtn,
  SelectByLocationBtn,
  SelectionStyleSettingBtn,
  ZoomToSelectedFeatureBtn,
} from "../dropdownMenuBtns/SelectionMenuBtns";
import { StyledMenu } from "./StyledMenu";

export function SelectionMenu() {
  return (
    <StyledMenu title={"选择"}>
      <SelectByAttributeBtn />
      <SelectByLocationBtn />
      <SelectByGraphicsBtn />
      <ZoomToSelectedFeatureBtn />
      <PanToSelectedFeatureBtn />
      <ClearSelectedFeatureBtn />
      <SelectionStyleSettingBtn />
    </StyledMenu>
  );
}
