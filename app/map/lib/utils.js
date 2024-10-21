import { GeoJSON } from "ol/format";
import VectorLayer from "ol/layer/Vector";
import { fromLonLat } from "ol/proj";
import { Vector } from "ol/source";
import CircleStyle from "ol/style/Circle";
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";
import Style from "ol/style/Style";
import shp from "shpjs";
import { VectorTag } from "./tags";
import Icon from "ol/style/Icon";

// 这里的这个string必须是长这个样子的字符串："102.701370,25.057400"
export function toLocation(string) {
  const position = string.split(",");
  const lon = +position[0];
  const lat = +position[1];
  return fromLonLat([lon, lat]);
}

export async function shpToGeoJson(file, name) {
  const data = await file.arrayBuffer();
  const geojson = await shp(data);
  const vSource = new Vector({
    features: new GeoJSON({ featureProjection: "EPSG:3857" }).readFeatures(
      geojson
    ),
  });
  return new VectorLayer({
    layerName: name,
    source: vSource,
    geometryType: vSource.getFeatures()[0].getGeometry().getType(),
    tags: [VectorTag, "shp"],
  });
}

export function createDefaultStyle() {
  return new Style({
    fill: new Fill({
      color: "#ffffff66",
    }),
    stroke: new Stroke({
      color: "#3399CCff",
      width: 1.25,
      lineCap: "round",
      lineJoin: "round",
      lineDash: null,
    }),
    image: new Icon({
      src: "/icons/点.png",
      height: 18,
      width: 18,
      color: "#ffffff",
      opacity: 0.4,
    }),
  });
}
