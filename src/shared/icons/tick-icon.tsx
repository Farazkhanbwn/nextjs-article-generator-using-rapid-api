import React from "react";
import { IconProps } from "../types/commons.types";

const TickIcon: React.FC<IconProps> = ({
  width = 14,
  height = 14,
  fillColor = "#333",
}) => {
  return (
    <svg
      stroke={fillColor}
      viewBox="0 0 24 24"
      width={width}
      height={height}
      id="svg4"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20 6L9 17l-5-5" id="path2" />
    </svg>
  );
};

export default TickIcon;
