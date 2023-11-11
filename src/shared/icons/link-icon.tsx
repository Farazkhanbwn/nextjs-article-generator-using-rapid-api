import React from "react";
import { IconProps } from "../types/commons.types";

const LinkIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  fillColor = "#333",
}) => {
  return (
    <svg
      fill="none"
      shapeRendering="geometricPrecision"
      stroke={fillColor}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      version="1.1"
      id="svg6"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 7h3a5 5 0 015 5 5 5 0 01-5 5h-3m-6 0H6a5 5 0 01-5-5 5 5 0 015-5h3"
        id="path2"
      />
      <path d="M8 12h8" id="path4" />
    </svg>
  );
};

export default LinkIcon;
