import React from "react";
import HeaderTitle from "./header-heading/header-title";
import HeaderDesc from "./header-heading/header-description";

import Navbar from "../navbar";

const HeaderSection = () => {
  return (
    <header>
      <Navbar />
      <HeaderTitle
        title="Summarize Articles with"
        gradientText="OpenAI GPT-4"
      />
      <HeaderDesc
        text="Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries"
      />
    </header>
  );
};

export default HeaderSection;
