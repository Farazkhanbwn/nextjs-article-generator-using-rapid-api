import React from "react";
import { headerDescriptionStyles } from "../header.style";
import { HeaderDescProps } from "../header.types";

const HeaderDescription: React.FC<HeaderDescProps> = ({ text, className }) => {
  return <p className={`${headerDescriptionStyles} ${className}`}>{text}</p>;
};

export default HeaderDescription;
