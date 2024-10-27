import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";
import Style from "ol/style/Style";
import CircleStyle from "ol/style/Circle.js";
import Icon from "ol/style/Icon";
import Text from "ol/style/Text";

export const pointStyle1 = new Style({
  image: new CircleStyle({
    radius: 7,
    fill: new Fill({
      color: "#aaa",
    }),
    stroke: new Stroke({
      color: "#fff",
      width: 2,
    }),
  }),
});

export const locationStyle = new Style({
  image: new Icon({
    src: "/icons/location.png",
    width: 48,
    height: 48,
  }),
});
