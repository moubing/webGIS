"use client";

import { useContext } from "react";
import { MapContext } from "../../ctx/MapContext";
import {
  EditLayerContext,
  SetEditLayerContext,
  SetLayerListContext,
} from "../../ctx/LayerContext";
import { LayerContext } from "../../ctx/LayerCardContext";
import { MdOutlineDeleteSweep } from "react-icons/md";

export function RemoveLayerBtn() {
  const map = useContext(MapContext);
  const setLayerList = useContext(SetLayerListContext);
  const editLayer = useContext(EditLayerContext);
  const setEditLayer = useContext(SetEditLayerContext);
  const layer = useContext(LayerContext);

  function handleDeleteLayer() {
    if (editLayer && layer.get("layerName") === editLayer.get("layerName")) {
      setEditLayer(null);
    }

    setLayerList((pre) =>
      pre.filter((item) => item.get("layerName") !== layer.get("layerName"))
    );
    map.removeLayer(layer);
  }

  return (
    <MdOutlineDeleteSweep
      onClick={handleDeleteLayer}
      className="size-6 text-sky-500 hover:text-pink-500 hover:scale-105"
    />
  );
}
