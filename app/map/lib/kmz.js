import JSZip from "jszip";
import { KML } from "ol/format";
const zip = new JSZip();

function getKMLData(buffer) {
  let kmlData;
  zip.load(buffer);
  const kmlFile = zip.file(/\.kml$/i)[0];
  if (kmlFile) {
    kmlData = kmlFile.asText();
  }
  return kmlData;
}

function getKMLImage(href) {
  const index = window.location.href.lastIndexOf("/");
  if (index !== -1) {
    const kmlFile = zip.file(href.slice(index + 1));
    if (kmlFile) {
      return URL.createObjectURL(new Blob([kmlFile.asArrayBuffer()]));
    }
  }
  return href;
}

// Define a KMZ format class by subclassing ol/format/KML

export class KMZ extends KML {
  constructor(opt_options) {
    const options = opt_options || {};
    options.iconUrlFunction = getKMLImage;
    super(options);
  }

  getType() {
    return "arraybuffer";
  }

  readFeature(source, options) {
    const kmlData = getKMLData(source);
    return super.readFeature(kmlData, options);
  }

  readFeatures(source, options) {
    const kmlData = getKMLData(source);
    return super.readFeatures(kmlData, options);
  }
}
