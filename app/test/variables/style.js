// 矢量图层样式
export const white = "#ffffff";
export const gray200 = "#e5e7eb";
export const green200 = "#bbf7d0";
export const yellow200 = "#fef08a";
export const sky200 = "#bae6fd";
export const pink200 = "#fbcfe8";
export const violet200 = "#ddd6fe";
export const blue = "#3399CC";
export const gray500 = "#6b7280";
export const green500 = "#22c55e";
export const yellow500 = "#eab308";
export const sky500 = "#0ea5e9";
export const pink500 = "#ec4899";
export const violet500 = "#8b5cf6";

const fillColor = [
  white,
  gray200,
  green200,
  yellow200,
  sky200,
  pink200,
  violet200,
];
export const strokeColor = [
  blue,
  gray500,
  green500,
  yellow500,
  sky500,
  pink500,
  violet500,
];

export function isFillColor(color) {
  return fillColor.includes(color);
}

export function isStrokeColor(color) {
  return strokeColor.includes(color);
}

export const thin = 1.25;
export const mid = 2.25;
export const bold = 3.25;
export const veryBold = 4.25;

export const round = "round";
export const butt = "butt";
export const square = "square";
export const miter = "miter";
export const bevel = "bevel";

export const dashArr = [10, 10];

export const xsmall = 5;
export const small = 10;
export const big = 15;
export const xbig = 20;

export const colorMaps = [
  "jet",
  "hsv",
  "hot",
  "cool",
  "spring",
  "summer",
  "autumn",
  "winter",
  "bone",
  "copper",
  "greys",
  "greens",
  "YIOrRd",
  "plasma",
  "warm",
  "phase",
];
