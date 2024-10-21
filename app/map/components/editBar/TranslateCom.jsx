"use client";

import { IconContainer } from "@/app/components/IconContainer";
import { memo, useContext, useEffect, useState } from "react";
import { MdOutlinePanTool } from "react-icons/md";
import { MapContext } from "../../ctx/MapContext";
import { Translate } from "ol/interaction";
import { EditLayerContext } from "../../ctx/EditLayerContext";

export const TranslateCom = memo(function TranslateCom({ isSelected, setId }) {
  const map = useContext(MapContext);
  const editLayer = useContext(EditLayerContext);
  const [interaction, setInteraction] = useState(
    new Translate({
      layers: [editLayer],
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
      tooltip="平移"
      isSelected={isSelected}
      handler={() => {
        setId(2);
      }}
    >
      <MdOutlinePanTool />
    </IconContainer>
  );
});
