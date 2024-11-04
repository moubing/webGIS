"use client";

import { useContext, useEffect, useRef, useState } from "react";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import { shpToGeoJson } from "../../lib/loadFile";
import clsx from "clsx";
import { SetLayerListContext } from "../../ctx/LayerContext";
import { MapContext } from "../../ctx/MapContext";

export function LoadFile({ handleClose }) {
  const map = useContext(MapContext);
  const setLayerList = useContext(SetLayerListContext);
  const inputRef = useRef(null);
  const divRef = useRef(null);
  const [isEnter, setIsEnter] = useState(false);

  useEffect(() => {
    let inputElement = inputRef.current;
    let divElement = divRef.current;
    async function upload() {
      const file = inputElement.files[0];
      const [name, extendName] = file.name.split(".");
      const vLayers = await shpToGeoJson(file, name);
      map.addLayer(vLayers);
      map.getView().fit(vLayers.getSource().getExtent());
      setLayerList((pre) => [vLayers, ...pre]);
      handleClose();
    }

    function dragEnter(e) {
      e.preventDefault();
      e.stopPropagation();
      setIsEnter(true);
    }
    function dragOver(e) {
      e.preventDefault();
      e.stopPropagation();
    }
    function dragLeave(e) {
      e.preventDefault();
      e.stopPropagation();
      setIsEnter(false);
    }

    async function drop(e) {
      e.preventDefault();
      e.stopPropagation();
      const file = e.dataTransfer.files[0];
      const [name, extendName] = file.name.split(".");
      const vLayers = await shpToGeoJson(file, name);
      map.addLayer(vLayers);
      map.getView().fit(vLayers.getSource().getExtent());
      setLayerList((pre) => [vLayers, ...pre]);
      handleClose();
    }
    divElement.addEventListener("dragenter", dragEnter);
    divElement.addEventListener("dragover", dragOver);
    divElement.addEventListener("dragleave", dragLeave);
    divElement.addEventListener("drop", drop);
    inputElement.addEventListener("change", upload);

    return () => {
      inputElement.removeEventListener("change", upload);
      divElement.removeEventListener("dragenter", dragEnter);
      divElement.removeEventListener("dragover", dragOver);
      divElement.removeEventListener("dragleave", dragLeave);
      divElement.removeEventListener("drop", drop);
    };
  }, [handleClose, map, setLayerList]);
  return (
    <div
      ref={divRef}
      className={clsx(
        "w-full h-[400px] mt-3  rounded-md outline-pink-500 outline-4 outline-dashed flex items-center transition-colors justify-center cursor-pointer relative",
        {
          " bg-gray-50": isEnter,
          " bg-gray-100": !isEnter,
        }
      )}
      onClick={() => {
        inputRef.current.click();
      }}
    >
      <input className=" hidden" type="file" ref={inputRef} />
      <div
        className={clsx(
          "flex flex-col items-center transition-colors select-none pointer-events-none ",
          {
            "text-sky-500": isEnter,
            "text-gray-400": !isEnter,
          }
        )}
      >
        <MdOutlineDriveFolderUpload className="size-28" />
        <p>点击选择文件或者拖拽上传</p>
        <p>目前支持shapefile</p>
      </div>
      {isEnter && (
        <div className="absolute top-2 right-2 font-bold text-sky-500">
          ready
        </div>
      )}
    </div>
  );
}
