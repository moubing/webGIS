import { LineStyleSetting } from "../components/styleSetting/LineStyleSetting";
import { PolygonStyleSetting } from "../components/styleSetting/PolygonStyleSetting";
import { PointStyleSetting } from "../components/styleSetting/PointStyleSetting";

import {
  CircleTag,
  GeometryCollectionTag,
  LinearRingTag,
  LineStringTag,
  MultiLineStringTag,
  MultiPointTag,
  MultiPolygonTag,
  PointTag,
  PolygonTag,
} from "../variables/tags";

export const styleSettingMap = new Map([
  [PointTag, PointStyleSetting],
  [MultiPointTag, PointStyleSetting],
  [LineStringTag, LineStyleSetting],
  [MultiLineStringTag, LineStyleSetting],
  [PolygonTag, PolygonStyleSetting],
  [MultiPolygonTag, PolygonStyleSetting],
  [GeometryCollectionTag, PolygonStyleSetting],
  [LinearRingTag, PolygonStyleSetting],
  [CircleTag, PointStyleSetting],
]);
