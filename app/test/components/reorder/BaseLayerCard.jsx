"use client";

import { CheckBoxMB } from "@/app/components/CheckBoxMB";
import { Tags } from "@/app/components/Tag";
import { LayerContext, StyleContext } from "../../ctx/LayerCardContext";
import { LayerSettingMenu } from "./LayerSettingMenu";
import { RemoveLayerBtn } from "./RemoveLayerBtn";
import {
  BaseMapLayerTag,
  ServerLayerTag,
  UserLayerTag,
  VectorTag,
} from "../../variables/tags";
import { LayerSettingDropdown } from "./LayerSettingDropdown";
import clsx from "clsx";
import { memo } from "react";

export const BaseLayerCard = memo(function BaseLayerCard({ layer, zIndex }) {
  layer.setZIndex(zIndex);
  const layerType = layer.get("layerType");
  const tags = layer.get("tags");
  let style = null;
  if (layer.get("tags")[0] === VectorTag) {
    style = layer.getStyle();
  }

  return (
    <LayerContext.Provider value={layer}>
      <StyleContext.Provider value={style}>
        <div
          className={clsx(
            "flex items-center gap-3 px-3 py-2 rounded-md  relative shadow-lg",
            {
              "bg-green-200/50 border-2 border-green-500 border-dashed backdrop-blur":
                layerType === ServerLayerTag,
              "bg-indigo-200/50 border-2 border-indigo-500 border-dashed backdrop-blur":
                layerType === BaseMapLayerTag,
              "bg-pink-200/50 border-2 border-pink-500 border-dashed backdrop-blur":
                layerType === UserLayerTag,
            }
          )}
        >
          <CheckBoxMB
            initialState={true}
            handler={(bool) => {
              layer.setVisible(bool);
            }}
          />
          <section>
            <h1 className="text-lg font-bold text-slate-700">
              {layer.get("layerName")}
            </h1>
            <div className="flex gap-2 text-slate-600">
              {tags.map((tag) => (
                <div
                  className="px-1 py-0.5 rounded-sm text-xs outline outline-1 outline-sky-500 "
                  key={tag}
                >
                  {tag}
                </div>
              ))}
            </div>
          </section>
          <section className="absolute top-1 right-1 flex gap-2">
            {/* {children} */}
            {/* <LayerSettingMenu /> */}
            <LayerSettingDropdown />
            <RemoveLayerBtn />
          </section>
          <section
            className={clsx(
              "absolute bottom-1 right-1 text-xs scale-75 origin-bottom-right ",
              {
                "text-green-600 font-bold ": layerType === ServerLayerTag,
                "text-indigo-600 font-bold ": layerType === BaseMapLayerTag,
                "text-pink-600 font-bold ": layerType === UserLayerTag,
              }
            )}
          >
            {layerType}
          </section>
        </div>
      </StyleContext.Provider>
    </LayerContext.Provider>
  );
});
