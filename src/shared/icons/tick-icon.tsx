import React from "react";
import { IconDimensions } from "../types/commons.types";

const TickIcon: React.FC<IconDimensions> = ({ width = 14, height = 14 }) => {
  return (
    <svg
      stroke="currentColor"
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
