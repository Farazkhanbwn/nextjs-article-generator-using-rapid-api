import React from "react";
import HeaderTitle from "./header-heading/header-title";
import HeaderDesc from "./header-heading/header-desc";
import {
  headingDescrText,
  headingGradientText,
  plainHeadingText,
} from "./header-text";
import Navbar from "../navbar";

const Header = () => {
  return (
    <header>
      <Navbar />
      <HeaderTitle
        title={plainHeadingText}
        gradientText={headingGradientText}
      />
      <HeaderDesc text={headingDescrText} />
    </header>
  );
};

export default Header;
