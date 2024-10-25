"use client";

import {
  DblClickDragZoomBtn,
  DoubleClickZoomBtn,
  DragPanBtn,
  DragRotateAndZoomBtn,
  DragRotateBtn,
  DragZoomBtn,
  KeyboardPanBtn,
  KeyboardZoomBtn,
  LinkBtn,
  MouseWheelZoomBtn,
} from "../dropdownMenuBtns/InteractionMenuBtns";
import { StyledMenu } from "./StyledMenu";

export function InteractionMenu() {
  return (
    <StyledMenu title={"交互"}>
      <DblClickDragZoomBtn />
      <DoubleClickZoomBtn />
      <KeyboardPanBtn />
      <KeyboardZoomBtn />
      <LinkBtn />
      <MouseWheelZoomBtn />
      <DragZoomBtn />
      <DragPanBtn />
      <DragRotateAndZoomBtn />
      <DragRotateBtn />
    </StyledMenu>
  );
}
