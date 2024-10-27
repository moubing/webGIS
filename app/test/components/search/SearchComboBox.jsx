"use client";

import { Combobox, ComboboxInput, ComboboxOptions } from "@headlessui/react";
import { useContext, useRef, useState } from "react";
import {
  RecordsContext,
  SetRecordsContext,
  SetResultsContext,
} from "../../ctx/SearchContext";
import { IoSearch } from "react-icons/io5";
import {
  count,
  key,
  normalSearchURL,
  queryType,
  specify,
  start,
} from "../../variables/searchParams";
import { MapContext, VectorLayerContext } from "../../ctx/MapContext";
import { Feature } from "ol";
import { Records, Results } from "./RecordsAndResults";
import { Point } from "ol/geom";
import { locationStyle } from "../../lib/preMadeStyles";
import Text from "ol/style/Text";
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";
import { toLocation } from "../../lib/utils";

// 这里的input要发请求获得数据

export function SearchComboBox({ handleClose }) {
  const map = useContext(MapContext);
  const records = useContext(RecordsContext);
  const setRecords = useContext(SetRecordsContext);
  const setResults = useContext(SetResultsContext);
  const vectorlayer = useContext(VectorLayerContext);
  const [selectedItem, setSelectedItem] = useState(null);
  const [query, setQuery] = useState("");
  const timer = useRef(null);

  function handleInput(e) {
    setQuery(e.target.value);
    clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      const requestUrl = `${normalSearchURL}?postStr={"keyWord":"${e.target.value}","queryType":${queryType},"start":${start},"count":${count},"specify":"${specify}"}&type=query&tk=${key}`;

      fetch(requestUrl)
        .then((res) => res.json())
        .then((data) => {
          if (data.pois) {
            setResults(data.pois);
          } else {
            setResults([]);
          }
        });
    }, 300);
  }
  return (
    <Combobox
      value={selectedItem}
      onChange={(value) => {
        if (!value) return;
        setSelectedItem(value);

        const location = toLocation(value.lonlat);
        const locationFeature = new Feature({
          geometry: new Point(location),
          name: value.name,
        });
        locationStyle.setText(
          new Text({
            text: value.name,
            font: "bold 16px sans-serif",
            offsetY: -50,
            padding: [5, 8, 5, 8],
            fill: new Fill({
              color: "#ea4899",
            }),
            backgroundFill: new Fill({
              color: "#ffffffae",
            }),
            backgroundStroke: new Stroke({
              color: "#ea4899",
              width: 2,
              lineDash: [3, 3],
            }),
          })
        );

        locationFeature.setStyle(locationStyle);
        vectorlayer.getSource().addFeature(locationFeature);

        map.getView().animate({ center: location }, { zoom: 17 });

        const newRecords = [...records];
        const isValueInRecords = newRecords.some(
          (item) => item.hotPointID === value.hotPointID
        );
        if (isValueInRecords) return;
        newRecords.push(value);
        setRecords(newRecords);
      }}
      onClose={() => {
        setQuery("");
        handleClose();
      }}
    >
      <div className="relative items-center text-gray-700 text-lg">
        <IoSearch className="absolute left-2 text-xl top-1/2 -translate-y-1/2" />
        <ComboboxInput
          autoComplete="off"
          autoFocus={true}
          placeholder="Search..."
          className="bg-gray-200 w-[500px] rounded-md shadow-md pr-3 pl-10 py-2  data-[focus]:outline-2 data-[focus]:outline-sky-500  "
          onChange={handleInput}
        />
      </div>
      <ComboboxOptions
        static
        modal={false}
        className=" divide-y-2 rounded-md overflow-hidden mt-2 w-[var(--input-width)] bg-gray-100"
      >
        {query === "" ? <Records /> : <Results />}
      </ComboboxOptions>
    </Combobox>
  );
}
