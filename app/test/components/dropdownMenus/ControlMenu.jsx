"use client";

import {
  AttributionBtn,
  FullScreenBtn,
  MousePositionBtn,
  OverviewMapBtn,
  RotateBtn,
  ScaleLineBtn,
  ZoomBtn,
  ZoomSliderBtn,
} from "../dropdownMenuBtns/ControlMenuBtns";
import { StyledMenu } from "./StyledMenu";

export function ControlMenu() {
  return (
    <StyledMenu title={"控件"}>
      <MousePositionBtn />
      <AttributionBtn />
      <FullScreenBtn />
      <OverviewMapBtn />
      <RotateBtn />
      <ScaleLineBtn />
      <ZoomSliderBtn />
      <ZoomBtn />
    </StyledMenu>
  );
}
