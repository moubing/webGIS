"use client";

import { useContext, useState } from "react";
import {
  getDefaultLayerName,
  updateDefaultlayerName,
} from "../../defaultOptions/defaultLayerName";
import { defaultVectorLayerOption } from "../../defaultOptions/defaultLayerOptions";
import { defaultGeoJSONSourceOption } from "../../defaultOptions/defaultVectorSourceOption";
import VectorLayer from "ol/layer/Vector";
import { Vector } from "ol/source";
import { GeoJSON } from "ol/format";
import { OptionContainer } from "./OptionContainer";
import { InputMB } from "@/app/components/InputMB";
import { CheckboxMB } from "@/app/components/CheckBoxMB";
import { MapContext } from "../../ctx/MapContext";
import { CancleBtn, ConfirmBtn } from "@/app/components/Buttons";
import { GeoJSONTag, VectorTag } from "../../variables/tags";
import { SetLayerListContext } from "../../ctx/LayerContext";

export function GeoJSONOption({ handleClose }) {
  let defalutLayerName = getDefaultLayerName();
  const map = useContext(MapContext);
  const setLayerList = useContext(SetLayerListContext);

  const [vectorLayerOption, setVectorLayerOption] = useState({
    ...defaultVectorLayerOption,
    layerName: defalutLayerName,
  });
  const [geojsonSourceOption, setGeojsonSourceOption] = useState(
    defaultGeoJSONSourceOption
  );
  const [layerNameErrorMessage, setLayerNameErrorMessage] = useState(null);
  const [urlErrorMessage, setURLErrorMessage] = useState(null);

  function handleLayerOption(key, value) {
    setVectorLayerOption({ ...vectorLayerOption, [key]: value });
  }
  function handleSourceOption(key, value) {
    setGeojsonSourceOption({ ...geojsonSourceOption, [key]: value });
  }

  function handleAddLayer(vectorLayerOption, geojsonSourceOption) {
    // 检查必填项是不是填了，还有图层名称是否冲突，目前的检查值做到这些
    let isError = false;
    if (!vectorLayerOption["layerName"]) {
      isError = true;
      setLayerNameErrorMessage("缺少图层名称");
    }

    const layerNameArr = map.getAllLayers().map((layer) => {
      return layer.get("layerName");
    });

    if (layerNameArr.includes(vectorLayerOption["layerName"])) {
      isError = true;
      setLayerNameErrorMessage("该图层名称已存在");
    }

    if (!geojsonSourceOption["url"]) {
      isError = true;
      setURLErrorMessage("缺少url");
    }
    if (isError) return;

    const newLayer = new VectorLayer(vectorLayerOption);
    geojsonSourceOption.format = new GeoJSON();
    const newSource = new Vector(geojsonSourceOption);
    newSource.once("change", () => {
      newLayer.set(
        "geometryType",
        newSource.getFeatures()[0].getGeometry().getType()
      );
    });
    newLayer.setSource(newSource);
    newLayer.set("tags", [VectorTag, GeoJSONTag]);
    map.addLayer(newLayer);
    newLayer.setZIndex(map.getAllLayers().length + 1);

    setLayerList((pre) => [newLayer, ...pre]);
    updateDefaultlayerName();
    handleClose();
  }

  return (
    <div className="p-2 space-y-4">
      <section className=" h-[350px] bg-gray-100 p-4 rounded-lg shadow-md grid grid-cols-2 gap-2">
        <OptionContainer title={"矢量图层"}>
          <InputMB
            optionKey={"layerName"}
            value={vectorLayerOption["layerName"]}
            handleChange={handleLayerOption}
            isRequired={true}
            errorMessage={layerNameErrorMessage}
          />
          <InputMB
            optionKey={"opacity"}
            type="number"
            value={vectorLayerOption["opacity"]}
            handleChange={handleLayerOption}
          />
          <InputMB
            optionKey={"preload"}
            type="number"
            value={vectorLayerOption["preload"]}
            handleChange={handleLayerOption}
          />
          <InputMB
            optionKey={"renderBuffer"}
            type="number"
            value={vectorLayerOption["preload"]}
            handleChange={handleLayerOption}
          />
          <CheckboxMB
            optionKey={"visible"}
            initialState={vectorLayerOption["visible"]}
            handlerChange={handleLayerOption}
          />
          <CheckboxMB
            optionKey={"declutter"}
            initialState={vectorLayerOption["declutter"]}
            handlerChange={handleLayerOption}
          />
          <CheckboxMB
            optionKey={"updateWhileAnimating"}
            initialState={vectorLayerOption["updateWhileAnimating"]}
            handlerChange={handleLayerOption}
          />
          <CheckboxMB
            optionKey={"updateWhileInteracting"}
            initialState={vectorLayerOption["updateWhileInteracting"]}
            handlerChange={handleLayerOption}
          />
        </OptionContainer>
        <OptionContainer title={"GeoJSON数据源"}>
          <InputMB
            optionKey={"url"}
            value={geojsonSourceOption["url"]}
            handleChange={handleSourceOption}
            isRequired={true}
            errorMessage={urlErrorMessage}
          />
          <InputMB
            optionKey={"attributions"}
            value={geojsonSourceOption["attributions"]}
            handleChange={handleSourceOption}
          />
          <CheckboxMB
            optionKey={"overlaps"}
            initialState={geojsonSourceOption["overlaps"]}
            handlerChange={handleSourceOption}
          />
          <CheckboxMB
            optionKey={"useSpatialIndex"}
            initialState={geojsonSourceOption["useSpatialIndex"]}
            handlerChange={handleSourceOption}
          />
          <CheckboxMB
            optionKey={"wrapX"}
            initialState={geojsonSourceOption["wrapX"]}
            handlerChange={handleSourceOption}
          />
        </OptionContainer>
      </section>
      <section className="flex items-center justify-end gap-3">
        <CancleBtn handleCancle={handleClose} />
        <ConfirmBtn
          handleConfirm={() => {
            handleAddLayer(vectorLayerOption, geojsonSourceOption);
          }}
        />
      </section>
    </div>
  );
}
