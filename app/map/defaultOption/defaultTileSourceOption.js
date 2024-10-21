export const defaultXYZSourceOption = {
  url: undefined,
  attributions: undefined,
  interpolate: true,
  opaque: false,
  zDirection: 0,
  maxZoom: 42,
  minZoom: 0,
};

// 这里的sources配置是一个数组，里面的每个元素是一个sourceInfo对象
// sourceInfo对象里面有url，bands等相关配置
// 这里时间不够了，我只能还是只是处理一个url，后续将把功能补上

export const defaultGeoTIFFSourceOption = {
  // sources: [],
  url: undefined,
  transition: 250,
  convertToRGB: false,
  normalize: true,
  opaque: false,
  wrapX: true,
  interpolate: true,
};
