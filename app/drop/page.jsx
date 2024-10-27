"use client";

import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

export default function DropPage() {
  return (
    <div className=" w-screen h-screen select-none">
      <PanelGroup direction="vertical">
        <Panel defaultSize={50} className=" bg-indigo-200">
          TipContainer
        </Panel>
        <PanelResizeHandle className="h-2 active:bg-sky-200 hover:bg-gray-200" />
        <Panel defaultSize={50} className=" bg-pink-200">
          TipContainer
        </Panel>
      </PanelGroup>
    </div>
  );
}
