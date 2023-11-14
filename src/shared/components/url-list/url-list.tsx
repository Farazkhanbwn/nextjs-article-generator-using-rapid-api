"use client";
import React from "react";
import UrlListItem from "./url-list-item/url-list-item";

const UrlList = () => {
  const handleSelectedUrl = (url: string) => {
    // Write State Management Code Here
    console.log(url);
  };

  return (
    <div>
      <UrlListItem url="www.google.com.pk" setUrl={handleSelectedUrl} />
    </div>
  );
};

export default UrlList;
