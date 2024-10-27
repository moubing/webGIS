"use client";

import { useContext } from "react";
import { MdOutlineEditNote } from "react-icons/md";
import { SetEditLayerContext } from "../../ctx/LayerContext";

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
