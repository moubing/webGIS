"use client";

import { useEffect, useState } from "react";
import { Map as olMap, View } from "ol";
import Kinetic from "ol/Kinetic";
import { OSM, Vector, XYZ } from "ol/source";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import { GeoJSON } from "ol/format";
import {
  DblClickDragZoom,
  DoubleClickZoom,
  DragPan,
  DragRotate,
  DragRotateAndZoom,
  DragZoom,
  KeyboardPan,
  KeyboardZoom,
  Link,
  MouseWheelZoom,
} from "ol/interaction";
import {
  platformModifierKeyOnly,
  focus,
  altShiftKeysOnly,
} from "ol/events/condition";
import {
  MousePosition,
  Attribution,
  FullScreen,
  OverviewMap,
  Rotate,
  ScaleLine,
  Zoom,
  ZoomSlider,
  ZoomToExtent,
} from "ol/control";
import {
  VectorTag,
  GeoJSONTag,
  TileTag,
  XYZTag,
  MultiPolygonTag,
} from "../../variables/tags";
import { createDefaultStyle } from "../../lib/createStyle";
import { customCoordinateFormat } from "../../lib/coordinateFormat";
import {
  ControlsContext,
  InteractionsContext,
  MapContext,
  VectorLayerContext,
} from "../../ctx/MapContext";

