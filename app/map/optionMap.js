import { XYZOption } from "./components/options/XYZOption";
import { FallbackOption } from "./components/options/FallbackOption";
import { GeoJSONOption } from "./components/options/GeoJSONOption";
import { GeoTIFFOption } from "./components/options/GeoTIFFOption";

export const optionMap = new Map([
  ["XYZ", XYZOption],
  ["GeoJSON", GeoJSONOption],
  ["GeoTIFF", GeoTIFFOption],
  ["KML", FallbackOption],
  ["WFS", FallbackOption],
  ["MVT", FallbackOption],
]);
