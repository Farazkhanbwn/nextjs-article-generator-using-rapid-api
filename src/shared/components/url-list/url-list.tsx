"use client";
import React from "react";
import UrlListItem from "./url-list-item/url-list-item";

interface UrlListProps {
  ArticleUrlAdress: string;
}
const UrlList: React.FC<UrlListProps> = ({ ArticleUrlAdress }) => {
  const handleSelectedUrl = (url: string) => {
    // Write State Management Code Here
    console.log(url);
  };

  return (
    <div className="mb-4">
      <UrlListItem url={ArticleUrlAdress} setUrl={handleSelectedUrl} />
    </div>
  );
};

export default UrlList;
