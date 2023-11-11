import React from "react";
import { IconProps } from "../types/commons.types";

const CopyIcon: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  fillColor = "#333",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={width}
      height={height}
    >
      <path
        fill={fillColor}
        d="M8 17.929H6c-1.105 0-2-.912-2-2.036V5.036C4 3.91 4.895 3 6 3h8c1.105 0 2 .911 2 2.036v1.866m-6 .17h8c1.105 0 2 .91 2 2.035v10.857C20 21.09 19.105 22 18 22h-8c-1.105 0-2-.911-2-2.036V9.107c0-1.124.895-2.036 2-2.036z"
        id="path2"
      />
    </svg>
  );
};

export default CopyIcon;
