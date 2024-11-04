"use client";
import { TbSettingsCode } from "react-icons/tb";

import { StyledIconMenu } from "../dropdownMenus/StyledMenu";
import { OpenAttributeTableBtn } from "../dropdownMenuBtns/LayerSettingMenuBtns";

export function LayerSettingDropdown() {
  return (
    <StyledIconMenu Icon={TbSettingsCode}>
      <OpenAttributeTableBtn />
    </StyledIconMenu>
  );
}
