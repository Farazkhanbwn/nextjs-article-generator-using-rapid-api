"use client";
import React from "react";
import UrlListItem from "./url-list-item/url-list-item";
import useArticleStore from "@/shared/hooks/use-article-store";

const UrlList = () => {
  const { urlList } = useArticleStore();

  const copyUrlToClipboard = async (url: string) => {
    await navigator.clipboard.writeText(url);
  };

  const handleSelectedUrl = (url: string) => {
    copyUrlToClipboard(url);
  };

  return (
    <div className="mb-4 max-w-xl mx-auto flex flex-col gap-1.5">
      {urlList.map((url, key) => {
        return <UrlListItem url={url} key={key} setUrl={handleSelectedUrl} />;
      })}
    </div>
  );
};

export default UrlList;
