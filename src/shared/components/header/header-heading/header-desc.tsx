import React from "react";
import { headerDescriptionStyles } from "../header.style";
import { HeaderDescProps } from "../header.types";

const HeaderDesc: React.FC<HeaderDescProps> = ({
  text,
  className,
  hide = false,
}) => {
  if (hide) {
    return null;
  }
  return <p className={`${headerDescriptionStyles} ${className}`}>{text}</p>;
};

export default HeaderDesc;
