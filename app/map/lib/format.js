import { format } from "ol/coordinate";

export function customCoordinateFormat(coord) {
  return format(coord, "Coordinate is ({x}|{y}).", 2);
}
