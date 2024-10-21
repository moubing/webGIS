"use client";

import { useContext, useEffect, useRef, useState } from "react";
import { EditLayerContext, SetEditLayerContext } from "../ctx/EditLayerContext";

import { FaRegSave } from "react-icons/fa";
import { CgCloseR } from "react-icons/cg";
import { IconContainer } from "@/app/components/IconContainer";
import { ModifyCom } from "./editBar/ModifyCom";
import { DrawCom } from "./editBar/DrawCom";
import { ClickSelection } from "./editBar/ClickSelection";
import { BoxSelection } from "./editBar/BoxSelection";
import { TranslateCom } from "./editBar/TranslateCom";
import { SetSelectedFeaturesContext } from "../ctx/SelectedFeaturesContext";
import { GeoJSON } from "ol/format";

// 需要editLayer， 通过EditLayerContext获得
// 如果editlayer为空，这个组件就不挂载

// 现在这个功能只能编辑要素的几何，还不能编辑属性
// 还有一个问题就是，只有编辑了（就是改变了数据源）才能保存

export function EditBar() {
  const editLayer = useContext(EditLayerContext);
  const setEditLayer = useContext(SetEditLayerContext);
  const setSelectedFeatures = useContext(SetSelectedFeaturesContext);
  const [selectedId, setSelectedId] = useState(0);
  const [format, setFormat] = useState(
    new GeoJSON({ featureProjection: "EPSG:3857" })
  );
  const donwloadRef = useRef(null);

  useEffect(() => {
    if (!editLayer) return;
    const download = donwloadRef.current;
    function sourceChange() {
      const features = editLayer.getSource().getFeatures();
      const json = format.writeFeatures(features);
      if (download) {
        download.href =
          "data:application/json;charset=utf-8," + encodeURIComponent(json);
      }
    }
    editLayer.getSource().on("change", sourceChange);
    return () => {
      editLayer.getSource().un("change", sourceChange);
    };
  }, [editLayer, format]);

  return (
    editLayer && (
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 rounded-lg shadow-md p-3 flex items-center gap-2 bg-white/30 backdrop-blur-xl">
        <h1 className="p-2 bg-white/60 shadow-md rounded-md">
          {editLayer.get("layerName")}
        </h1>
        <ClickSelection isSelected={selectedId === 0} setId={setSelectedId} />
        <BoxSelection isSelected={selectedId === 1} setId={setSelectedId} />
        <TranslateCom isSelected={selectedId === 2} setId={setSelectedId} />
        <ModifyCom isSelected={selectedId === 3} setId={setSelectedId} />
        <DrawCom isSelected={selectedId === 4} setId={setSelectedId} />
        <a ref={donwloadRef} download={"feature.geoJson"}>
          <IconContainer handler={() => {}} tooltip="保存">
            <FaRegSave />
          </IconContainer>
        </a>
        <IconContainer
          tooltip="退出"
          handler={() => {
            setEditLayer(null);
            setSelectedFeatures(null);
          }}
        >
          <CgCloseR />
        </IconContainer>
      </div>
    )
  );
}
