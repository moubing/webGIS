import { ContainerStateProvider } from "./components/contextProviders/ContainerStateProvider";
import { MapProvider } from "./components/contextProviders/MapProvider";
import { LayerProvider } from "./components/contextProviders/LayerProvider";
import { ControlMenu } from "./components/dropdownMenus/ControlMenu";
import { FileMenu } from "./components/dropdownMenus/FileMenu";
import { InteractionMenu } from "./components/dropdownMenus/InteractionMenu";
import { SelectionMenu } from "./components/dropdownMenus/SelectionMenu";
import { ViewMenu } from "./components/dropdownMenus/ViewMenu";
import { LayerManager } from "./components/map/LayerManager";
import { MapDisplayer } from "./components/map/MapDisplayer";
import {
  PrimaryPanelGroup,
  MiddlePanelGroup,
  CenterPanelGroup,
} from "./components/myPanelGroup/Groups";
import {
  LayerManagerContainer,
  TopBarContainer,
  MapContainer,
  LogContainer,
  TipContainer,
  ToolContainer,
} from "./components/resizeContaners/Containers";
import { cookies } from "next/headers";
import "ol/ol.css";
import { SearchProvider } from "./components/contextProviders/SearchProvider";
import { SearchBar } from "./components/search/SearchBar";
import { TempTip } from "./components/temp/TempTip";
import { TempBarTable, TempLineTable } from "./components/table/TempLineTable";
import { TempFeatureTable } from "./components/temp/TempFeatureTable";
import Link from "next/link";

export default async function TestPage() {
  let logContainerState = true;
  let toolContainerState = true;
  let tipContainerState = true;
  let PrimaryPanelGroupLayout = [8, 88, 4];
  let MiddlePanelGroupLayout = [20, 50, 30];
  let CenterPanelGroupLayout = [80, 20];
  const cookie = cookies();
  if (cookie.has("logContainerState")) {
    logContainerState = cookie.get("logContainerState").value === "true";
  }
  if (cookie.has("toolContainerState")) {
    toolContainerState = cookie.get("toolContainerState").value === "true";
  }
  if (cookie.has("tipContainerState")) {
    tipContainerState = cookie.get("tipContainerState").value === "true";
  }
  if (cookie.has("PrimaryPanelGroupLayout")) {
    PrimaryPanelGroupLayout = JSON.parse(
      cookie.get("PrimaryPanelGroupLayout").value
    );
  }
  if (cookie.has("MiddlePanelGroupLayout")) {
    MiddlePanelGroupLayout = JSON.parse(
      cookie.get("MiddlePanelGroupLayout").value
    );
  }
  if (cookie.has("CenterPanelGroupLayout")) {
    CenterPanelGroupLayout = JSON.parse(
      cookie.get("CenterPanelGroupLayout").value
    );
  }

  return (
    <MapProvider>
      <LayerProvider>
        <SearchProvider>
          <ContainerStateProvider
            storageStates={[
              logContainerState,
              toolContainerState,
              tipContainerState,
            ]}
          >
            <div className=" w-screen h-screen bg-gradient-to-b from-pink-100 to-sky-100">
              <PrimaryPanelGroup>
                <TopBarContainer defaultSize={PrimaryPanelGroupLayout[0]}>
                  <div className="h-full w-full p-2 flex items-center justify-between">
                    <div>
                      <FileMenu />
                      <ViewMenu />
                      <SelectionMenu />
                      <InteractionMenu />
                      <ControlMenu />
                    </div>
                    <div>
                      <SearchBar />
                    </div>
                    <div>
                      <Link
                        target="_blank"
                        href={"https://moubing.github.io/blog"}
                      >
                        文档
                      </Link>
                    </div>
                  </div>
                </TopBarContainer>
                <MiddlePanelGroup defaultSize={PrimaryPanelGroupLayout[1]}>
                  <LayerManagerContainer
                    defaultSize={MiddlePanelGroupLayout[0]}
                  >
                    <LayerManager />
                  </LayerManagerContainer>
                  <CenterPanelGroup defaultSize={MiddlePanelGroupLayout[1]}>
                    <MapContainer defaultSize={CenterPanelGroupLayout[0]}>
                      <MapDisplayer />
                    </MapContainer>
                    <LogContainer defaultSize={CenterPanelGroupLayout[1]}>
                      <TempFeatureTable />
                    </LogContainer>
                  </CenterPanelGroup>
                  <ToolContainer defaultSize={MiddlePanelGroupLayout[2]}>
                    <div className="w-full h-1/2 flex items-center justify-center p-2">
                      <TempLineTable />
                    </div>
                    <div className="w-full h-1/2 flex items-center justify-center p-2">
                      <TempBarTable />
                    </div>
                  </ToolContainer>
                </MiddlePanelGroup>

                <TipContainer defaultSize={PrimaryPanelGroupLayout[2]}>
                  <TempTip />
                </TipContainer>
              </PrimaryPanelGroup>
            </div>
          </ContainerStateProvider>
        </SearchProvider>
      </LayerProvider>
    </MapProvider>
  );
}
