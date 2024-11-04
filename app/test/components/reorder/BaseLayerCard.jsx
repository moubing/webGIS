"use client";

import { CheckBoxMB } from "@/app/components/CheckBoxMB";
import { Tags } from "@/app/components/Tag";
import { LayerContext, StyleContext } from "../../ctx/LayerCardContext";
import { LayerSettingMenu } from "./LayerSettingMenu";
import { RemoveLayerBtn } from "./RemoveLayerBtn";
import { VectorTag } from "../../variables/tags";
import { LayerSettingDropdown } from "./LayerSettingDropdown";

export function BaseLayerCard({ children, layer, zIndex }) {
  layer.setZIndex(zIndex);
  let style = null;
  if (layer.get("tags")[0] === VectorTag) {
    style = layer.getStyle();
  }

  return (
    <LayerContext.Provider value={layer}>
      <StyleContext.Provider value={style}>
        <div className="flex items-center bg-gray-50 gap-3 px-3 py-2 rounded-md border-2 border-dashed border-pink-500 relative shadow-lg">
          <CheckBoxMB
            initialState={true}
            handler={(bool) => {
              layer.setVisible(bool);
            }}
          />
          <section>
            <h1 className="text-lg font-bold">{layer.get("layerName")}</h1>
            <Tags layer={layer} />
          </section>
          <section className="absolute top-1 right-1 flex gap-2">
            {children}
            {/* <LayerSettingMenu /> */}
            <LayerSettingDropdown />
            <RemoveLayerBtn />
          </section>
        </div>
      </StyleContext.Provider>
    </LayerContext.Provider>
  );
}
