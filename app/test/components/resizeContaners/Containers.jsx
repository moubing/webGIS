"use client";

import { Panel } from "react-resizable-panels";
import { useContext } from "react";
import { LogConCtx, TipConCtx, ToolConCtx } from "../../ctx/switchContainer";
import {
  HorizontalHandle,
  VerticalHandle,
} from "../myPanelGroup/ResizeHandles";

export function TopBarContainer({ children, defaultSize }) {
  return (
    <>
      <Panel
        defaultSize={defaultSize}
        id={"TopBarContainer"}
        order={1}
        minSize={5}
        maxSize={9}
        className="bg-sky-100"
      >
        {children}
      </Panel>
      <VerticalHandle isDisabled={true} />
    </>
  );
}

export function MapContainer({ children, defaultSize }) {
  return (
    <Panel
      minSize={20}
      maxSize={100}
      id={"MapContainer"}
      order={1}
      defaultSize={defaultSize}
    >
      {children}
    </Panel>
  );
}

export function LogContainer({ children, defaultSize }) {
  const logContainerState = useContext(LogConCtx);

  return (
    logContainerState && (
      <>
        <VerticalHandle />

        <Panel
          defaultSize={defaultSize}
          minSize={10}
          id={"LogContainer"}
          order={2}
        >
          {children}
        </Panel>
      </>
    )
  );
}

export function LayerManagerContainer({ children, defaultSize }) {
  return (
    <>
      <Panel
        minSize={5}
        maxSize={40}
        id={"LayerManagerContainer"}
        order={1}
        defaultSize={defaultSize}
      >
        {children}
      </Panel>
      <HorizontalHandle />
    </>
  );
}

export function TipContainer({ children, defaultSize }) {
  const tipContainerState = useContext(TipConCtx);
  return (
    tipContainerState && (
      <>
        <VerticalHandle isDisabled={true} />

        <Panel
          defaultSize={defaultSize}
          id={"TipContainer"}
          order={3}
          minSize={3}
          maxSize={4}
        >
          {children}
        </Panel>
      </>
    )
  );
}
export function ToolContainer({ children, defaultSize }) {
  const toolContainerState = useContext(ToolConCtx);
  return (
    toolContainerState && (
      <>
        <HorizontalHandle />

        <Panel
          minSize={5}
          maxSize={40}
          id={"ToolContainer"}
          order={3}
          defaultSize={defaultSize}
        >
          {children}
        </Panel>
      </>
    )
  );
}
