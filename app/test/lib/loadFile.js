import { GeoJSON } from "ol/format";
import VectorLayer from "ol/layer/Vector";
import { Vector } from "ol/source";
import shp from "shpjs";
import { VectorTag } from "../variables/tags";

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
