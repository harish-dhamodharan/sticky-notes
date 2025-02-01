import { AvailableColors } from "../../types/types";
import "./ColorPicker.css";
import React from "react";

const PURPLE = "color-purple";
const BLUE = "color-blue";
const YELLOW = "color-yellow";

const COLORS: AvailableColors[] = [PURPLE, BLUE, YELLOW];

export const ColorPicker = ({
  selected,
  setNoteColor,
}: {
  selected: string;
  setNoteColor: Function;
}) => {
  function handleColorChange(
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    color: AvailableColors
  ) {
    e.preventDefault();
    setNoteColor(color);
  }

  return (
    <div className="color-picker">
      {COLORS.map((color: AvailableColors, index) => (
        <span
          key={index}
          onClick={(e) => handleColorChange(e, color)}
          className={`${color} ${selected == color ? "selected" : null}`}
        />
      ))}
    </div>
  );
};
