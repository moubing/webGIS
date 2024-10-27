import { AddLayerMenu } from "../addLayer/AddlayerMenu";
import { EditBar } from "../editLayer/EditBar";
import { ReorderLayerList } from "../reorder/ReorderLayerList";
import { FeaturesPanel } from "../tool/FeaturePanel";

export function LayerManager() {
  return (
    <div className="h-full w-full p-2 relative">
      <ReorderLayerList />
      <AddLayerMenu />
      <EditBar />
      <FeaturesPanel />
    </div>
  );
}
