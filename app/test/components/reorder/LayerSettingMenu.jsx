"use client";

import { useContext, useState } from "react";
import { LayerContext } from "../../ctx/LayerCardContext";
import { Panle } from "@/app/components/Panle";
import { TbSettingsCode } from "react-icons/tb";
import { VectorTag } from "../../variables/tags";
import { VectorLayerSetting } from "../layerSetting/VectorLayerSetting";
import { FallbackSetting } from "../layerSetting/FallbackSetting";

export function LayerSettingMenu() {
  const layer = useContext(LayerContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <TbSettingsCode
        className="size-6 text-sky-500 hover:text-pink-500 hover:scale-105"
        onClick={() => setIsOpen(true)}
      />
      {isOpen && (
        <Panle
          handleClose={() => setIsOpen(false)}
          isOpen={isOpen}
          isblur={false}
        >
          {layer.get("tags")[0] === VectorTag ? (
            <VectorLayerSetting />
          ) : (
            <FallbackSetting />
          )}
        </Panle>
      )}
    </div>
  );
}
