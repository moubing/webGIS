import { LineStyleSetting } from "../components/StyleSetting/LineStyleSetting";
import { PointStyleSetting } from "../components/StyleSetting/PointStyleSetting";
import { PolygonStyleSetting } from "../components/StyleSetting/PolygonStyleSetting";
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
} from "./tags";

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
