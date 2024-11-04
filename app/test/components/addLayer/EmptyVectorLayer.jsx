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
  MultiPolygonTag,
} from "../../variables/tags";
import {
  getDefaultLayerName,
  updateDefaultlayerName,
} from "../../defaultOptions/defaultLayerName";
import { SetLayerListContext } from "../../ctx/LayerContext";
import { createDefaultStyle } from "../../lib/createStyle";
import { geojsonMapping } from "../../variables/geojsonMapping";
import { GeoJSON } from "ol/format";

export function EmptyVectorLayer({ handleClose }) {
  const map = useContext(MapContext);
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
    setLayerList((pre) => [newLayer, ...pre]);
    updateDefaultlayerName();
    handleClose();
  }
  function addGeoJSON(dataUrl) {
    const newLayer = new VectorLayer({
      layerName: getDefaultLayerName(),
      tags: [VectorTag, MultiPolygonTag],
      geometryType: MultiPolygonTag,
      style: createDefaultStyle(),
      source: new Vector({
        url: dataUrl,
        format: new GeoJSON(),
      }),
    });
    newLayer.getSource().once("change", () => {
      if (newLayer.getSource().getState() === "ready") {
        map.getView().fit(newLayer.getSource().getExtent());
      }
    });

    map.addLayer(newLayer);
    setLayerList((pre) => [newLayer, ...pre]);
    updateDefaultlayerName();
    handleClose();
  }
  return (
    <div className="grid grid-cols-5 gap-3 p-2 ">
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
      {geojsonMapping.map((item) => (
        <Btn
          key={item[0]}
          title={item[0]}
          handleClick={() => {
            addGeoJSON(item[1]);
          }}
        />
      ))}
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
