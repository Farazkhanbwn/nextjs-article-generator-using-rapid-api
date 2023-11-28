"use client";
import React from "react";
import UrlListItem from "./url-list-item/url-list-item";
import useArticleStore from "@/shared/hooks/use-article-store";

const UrlList = () => {
  const { urlList } = useArticleStore();

  const handleSelectedUrl = (url: string) => {
    // Write State Management Code Here
    console.log(url);
  };

  return (
    <div className="mb-4">
      {urlList.map((url, key) => {
        return <UrlListItem url={url} key={key} setUrl={handleSelectedUrl} />;
      })}
    </div>
  );
};

export default UrlList;
