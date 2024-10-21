"use client";
import { Panle } from "@/app/components/Panle";
import { useContext, useState } from "react";
import { TbSettingsCode } from "react-icons/tb";
import { VectorLayerSetting } from "./layerSetting/VectorLayerSetting";
import { FallbackSetting } from "./layerSetting/FallbackSetting";
import { LayerContext } from "../ctx/LayerAndStyleContext";
import { VectorTag } from "../lib/tags";

// 以后这个组件不会使用dialog
// 弄成一个可移动的窗口

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
