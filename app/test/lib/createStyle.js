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
