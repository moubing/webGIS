import { fromLonLat } from "ol/proj";

// 这里的这个string必须是长这个样子的字符串："102.701370,25.057400"
export function toLocation(string) {
  const position = string.split(",");
  const lon = +position[0];
  const lat = +position[1];
  return fromLonLat([lon, lat]);
}
