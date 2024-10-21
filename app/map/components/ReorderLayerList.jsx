"use client";

import { useContext, useEffect, useState } from "react";
import { Reorder } from "framer-motion";
import { BaseLayerCard } from "./BaseLayerCard";
import { EditBtn } from "./EditBtn";
import { LayerListContext, SetLayerListContext } from "../ctx/LayerListContext";
import { ZoomToLayerBtn } from "./ZoomToLayerBtn";
import { MapContext } from "../ctx/MapContext";
import { DragAndDrop } from "ol/interaction";
import { GeoJSON, GPX, IGC, KML, TopoJSON } from "ol/format";
import { Vector } from "ol/source";
import VectorLayer from "ol/layer/Vector";
import { KMZ } from "../lib/kmz";
import { supportFormat } from "@/app/globalVarible";
import { GeoTIFFTag, VectorTag } from "../lib/tags";
import { createDefaultStyle } from "../lib/utils";

// 不是通用的，以后看看能不能改成通用的

//! 状态描述
// layerList: 一个数组，里面的元素是一个layer
// setLayerList: 这个数组相应的set函数

// layer: {
//     layerName: string,
//     tags: string[],
//     source: Source,
// }

//! layer的结构以后会多增加一个字段id

// tags[0] : 图层类型标签 --> tile|image|vector|vectorImage|vectorTiel|webGLTile
// tags[1] : 数据源标签 --> geoJson|XYZ|...
// tags[2...] : 自定义标签

//todo 这里的tags数组可能改成set比较好

//! 这里我将layers设置为state，因为后面的reorder需要这个状态
//! 所以一定要注意更改了layers的状态后，记得同步更新map中的layer

// 这里关于拖拽有个问题就是，如果拖拽加载同一个文件两次，这里的这个layerName就会冲突
// todo 这里要加一个名字的检查 2024/10/20 16:44

export function ReorderLayerList() {
  const map = useContext(MapContext);
  const layerList = useContext(LayerListContext);
  const setLayerList = useContext(SetLayerListContext);
  const [dragAndDrop, set_] = useState(
    new DragAndDrop({
      formatConstructors: [KMZ, KML, GPX, GeoJSON, TopoJSON, IGC],
    })
  );

  useEffect(() => {
    function addFeatures(e) {
      let vSource;
      const fileName = e.file.name;
      const [name, extendName] = fileName.split(".");

      if (!supportFormat.some((item) => item === extendName)) {
        return;
      } else {
        vSource = new Vector({
          features: e.features,
        });
      }
      const vLayer = new VectorLayer({
        source: vSource,
        layerName: name,
        style: createDefaultStyle(),
        geometryType: vSource.getFeatures()[0].getGeometry().getType(),
        tags: [VectorTag, extendName],
      });
      map.addLayer(vLayer);
      map.getView().fit(vSource.getExtent());
      setLayerList([vLayer, ...layerList]);
    }
    dragAndDrop.on("addfeatures", addFeatures);
    map.addInteraction(dragAndDrop);

    return () => {
      dragAndDrop.un("addfeatures", addFeatures);
      map.removeInteraction(dragAndDrop);
    };
  }, [layerList, setLayerList, map, dragAndDrop]);

  return (
    <Reorder.Group
      axis="y"
      values={layerList}
      onReorder={setLayerList}
      className="space-y-2 p-4 w-80"
    >
      {layerList.map((layer, index, arr) => (
        <Reorder.Item
          initial={{ scale: 1, boxShadow: "0px 0px 0px 0px #ec4899" }}
          whileDrag={{ scale: 1.05, boxShadow: "0px 0px 5px 2px #ec4899" }}
          key={layer.get("layerName")}
          value={layer}
          className="relative hover:z-50 z-0"
        >
          <BaseLayerCard layer={layer} zIndex={arr.length - index}>
            {layer.get("tags")[0] === VectorTag && <EditBtn layer={layer} />}
            {layer.get("tags")[1] === GeoTIFFTag && (
              <ZoomToLayerBtn layer={layer} />
            )}
          </BaseLayerCard>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}
