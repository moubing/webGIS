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
        maxSize={8}
        className="bg-pink-200"
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
      className="bg-green-200"
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
          className="bg-violet-200"
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
        className="bg-teal-200"
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
          className="bg-yellow-200"
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
          className="bg-indigo-200"
        >
          {children}
        </Panel>
      </>
    )
  );
}