export function MapProvider({ children }) {
  const [map, setMap] = useState(null);
  const [interactions, setInteractions] = useState(null);
  const [controls, setControls] = useState(null);
  const [vectorLayer, setVectorLayer] = useState(null);

  useEffect(() => {
    const interactionList = [
      {
        name: "双击拖动缩放",
        interaction: new DblClickDragZoom({}),
        active: false,
        description: "双击后上下拖动即可缩放地图",
        useInfo: "双击 + 拖动",
      },
      {
        name: "双击放大",
        interaction: new DoubleClickZoom({}),
        active: true,
        description: "双击放大地图",
        useInfo: "双击",
      },
      {
        name: "键盘平移",
        interaction: new KeyboardPan({
          condition: focus,
        }),
        active: false,
        description: "使用方向键移动视图",
        useInfo: "地图获得焦点",
      },
      {
        name: "键盘缩放",
        interaction: new KeyboardZoom({
          condition: focus,
        }),
        active: false,
        description: "使用加减来缩放地图",
        useInfo: "地图获得焦点",
      },
      {
        name: "视图链接",
        interaction: new Link({ prefix: "ol" }),
        active: true,
        description: "页面刷新，保持视图状态",
        useInfo: "开启后默认生效",
      },
      {
        name: "滚动缩放",
        interaction: new MouseWheelZoom({}),
        active: true,
        description: "使用鼠标滚轮来缩放地图",
        useInfo: "鼠标滚轮",
      },
      {
        name: "拉框放大",
        interaction: new DragZoom({}),
        active: false,
        description: "放大框选区域",
        useInfo: "shift键 + 拖动",
      },
      {
        name: "拖动平移",
        interaction: new DragPan({
          kinetic: new Kinetic(-0.005, 0.05, 100),
        }),
        active: true,
        description: "使用拖动来移动视图",
        useInfo: "拖动",
      },
      {
        name: "拖动旋转缩放",
        interaction: new DragRotateAndZoom({
          condition: altShiftKeysOnly,
        }),
        active: true,
        description: "使用拖动来进行缩放和旋转",
        useInfo: "alt键 + shift键 + 拖动",
      },
      {
        name: "拖动旋转",
        interaction: new DragRotate({
          condition: platformModifierKeyOnly,
        }),
        active: true,
        description: "使用拖动来进行旋转",
        useInfo: "ctrl键 + 拖动",
      },
    ];
    const controlList = [
      {
        name: "mouse position",
        control: new MousePosition({
          className: "custom ol-mouse-position",
          coordinateFormat: customCoordinateFormat,
        }),
        check: true,
        description: "显示鼠标所在位置的经纬度",
        selector: ".custom.ol-mouse-position",
      },
      {
        name: "attribution",
        control: new Attribution({
          collapsible: true,
        }),
        check: true,
        description: "显示地图的相关信息",
        selector: ".ol-attribution",
      },
      {
        name: "full screen",
        control: new FullScreen({}),
        check: true,
        description: "全屏显示地图",
        selector: ".ol-full-screen",
      },
      {
        name: "overview map",
        control: new OverviewMap({
          className: "custom ol-overviewmap",
          layers: [
            new TileLayer({
              source: new OSM(),
            }),
          ],
          collapsed: false,
          view: new View({
            zoom: 3,
            center: [0, 0],
          }),
        }),
        check: true,
        description: "地图的缩略图",
        selector: ".custom.ol-overviewmap",
      },
      {
        name: "rotate",
        control: new Rotate({
          className: "custom ol-rotate",
        }),
        check: true,
        description: "旋转复位按钮",
        selector: ".custom.ol-rotate",
      },
      {
        name: "scale line",
        control: new ScaleLine({
          bar: true,
        }),
        check: true,
        description: "比例尺",
        selector: ".ol-scale-bar",
      },
      {
        name: "zoom slider",
        control: new ZoomSlider({
          className: "custom ol-zoomslider",
        }),
        check: true,
        description: "缩放滑块",
      },
      {
        name: "zoom to extent",
        control: new ZoomToExtent({
          className: "custom ol-zoom-extent",
        }),
        check: true,
        description: "缩放至图层",
        selector: ".custom.ol-zoom-extent",
      },
      {
        name: "zoom",
        control: new Zoom({
          className: "custom ol-zoom",
        }),
        check: true,
        description: "缩放按钮",
        selector: ".custom.ol-zoom",
      },
    ];

    const newMap = new olMap({
      interactions: [],
      controls: [],
      layers: [
        new VectorLayer({
          layerName: "geojson",
          tags: [VectorTag, GeoJSONTag],
          style: createDefaultStyle(),
          geometryType: MultiPolygonTag,
          source: new Vector({
            format: new GeoJSON(),
            url: "/data/jiangshu.geoJson",
          }),
        }),
        new TileLayer({
          layerName: "vector lable",
          tags: [TileTag, XYZTag],
          source: new XYZ({
            url: "http://t{0-7}.tianditu.gov.cn/cva_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=1609bb3d2a692f00a899ab2392dc38be",
          }),
        }),
        new TileLayer({
          layerName: "vector",
          tags: [TileTag, XYZTag],
          source: new XYZ({
            url: "http://t{0-7}.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=1609bb3d2a692f00a899ab2392dc38be",
          }),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 1,
      }),
    });

    const newInteractionArr = [];
    interactionList.forEach((item) => {
      item.interaction.set("name", item.name);
      item.interaction.set("active", item.active);
      item.interaction.set("description", item.description);
      item.interaction.set("useInfo", item.useInfo);
      newInteractionArr.push(item.interaction);
    });
    newMap.getInteractions().clear();
    newMap.getInteractions().extend(newInteractionArr);

    const newControlArr = [];
    controlList.forEach((item) => {
      item.control.set("name", item.name);
      item.control.set("check", item.check);
      item.control.set("description", item.description);
      item.control.set("selector", item.selector);
      newControlArr.push(item.control);
    });
    newMap.getControls().clear();
    newMap.getControls().extend(newControlArr);

    const newVectorLayer = new VectorLayer({
      source: new Vector({
        features: [],
      }),
    });
    newVectorLayer.setMap(newMap);

    setVectorLayer(newVectorLayer);
    setInteractions(newInteractionArr);
    setControls(newControlArr);
    setMap(newMap);
  }, []);
  return (
    <MapContext.Provider value={map}>
      <ControlsContext.Provider value={controls}>
        <InteractionsContext.Provider value={interactions}>
          <VectorLayerContext.Provider value={vectorLayer}>
            {map && children}
          </VectorLayerContext.Provider>
        </InteractionsContext.Provider>
      </ControlsContext.Provider>
    </MapContext.Provider>
  );
}
