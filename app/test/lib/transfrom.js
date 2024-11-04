export function featuresToStingData(features) {
  return features.map((feature) => {
    const properties = feature.getProperties();
    const newProperties = {};
    newProperties["feature"] = feature;
    Object.entries(properties).forEach(([key, value]) => {
      if (value !== null && typeof value === "object") {
        if (Array.isArray(value)) {
          newProperties[key] = value.join(",");
        }
      } else {
        newProperties[key] = value.toString();
      }
    });
    return newProperties;
  });
}
