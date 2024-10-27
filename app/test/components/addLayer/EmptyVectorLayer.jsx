"use client";

import { useContext } from "react";
import { MapContext } from "../../ctx/MapContext";
import VectorLayer from "ol/layer/Vector";
import { Vector } from "ol/source";
import {
  LineStringTag,
  PointTag,
  PolygonTag,
  VectorTag,
} from "../../variables/tags";
import {
  getDefaultLayerName,
  updateDefaultlayerName,
} from "../../defaultOptions/defaultLayerName";
import { LayerListContext, SetLayerListContext } from "../../ctx/LayerContext";
import { createDefaultStyle } from "../../lib/createStyle";

export function EmptyVectorLayer({ handleClose }) {
  const map = useContext(MapContext);
  const layerList = useContext(LayerListContext);
  const setLayerList = useContext(SetLayerListContext);
  function addEmptyLayer(type) {
    const newLayer = new VectorLayer({
      layerName: getDefaultLayerName(),
      tags: [VectorTag, type],
      geometryType: type,
      style: createDefaultStyle(),
      source: new Vector({
        features: [],
      }),
    });
    map.addLayer(newLayer);
    setLayerList([newLayer, ...layerList]);
    updateDefaultlayerName();
    handleClose();
  }
  return (
    <div className="grid grid-cols-5 gap-3 p-2">
      <Btn
        title={"point"}
        handleClick={() => {
          addEmptyLayer(PointTag);
        }}
      />
      <Btn
        title={"line"}
        handleClick={() => {
          addEmptyLayer(LineStringTag);
        }}
      />
      <Btn
        title={"polygon"}
        handleClick={() => {
          addEmptyLayer(PolygonTag);
        }}
      />
    </div>
  );
}

function Btn({ handleClick, title }) {
  return (
    <button onClick={handleClick} className="p-4 rounded-md shadow-md text-lg">
      {title}
    </button>
  );
}
