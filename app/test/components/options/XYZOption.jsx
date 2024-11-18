"use client";

import { useContext, useState } from "react";
import { defaultTileLayerOption } from "../../defaultOptions/defaultLayerOptions";
import { defaultXYZSourceOption } from "../../defaultOptions/defaultTileSourceOptions";
import { OptionContainer } from "./OptionContainer";
import {
  getDefaultLayerName,
  updateDefaultlayerName,
} from "../../defaultOptions/defaultLayerName";
import { InputMB } from "@/app/components/InputMB";
import { CancleBtn, ConfirmBtn } from "@/app/components/Buttons";
import { CheckboxMB } from "@/app/components/CheckBoxMB";
import { MapContext } from "../../ctx/MapContext";
import { XYZ } from "ol/source";
import { TileTag, UserLayerTag, XYZTag } from "../../variables/tags";
import { SetLayerListContext } from "../../ctx/LayerContext";
import TileLayer from "ol/layer/Tile";

//todo 这些加载图层的option都要好好看看，有很多重复的地方
//todo 想办法把它们压缩一下
//todo 这个handleAddLayer要优化一下

export function XYZOption({ handleClose }) {
  let defalutLayerName = getDefaultLayerName();
  const map = useContext(MapContext);
  const setLayerList = useContext(SetLayerListContext);

  const [tileLayerOption, setTileLayerOption] = useState({
    ...defaultTileLayerOption,
    layerName: defalutLayerName,
  });
  const [xyzSourceOption, setXYZSourceOption] = useState(
    defaultXYZSourceOption
  );
  const [layerNameErrorMessage, setLayerNameErrorMessage] = useState(null);
  const [urlErrorMessage, setURLErrorMessage] = useState(null);

  function handleLayerOption(key, value) {
    setTileLayerOption({ ...tileLayerOption, [key]: value });
  }
  function handleSourceOption(key, value) {
    setXYZSourceOption({ ...xyzSourceOption, [key]: value });
  }

  function handleAddLayer(tileLayerOption, xyzSourceOption) {
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

    if (!xyzSourceOption["url"]) {
      isError = true;
      setURLErrorMessage("缺少url");
    }
    if (isError) return;

    const newLayer = new TileLayer(tileLayerOption);
    const newSource = new XYZ(xyzSourceOption);
    newLayer.setSource(newSource);
    newLayer.set("tags", [TileTag, XYZTag]);
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
        <OptionContainer title={"XYZ数据源"}>
          <InputMB
            optionKey={"url"}
            value={xyzSourceOption["url"]}
            handleChange={handleSourceOption}
            isRequired={true}
            errorMessage={urlErrorMessage}
          />
          <InputMB
            optionKey={"attributions"}
            value={xyzSourceOption["attributions"]}
            handleChange={handleSourceOption}
          />
          <InputMB
            type="number"
            optionKey={"maxZoom"}
            value={xyzSourceOption["maxZoom"]}
            handleChange={handleSourceOption}
          />
          <InputMB
            type="number"
            optionKey={"minZoom"}
            value={xyzSourceOption["minZoom"]}
            handleChange={handleSourceOption}
          />
          <InputMB
            type="number"
            optionKey={"zDirection"}
            value={xyzSourceOption["zDirection"]}
            handleChange={handleSourceOption}
          />
          <CheckboxMB
            optionKey={"interpolate"}
            initialState={xyzSourceOption["interpolate"]}
            handlerChange={handleSourceOption}
          />
          <CheckboxMB
            optionKey={"opaque"}
            initialState={xyzSourceOption["opaque"]}
            handlerChange={handleSourceOption}
          />
        </OptionContainer>
      </section>
      <section className="flex items-center justify-end gap-3">
        <CancleBtn handleCancle={handleClose} />
        <ConfirmBtn
          handleConfirm={() => {
            handleAddLayer(tileLayerOption, xyzSourceOption);
          }}
        />
      </section>
    </div>
  );
}
