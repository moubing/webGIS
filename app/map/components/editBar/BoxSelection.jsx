"use client";

import { PiSelectionAll } from "react-icons/pi";
import { IconContainer } from "@/app/components/IconContainer";
import { memo, useContext, useEffect, useState } from "react";
import { MapContext } from "../../ctx/MapContext";
import { DragBox, Select } from "ol/interaction";
import { getWidth } from "ol/extent";
import { EditLayerContext } from "../../ctx/EditLayerContext";
import Style from "ol/style/Style";
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";
import { never, noModifierKeys } from "ol/events/condition";
import { SetSelectedFeaturesContext } from "../../ctx/SelectedFeaturesContext";

export const BoxSelection = memo(function BoxSelection({ isSelected, setId }) {
  const map = useContext(MapContext);
  const editLayer = useContext(EditLayerContext);
  const setSelectedFeatures = useContext(SetSelectedFeaturesContext);
  const [interaction, setInteraction] = useState(
    new DragBox({
      condition: noModifierKeys,
    })
  );
  const [select, setSelect] = useState(
    new Select({
      condition: never,
      layers: [editLayer],
      style: new Style({
        fill: new Fill({
          color: "#e5e7ebaa",
        }),
        stroke: new Stroke({
          color: "#eab308",
          width: 2,
        }),
      }),
    })
  );

  useEffect(() => {
    const selectedFeatures = select.getFeatures();
    function boxSelect() {
      const boxExtent = interaction.getGeometry().getExtent();
      const worldExtent = map.getView().getProjection().getExtent();
      const worldWidth = getWidth(worldExtent);
      const startWorld = Math.floor(
        (boxExtent[0] - worldExtent[0]) / worldWidth
      );
      const endWorld = Math.floor((boxExtent[2] - worldExtent[0]) / worldWidth);
      for (let world = startWorld; world <= endWorld; ++world) {
        const left = Math.max(
          boxExtent[0] - world * worldWidth,
          worldExtent[0]
        );
        const right = Math.min(
          boxExtent[2] - world * worldWidth,
          worldExtent[2]
        );
        const extent = [left, boxExtent[1], right, boxExtent[3]];

        const boxFeatures = editLayer
          .getSource()
          .getFeaturesInExtent(extent)
          .filter(
            (feature) =>
              !selectedFeatures.getArray().includes(feature) &&
              feature.getGeometry().intersectsExtent(extent)
          );
        const rotation = map.getView().getRotation();
        const oblique = rotation % (Math.PI / 2) !== 0;
        if (oblique) {
          const anchor = [0, 0];
          const geometry = interaction.getGeometry().clone();
          geometry.translate(-world * worldWidth, 0);
          geometry.rotate(-rotation, anchor);
          const extend = geometry.getExtent();
          boxFeatures.forEach((feature) => {
            const geometry = feature.getGeometry().clone();
            geometry.rotate(-rotation, anchor);
            if (geometry.intersectsExtent(extend)) {
              selectedFeatures.push(feature);
            }
          });
        } else {
          selectedFeatures.extend(boxFeatures);
        }
      }
      const selectedArr = selectedFeatures.getArray();
      setSelectedFeatures([...selectedArr]);
    }
    function clearSelection() {
      selectedFeatures.clear();
    }
    interaction.on("boxend", boxSelect);
    interaction.on("boxstart", clearSelection);

    return () => {
      clearSelection();
      interaction.un("boxend", boxSelect);
      interaction.un("boxstart", clearSelection);
    };
  }, [select, interaction, map, editLayer, setSelectedFeatures]);

  useEffect(() => {
    if (isSelected) {
      map.addInteraction(select);
      map.addInteraction(interaction);
    } else {
      select.getFeatures().clear();
      setSelectedFeatures(null);
    }

    return () => {
      map.removeInteraction(select);
      map.removeInteraction(interaction);
    };
  }, [map, isSelected, interaction, select, setSelectedFeatures]);
  return (
    <IconContainer
      tooltip="框选"
      isSelected={isSelected}
      handler={() => {
        setId(1);
      }}
    >
      <PiSelectionAll />
    </IconContainer>
  );
});
