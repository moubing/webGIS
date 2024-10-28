"use client";

import { Panel, PanelGroup } from "react-resizable-panels";

export function PrimaryPanelGroup({ children }) {
  return (
    <PanelGroup
      direction="vertical"
      autoSaveId="PrimaryPanelGroup"
      onLayout={(sizes) => {
        document.cookie = `PrimaryPanelGroupLayout=${JSON.stringify(sizes)}`;
      }}
    >
      {children}
    </PanelGroup>
  );
}

export function MiddlePanelGroup({ children, defaultSize }) {
  return (
    <Panel
      minSize={87}
      maxSize={92}
      id={"MiddlePanelGroup"}
      order={2}
      defaultSize={defaultSize}
      className=" relative z-30"
    >
      <PanelGroup
        autoSaveId="MiddlePanelGroup"
        direction="horizontal"
        onLayout={(sizes) => {
          document.cookie = `MiddlePanelGroupLayout=${JSON.stringify(sizes)}`;
        }}
      >
        {children}
      </PanelGroup>
    </Panel>
  );
}

export function CenterPanelGroup({ children, defaultSize }) {
  return (
    <Panel defaultSize={defaultSize} id={"CenterPanelGroup"} order={2}>
      <PanelGroup
        autoSaveId="CenterPanelGroup"
        direction="vertical"
        onLayout={(sizes) => {
          document.cookie = `CenterPanelGroupLayout=${JSON.stringify(sizes)}`;
        }}
      >
        {children}
      </PanelGroup>
    </Panel>
  );
}
