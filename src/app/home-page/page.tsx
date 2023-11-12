import CustomInput from "@/shared/components/custom-input/custom-input";
import Header from "@/shared/components/header/header";
import UrlList from "@/shared/components/url-list/url-list";
import React from "react";

const HomePage = () => {
  return (
    <main className="relative max-w-7xl mx-auto sm:px-16 px-6">
      <div className="container">
        <Header />
        <CustomInput />
        <UrlList />
      </div>
    </main>
  );
};

export default HomePage;
