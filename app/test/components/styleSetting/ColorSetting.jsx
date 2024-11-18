"use client";

import { useCallback, useState } from "react";
import { ColorBlock, ColorInputBlock } from "./Blocks";
import {
  OpacityInputContainer,
  StyleSettingContainer,
} from "./StyleSettingContainer";

import {
  gray200,
  green200,
  white,
  yellow200,
  sky200,
  pink200,
  violet200,
  blue,
  gray500,
  green500,
  yellow500,
  sky500,
  pink500,
  violet500,
  isFillColor,
  isStrokeColor,
} from "../../variables/style";

export function FillColorSetting({ style, updateStyle }) {
  const [color, setColor] = useState(style.getFill().getColor().slice(0, 7));
  const [opacity, setOpacity] = useState(
    parseInt(style.getFill().getColor().slice(7, 9), 16)
  );

  const updateFillColor = useCallback(
    function updateFillColor(selectedColor) {
      const finalColor = selectedColor + opacity.toString(16).padStart(2, "0");
      style.getFill().setColor(finalColor);
      setColor(selectedColor);
      updateStyle(style);
    },
    [opacity, style, updateStyle]
  );
  return (
    <StyleSettingContainer title={"填充颜色"}>
      <section className="flex items-center gap-2.5 ">
        <ColorBlock
          handleClick={updateFillColor}
          color={white}
          bg={"bg-[#ffffff]"}
          isSelected={color === white}
          layoutId={"fill"}
        />
        <ColorBlock
          handleClick={updateFillColor}
          color={gray200}
          bg={"bg-gray-200"}
          isSelected={color === gray200}
          layoutId={"fill"}
        />
        <ColorBlock
          handleClick={updateFillColor}
          color={green200}
          bg={"bg-green-200"}
          isSelected={color === green200}
          layoutId={"fill"}
        />
        <ColorBlock
          handleClick={updateFillColor}
          color={yellow200}
          bg={"bg-yellow-200"}
          layoutId={"fill"}
          isSelected={color === yellow200}
        />
        <ColorBlock
          handleClick={updateFillColor}
          color={sky200}
          bg={"bg-sky-200"}
          isSelected={color === sky200}
          layoutId={"fill"}
        />
        <ColorBlock
          handleClick={updateFillColor}
          color={pink200}
          bg={"bg-pink-200"}
          isSelected={color === pink200}
          layoutId={"fill"}
        />
        <ColorBlock
          handleClick={updateFillColor}
          color={violet200}
          bg={"bg-violet-200"}
          isSelected={color === violet200}
          layoutId={"fill"}
        />

        <ColorInputBlock isSelected={!isFillColor(color)} layoutId={"fill"}>
          <input
            className=" opacity-0 absolute"
            type="color"
            value={color}
            onChange={(e) => {
              updateFillColor(e.target.value);
            }}
          />
        </ColorInputBlock>
      </section>
      <OpacityInputContainer>
        <input
          type="range"
          className="flex-grow"
          value={opacity}
          max={255}
          min={0}
          step={1}
          onChange={(e) => {
            const opacityNumber = +e.target.value;
            setOpacity(opacityNumber);
            const finalColor =
              color + opacityNumber.toString(16).padStart(2, "0");
            style.getFill().setColor(finalColor);
            updateStyle(style);
          }}
        />
      </OpacityInputContainer>
    </StyleSettingContainer>
  );
}
export function StrokeColorSetting({ style, updateStyle }) {
  const [color, setColor] = useState(style.getStroke().getColor().slice(0, 7));
  const [opacity, setOpacity] = useState(
    parseInt(style.getStroke().getColor().slice(7, 9), 16)
  );

  const updateStrokeColor = useCallback(
    function updateStrokeColor(selectedColor) {
      const finalColor = selectedColor + opacity.toString(16).padStart(2, "0");

      style.getStroke().setColor(finalColor);

      setColor(selectedColor);
      updateStyle(style);
    },
    [opacity, updateStyle, style]
  );
  return (
    <StyleSettingContainer title={"描边颜色"}>
      <section className="flex items-center gap-2.5 ">
        <ColorBlock
          handleClick={updateStrokeColor}
          color={blue}
          bg={"bg-[#3399CC]"}
          isSelected={color === blue}
          layoutId={"stroke"}
        />
        <ColorBlock
          handleClick={updateStrokeColor}
          color={gray500}
          bg={"bg-gray-500"}
          isSelected={color === gray500}
          layoutId={"stroke"}
        />
        <ColorBlock
          handleClick={updateStrokeColor}
          color={green500}
          bg={"bg-green-500"}
          isSelected={color === green500}
          layoutId={"stroke"}
        />
        <ColorBlock
          handleClick={updateStrokeColor}
          color={yellow500}
          bg={"bg-yellow-500"}
          isSelected={color === yellow500}
          layoutId={"stroke"}
        />
        <ColorBlock
          handleClick={updateStrokeColor}
          color={sky500}
          bg={"bg-sky-500"}
          isSelected={color === sky500}
          layoutId={"stroke"}
        />
        <ColorBlock
          handleClick={updateStrokeColor}
          color={pink500}
          bg={"bg-pink-500"}
          isSelected={color === pink500}
          layoutId={"stroke"}
        />
        <ColorBlock
          handleClick={updateStrokeColor}
          color={violet500}
          bg={"bg-violet-500"}
          isSelected={color === violet500}
          layoutId={"stroke"}
        />

        <ColorInputBlock isSelected={!isStrokeColor(color)} layoutId={"stroke"}>
          <input
            className=" opacity-0 absolute"
            type="color"
            value={color}
            onChange={(e) => {
              updateStrokeColor(e.target.value);
            }}
          />
        </ColorInputBlock>
      </section>
      <OpacityInputContainer>
        <input
          type="range"
          className="flex-grow"
          value={opacity}
          max={255}
          min={0}
          step={1}
          onChange={(e) => {
            const opacityNumber = +e.target.value;
            setOpacity(opacityNumber);
            const finalColor =
              color + opacityNumber.toString(16).padStart(2, "0");

            style.getStroke().setColor(finalColor);

            updateStyle(style);
          }}
        />
      </OpacityInputContainer>
    </StyleSettingContainer>
  );
}
