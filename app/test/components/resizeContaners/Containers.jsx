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
        className=" border-b-2 border-sky-400 shadow-sm"
      >
        {children}
      </Panel>
      <VerticalHandle />
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
      className=" border-2 border-sky-400 rounded-lg shadow-sm"
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
          className=" border-2 border-sky-400 rounded-lg shadow-sm"
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
        className=" border-r-2 border-y-2 border-sky-400 rounded-r-lg shadow-sm relative z-50"
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
        <VerticalHandle />

        <Panel
          defaultSize={defaultSize}
          id={"TipContainer"}
          order={3}
          minSize={3}
          maxSize={4}
          className="bg-blue-400 text-white text-sm"
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
          className=" border-l-2 border-y-2 border-sky-400 rounded-l-lg shadow-sm"
        >
          {children}
        </Panel>
      </>
    )
  );
}
