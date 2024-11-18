"use client";

import { useContext, useState } from "react";
import { defaultTileLayerOption } from "../../defaultOptions/defaultLayerOptions";
import { defaultGeoTIFFSourceOption } from "../../defaultOptions/defaultTileSourceOptions";
import { OptionContainer } from "./OptionContainer";
import {
  getDefaultLayerName,
  updateDefaultlayerName,
} from "../../defaultOptions/defaultLayerName";
import { InputMB } from "@/app/components/InputMB";
import { CancleBtn, ConfirmBtn } from "@/app/components/Buttons";
import { CheckboxMB } from "@/app/components/CheckBoxMB";
import { MapContext } from "../../ctx/MapContext";
import WebGLTileLayer from "ol/layer/WebGLTile.js";
import { GeoTIFF } from "ol/source";
import { SetLayerListContext } from "../../ctx/LayerContext";
import { GeoTIFFTag, UserLayerTag, WebGLTileTag } from "../../variables/tags";

export function GeoTIFFOption({ handleClose }) {
  let defalutLayerName = getDefaultLayerName();
  const map = useContext(MapContext);
  const setLayerList = useContext(SetLayerListContext);

  const [tileLayerOption, setTileLayerOption] = useState({
    ...defaultTileLayerOption,
    layerName: defalutLayerName,
  });
  const [geotiffSourceOption, setGeoTIFFSourceOption] = useState(
    defaultGeoTIFFSourceOption
  );
  const [layerNameErrorMessage, setLayerNameErrorMessage] = useState(null);
  const [urlErrorMessage, setURLErrorMessage] = useState(null);

  function handleLayerOption(key, value) {
    setTileLayerOption({ ...tileLayerOption, [key]: value });
  }
  function handleSourceOption(key, value) {
    setGeoTIFFSourceOption({ ...geotiffSourceOption, [key]: value });
  }

  function handleAddLayer(tileLayerOption, geotiffSourceOption) {
    // 检查必填项是不是填了，还有图层名称是否冲突，目前的检查值做到这些
    let isError = false;
    if (!tileLayerOption["layerName"]) {
      isError = true;
      setLayerNameErrorMessage("缺少图层名称");
    }

    const layerNameArr = map.getAllLayers().map((layer) => {
      return layer.get("layerName");
    });

    if (layerNameArr.includes(tileLayerOption["layerName"])) {
      isError = true;
      setLayerNameErrorMessage("该图层名称已存在");
    }

    if (!geotiffSourceOption["url"]) {
      isError = true;
      setURLErrorMessage("缺少url");
    }
    if (isError) return;

    const newLayer = new WebGLTileLayer(tileLayerOption);
    const sourceArr = [{ url: geotiffSourceOption.url }];
    geotiffSourceOption.sources = sourceArr;
    const newSource = new GeoTIFF(geotiffSourceOption);
    newLayer.setSource(newSource);
    newLayer.set("tags", [WebGLTileTag, GeoTIFFTag]);
    newLayer.set("layerType", UserLayerTag);

    map.addLayer(newLayer);
    newLayer.setZIndex(map.getAllLayers().length + 1);

    setLayerList((pre) => [newLayer, ...pre]);
    updateDefaultlayerName();
    handleClose();
  }

  return (
    <div className="p-2 space-y-4">
      <section className=" h-[350px] bg-gray-100 p-4 rounded-lg shadow-md grid grid-cols-2 gap-2">
        <OptionContainer title={"瓦片图层"}>
          <InputMB
            optionKey={"layerName"}
            value={tileLayerOption["layerName"]}
            handleChange={handleLayerOption}
            isRequired={true}
            errorMessage={layerNameErrorMessage}
          />
          <InputMB
            optionKey={"opacity"}
            type="number"
            value={tileLayerOption["opacity"]}
            handleChange={handleLayerOption}
          />
          <InputMB
            optionKey={"preload"}
            type="number"
            value={tileLayerOption["preload"]}
            handleChange={handleLayerOption}
          />
          <CheckboxMB
            optionKey={"visible"}
            initialState={tileLayerOption["visible"]}
            handlerChange={handleLayerOption}
          />
          <CheckboxMB
            optionKey={"useInterimTilesOnError"}
            initialState={tileLayerOption["useInterimTilesOnError"]}
            handlerChange={handleLayerOption}
          />
        </OptionContainer>
        <OptionContainer title={"GeoTIFF数据源"}>
          <InputMB
            optionKey={"url"}
            value={geotiffSourceOption["url"]}
            handleChange={handleSourceOption}
            isRequired={true}
            errorMessage={urlErrorMessage}
          />
          <InputMB
            type="number"
            optionKey={"transition"}
            value={geotiffSourceOption["transition"]}
            handleChange={handleSourceOption}
          />
          <CheckboxMB
            optionKey={"interpolate"}
            initialState={geotiffSourceOption["interpolate"]}
            handlerChange={handleSourceOption}
          />
          <CheckboxMB
            optionKey={"opaque"}
            initialState={geotiffSourceOption["opaque"]}
            handlerChange={handleSourceOption}
          />
          <CheckboxMB
            optionKey={"convertToRGB"}
            initialState={geotiffSourceOption["convertToRGB"]}
            handlerChange={handleSourceOption}
          />
          <CheckboxMB
            optionKey={"normalize"}
            initialState={geotiffSourceOption["normalize"]}
            handlerChange={handleSourceOption}
          />
          <CheckboxMB
            optionKey={"wrapX"}
            initialState={geotiffSourceOption["wrapX"]}
            handlerChange={handleSourceOption}
          />
        </OptionContainer>
      </section>
      <section className="flex items-center justify-end gap-3">
        <CancleBtn handleCancle={handleClose} />
        <ConfirmBtn
          handleConfirm={() => {
            handleAddLayer(tileLayerOption, geotiffSourceOption);
          }}
        />
      </section>
    </div>
  );
}
