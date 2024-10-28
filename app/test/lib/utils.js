import { fromLonLat } from "ol/proj";

// 这里的这个string必须是长这个样子的字符串："102.701370,25.057400"
export function toLocation(string) {
  const position = string.split(",");
  const lon = +position[0];
  const lat = +position[1];
  return fromLonLat([lon, lat]);
}

export function getAccumulateRandomData(startData, account, range) {
  let data = [startData];

  for (let i = 1; i < account; i++) {
    data.push(
      Math.round(Math.random() * (range[1] - range[0]) + range[0] + data[i - 1])
    );
  }
  return data;
}
