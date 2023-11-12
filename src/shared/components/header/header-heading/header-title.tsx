import React from "react";
import { headerTitleGradientColor, headerTitleStyles } from "../header.style";
import { HeaderTitleProps } from "../header.types";

const HeaderTitle: React.FC<HeaderTitleProps> = ({
  title,
  className,
  gradientText,
  gradientColors,
}) => {
  return (
    <h1 className={`${headerTitleStyles} ${className}`}>
      {title}
      <br />
      <span className={`${headerTitleGradientColor} ${gradientColors}`}>
        {gradientText}
      </span>
    </h1>
  );
};

export default HeaderTitle;
