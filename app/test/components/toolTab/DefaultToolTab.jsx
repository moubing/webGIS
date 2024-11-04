"use client";

import { TabPanel } from "@headlessui/react";
import { CustomTab } from "../consoleTab/CustomTab";
import { Vector } from "ol/source";
import VectorLayer from "ol/layer/Vector";
import { useContext, useEffect, useState } from "react";
import { MapContext } from "../../ctx/MapContext";
import { Draw } from "ol/interaction";
import { altShiftKeysOnly } from "ol/events/condition";
import clsx from "clsx";
import { getLength, getArea } from "ol/sphere";

export function DefaultToolTab() {
  return <CustomTab>默认</CustomTab>;
}

export function DefaultToolPanel() {
  const map = useContext(MapContext);
  const [isDistance, setIsDistance] = useState(false);
  const [isArea, setIsArea] = useState(false);
  const [_, rerender] = useState({});
  const [measureVectorLayer] = useState(
    new VectorLayer({
      source: new Vector({
        features: [],
      }),
    })
  );
  const [distanceDraw] = useState(
    new Draw({
      type: "LineString",
      freehandCondition: altShiftKeysOnly,
      source: measureVectorLayer.getSource(),
    })
  );
  const [areaDraw] = useState(
    new Draw({
      type: "Polygon",
      freehandCondition: altShiftKeysOnly,
      source: measureVectorLayer.getSource(),
    })
  );

  useEffect(() => {
    function handleDrawEnd(e) {
      const feature = e.feature;
      const length = parseFloat(getLength(feature.getGeometry()).toFixed(2));
      feature.setProperties({ length });
      rerender({});
    }
    if (isDistance) {
      distanceDraw.on("drawend", handleDrawEnd);
      map.addInteraction(distanceDraw);
      measureVectorLayer.setMap(map);
      measureVectorLayer.getSource().clear();
    }
    return () => {
      distanceDraw.un("drawend", handleDrawEnd);
      map.removeInteraction(distanceDraw);
      measureVectorLayer.setMap(null);
      measureVectorLayer.getSource().clear();
    };
  }, [isDistance, map, measureVectorLayer, distanceDraw]);

  useEffect(() => {
    function handleDrawEnd(e) {
      const feature = e.feature;
      const area = parseFloat(getArea(feature.getGeometry()).toFixed(2));
      feature.setProperties({ area });
      rerender({});
    }
    if (isArea) {
      areaDraw.on("drawend", handleDrawEnd);
      map.addInteraction(areaDraw);
      measureVectorLayer.setMap(map);
      measureVectorLayer.getSource().clear();
    }
    return () => {
      areaDraw.un("drawend", handleDrawEnd);
      map.removeInteraction(areaDraw);
      measureVectorLayer.setMap(null);
      measureVectorLayer.getSource().clear();
    };
  }, [isArea, map, measureVectorLayer, areaDraw]);
  const features = measureVectorLayer.getSource().getFeatures();
  console.log(features);
  return (
    <TabPanel className="relative overflow-auto flex-grow text-sm text-slate-500 shadow-lg focus:outline-none p-2 bg-gray-200 ">
      <div className="flex items-center gap-2">
        <button
          className={clsx("px-2 py-1 rounded-md shadow-md ", {
            "bg-sky-200 text-slate-700": isDistance,
            "bg-white": !isDistance,
          })}
          onClick={() => {
            setIsDistance((pre) => !pre);
            setIsArea(false);
            measureVectorLayer.getSource().clear();
          }}
        >
          测量距离
        </button>
        <button
          className={clsx("px-2 py-1 rounded-md shadow-md ", {
            "bg-sky-200 text-slate-700": isArea,
            "bg-white": !isArea,
          })}
          onClick={() => {
            setIsArea((pre) => !pre);
            setIsDistance(false);
            measureVectorLayer.getSource().clear();
          }}
        >
          测量面积
        </button>
        <button
          onClick={() => {
            measureVectorLayer.getSource().clear();
          }}
          className="px-2 bg-white py-1 rounded-md shadow-md "
        >
          清除
        </button>
      </div>
      <div>
        {features.length === 0 ? (
          <div className="h-32 flex items-center justify-center bg-gray-50 rounded-md shadow-md mt-2 font-bold text-lg">
            还没有绘制要素
          </div>
        ) : (
          <div className="mt-2 space-y-1">
            {features.map((feature, index) => (
              <div
                className="px-2 py-1 rounded-sm shadow-sm flex items-center justify-between bg-white"
                key={index}
              >
                <div>{"feature" + (index + 1)}</div>
                <div>
                  {isDistance && feature.getProperties().length + "(周长/米)"}
                  {isArea && feature.getProperties().area + "(面积/平方米)"}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </TabPanel>
  );
}
