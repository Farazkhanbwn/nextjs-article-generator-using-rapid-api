import React from "react";
import LogoIcon from "../icons/logo-icon";
import CustomButton from "./custom-button/custom-button";
import { CustomButtonTypes } from "./custom-button/custom-button.types";

const Navbar = () => {
  return (
    <nav className="flex justify-between align-middle py-4 mb-10">
      <LogoIcon />
      <CustomButton type={CustomButtonTypes.PRIMARY}>Github</CustomButton>
    </nav>
  );
};

export default Navbar;
