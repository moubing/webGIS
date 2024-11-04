"use client";

import { LuMousePointerClick } from "react-icons/lu";
import { IconContainer } from "./IconContainer";
import { memo, useContext, useEffect, useState } from "react";
import { MapContext } from "../../ctx/MapContext";
import {
  EditLayerContext,
  SetSelectedFeaturesContext,
} from "../../ctx/LayerContext";
import { Select } from "ol/interaction";
import { featuresToStingData } from "../../lib/transfrom";

export const ClickSelectCom = memo(function ClickSelection({
  isSelected,
  setId,
}) {
  const map = useContext(MapContext);
  const editLayer = useContext(EditLayerContext);
  const [interaction, setInteraction] = useState(
    new Select({
      layers: [editLayer],
    })
  );
  const setSelectedFeatures = useContext(SetSelectedFeaturesContext);

  useEffect(() => {
    function clickSelect(e) {
      const features = e.target.getFeatures().getArray();
      const data = featuresToStingData(features);
      setSelectedFeatures(data);
    }
    interaction.on("select", clickSelect);

    return () => {
      interaction.un("select", clickSelect);
    };
  }, [interaction, setSelectedFeatures]);

  useEffect(() => {
    if (isSelected) {
      map.addInteraction(interaction);
    } else {
      interaction.getFeatures().clear();
      setSelectedFeatures(null);
    }

    return () => {
      map.removeInteraction(interaction);
    };
  }, [map, isSelected, interaction, setSelectedFeatures]);

  return (
    <IconContainer
      tooltip="点选"
      isSelected={isSelected}
      handler={() => {
        setId(0);
      }}
    >
      <LuMousePointerClick />
    </IconContainer>
  );
});
