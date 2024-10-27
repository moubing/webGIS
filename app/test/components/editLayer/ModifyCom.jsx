"use client";

import { FaDrawPolygon } from "react-icons/fa";
import { IconContainer } from "./IconContainer";
import { memo, useContext, useEffect, useState } from "react";
import { Modify } from "ol/interaction";
import { MapContext } from "../../ctx/MapContext";
import { EditLayerContext } from "../../ctx/LayerContext";

export const ModifyCom = memo(function ModifyCom({ isSelected, setId }) {
  const map = useContext(MapContext);
  const editLayer = useContext(EditLayerContext);
  const [interaction, setInteraction] = useState(
    new Modify({
      source: editLayer.getSource(),
    })
  );

  useEffect(() => {
    if (isSelected) {
      map.addInteraction(interaction);
    }
    return () => {
      map.removeInteraction(interaction);
    };
  }, [map, isSelected, interaction]);
  return (
    <IconContainer
      tooltip="编辑"
      isSelected={isSelected}
      handler={() => {
        setId(3);
      }}
    >
      <FaDrawPolygon />
    </IconContainer>
  );
});
