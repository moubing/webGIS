"use client";
import { TbSettingsCode } from "react-icons/tb";

import { StyledIconMenu } from "../dropdownMenus/StyledMenu";
import {
  EditBtn,
  GenerateChartsBtn,
  OpenAttributeTableBtn,
  StyleSettingBtn,
  ZoomToExtentBtn,
} from "../dropdownMenuBtns/LayerSettingMenuBtns";
import { useContext } from "react";
import { LayerContext } from "../../ctx/LayerCardContext";
import { VectorTag } from "../../variables/tags";

export function LayerSettingDropdown() {
  const layer = useContext(LayerContext);
  return (
    <StyledIconMenu Icon={TbSettingsCode}>
      {layer.get("tags")[0] === VectorTag && (
        <>
          <OpenAttributeTableBtn />
          <EditBtn />
          <StyleSettingBtn />
          <GenerateChartsBtn />
        </>
      )}
      <ZoomToExtentBtn />
    </StyledIconMenu>
  );
}
