"use client";

import { useContext } from "react";
import { MdOutlineEditNote } from "react-icons/md";
import { SetEditLayerContext } from "../ctx/EditLayerContext";

//! props描述
// layer: 这个按钮对应的图层

// 需要一个setEditLayer，点击这个按钮就可以将editLayer设置为这个按钮对应的layer
// setEditLayer通过一个SetEditLayerContext获得

export function EditBtn({ layer }) {
  const setEditLayer = useContext(SetEditLayerContext);

  return (
    <MdOutlineEditNote
      className="size-6 text-sky-500 hover:text-pink-500 hover:scale-105"
      onClick={() => {
        setEditLayer(layer);
      }}
    />
  );
}
