import { EditBar } from "../editLayer/EditBar";
import { ReorderLayerList } from "../reorder/ReorderLayerList";
import { TempSliderbar } from "../temp/TempSlidrbar";
import { TempTopbar } from "../temp/TempTopbar";
import { FeaturesPanel } from "../tool/FeaturePanel";

export function LayerManager() {
  return (
    <div className="h-full w-full relative flex ">
      <TempSliderbar />
      <div className=" h-full flex-grow flex flex-col bg-gray-200">
        <TempTopbar />
        <ReorderLayerList />
      </div>
      <EditBar />
    </div>
  );
}
