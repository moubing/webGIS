let index = 1;
const layerName = "unNamed";

export function getDefaultLayerName() {
  const defaultLayerName = layerName + index;
  return defaultLayerName;
}

export function updateDefaultlayerName() {
  index++;
}
