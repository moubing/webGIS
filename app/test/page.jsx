import { ContainerStateProvider } from "./components/contextProviders/ContainerStateProvider";
import { ControlMenu } from "./components/dropdownMenus/ControlMenu";
import { FileMenu } from "./components/dropdownMenus/FileMenu";
import { InteractionMenu } from "./components/dropdownMenus/InteractionMenu";
import { SelectionMenu } from "./components/dropdownMenus/SelectionMenu";
import { ViewMenu } from "./components/dropdownMenus/ViewMenu";
import { LayerManagerContainer } from "./components/resizeContaners/LayerManagerContainer";
import { LogContainer } from "./components/resizeContaners/LogContainer";
import { MapContainer } from "./components/resizeContaners/MapContainer";
import { TipContainer } from "./components/resizeContaners/TipContainer";
import { ToolContainer } from "./components/resizeContaners/ToolContainer";

// todo
// 1. 实现管理各个容器的显示状态
// 2. 然后就是实现各个容器的定位可以变换，就比如原本是停靠在某个边上，可以让它变成悬浮状态，可以拖拽它
// 3. 实现改变容器的大小

export default function TestPage() {
  return (
    <ContainerStateProvider>
      <div className="flex flex-col h-screen w-screen relative">
        <div className="flex-grow-0 relative z-50">
          <div className="h-full w-full p-2 flex items-center">
            <FileMenu />
            <ViewMenu />
            <SelectionMenu />
            <InteractionMenu />
            <ControlMenu />
          </div>
        </div>
        <div className=" flex-grow flex relative z-20">
          <LayerManagerContainer></LayerManagerContainer>
          <section className="h-full flex-grow flex flex-col relative z-10">
            <MapContainer></MapContainer>
            <LogContainer></LogContainer>
          </section>
          <ToolContainer></ToolContainer>
        </div>
        <TipContainer></TipContainer>
      </div>
    </ContainerStateProvider>
  );
}
