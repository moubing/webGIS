import { EditLayerProvider } from "./EditLayerProvider";
import { ReorderLayerList } from "./ReorderLayerList";
import { AddLayerMenu } from "./AddLayerMenu";
import { EditBar } from "./EditBar";
import { LayerListProvider } from "./LayerListProvider";
import { FeaturesPanel } from "./FeaturePanel";
import { SelectedFeaturesProvider } from "./SelectedFeaturesProvider";

export function LayerManager() {
  return (
    <div className="h-full relative z-20 bg-gray-200 border-r-2 border-pink-500/70 py-2">
      <p className="text-center font-bold text-xl select-none">图层管理器</p>
      <LayerListProvider>
        <EditLayerProvider>
          <SelectedFeaturesProvider>
            <ReorderLayerList />
            <AddLayerMenu />
            <EditBar />
            <FeaturesPanel />
          </SelectedFeaturesProvider>
        </EditLayerProvider>
      </LayerListProvider>
    </div>
  );
}
