import React from "react";
import { IconProps } from "../types/commons.types";

const TickIcon: React.FC<IconProps> = ({
  width = 14,
  height = 14,
  fillColor = "#333",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={width}
      height={height}
    >
      <path
        fill={fillColor}
        d="M40.6 12.1L17 35.7 7.4 26.1 4.6 29 17 41.3 43.4 14.9z"
      />
    </svg>
  );
};

export default TickIcon;
