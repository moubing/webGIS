"use client";

import { IconContainer } from "@/app/components/IconContainer";
import { Draw, Snap } from "ol/interaction";
import { memo, useContext, useEffect, useState } from "react";
import { LuClipboardEdit } from "react-icons/lu";
import { MapContext } from "../../ctx/MapContext";
import { EditLayerContext } from "../../ctx/EditLayerContext";

// todo 这里的设置draw交互的type先搁置一下，下一次在完善

export const DrawCom = memo(function DrawCom({ isSelected, setId }) {
  const map = useContext(MapContext);
  const editLayer = useContext(EditLayerContext);
  const [interaction, setInteraction] = useState(
    new Draw({
      source: editLayer.getSource(),
      type: editLayer.get("geometryType"),
    })
  );
  const [snap, set_] = useState(
    new Snap({
      source: editLayer.getSource(),
    })
  );

  useEffect(() => {
    if (isSelected) {
      map.addInteraction(interaction);
      map.addInteraction(snap);
    }

    return () => {
      map.removeInteraction(interaction);
      map.removeInteraction(snap);
    };
  }, [map, isSelected, interaction, snap]);

  return (
    <IconContainer
      tooltip="绘制"
      isSelected={isSelected}
      handler={() => {
        setId(4);
      }}
    >
      <LuClipboardEdit />
    </IconContainer>
  );
});
