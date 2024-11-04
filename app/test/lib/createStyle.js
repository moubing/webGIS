import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";
import Style from "ol/style/Style";
import Icon from "ol/style/Icon";

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

// 以后这应该是一个函数，根据不同的geometry的类型来返回对应的选中style
export const selectedStyle = new Style({
  fill: new Fill({
    color: "#e5e7ebaa",
  }),
  stroke: new Stroke({
    color: "#eab308",
    width: 2,
  }),
  zIndex: 9999,
});
