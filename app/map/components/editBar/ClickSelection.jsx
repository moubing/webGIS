"use client";

import { LuMousePointerClick } from "react-icons/lu";
import { IconContainer } from "@/app/components/IconContainer";
import { memo, useContext, useEffect, useState } from "react";
import { MapContext } from "../../ctx/MapContext";
import { EditLayerContext } from "../../ctx/EditLayerContext";
import { Select } from "ol/interaction";
import { SetSelectedFeaturesContext } from "../../ctx/SelectedFeaturesContext";

// 目前编辑矢量数据有以下几个功能
// 1. 点选 按住shift键可以多选
// 2. 框选 还没实现
// 3. 平移
// 4. 编辑节点 按住alt键可以删除节点
// 5. 绘制
// 6. 保存 还未实现
// 7. 退出

export const ClickSelection = memo(function ClickSelection({
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
      const selectedArr = e.target.getFeatures().getArray();
      setSelectedFeatures([...selectedArr]);
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
