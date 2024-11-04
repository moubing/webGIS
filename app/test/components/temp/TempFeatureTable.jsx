"use client";

import { useContext } from "react";
import { SelectedFeaturesContext } from "../../ctx/LayerContext";
import { TempFallback } from "./TempFallback";

export function TempFeatureTable() {
  const selectedFeatures = useContext(SelectedFeaturesContext);
  if (selectedFeatures) {
    return (
      <div className=" overflow-auto h-full">
        <TableFields feature={selectedFeatures[0].getProperties()} />
        {selectedFeatures.map((item, index) => (
          <TableRow
            key={index}
            list={Object.values(item.getProperties()).filter((value) => {
              if (typeof value === "object") {
                if (Array.isArray(value) === true) {
                  return value.join();
                } else {
                  return null;
                }
              } else {
                return value.toString();
              }
            })}
          />
        ))}
      </div>
    );
  } else {
    return <TempFallback />;
  }
}

function TableFields({ feature }) {
  const keys = Object.keys(feature).filter((key) => key !== "geometry");
  return <TableRow list={keys} />;
}

function TableRow({ list }) {
  return (
    <div className="flex items-center border-b-2 divide-x-2">
      {list.map((item, index) => (
        <div className="text-center px-2 py-1" key={index}>
          {item}
        </div>
      ))}
    </div>
  );
}
