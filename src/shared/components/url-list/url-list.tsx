"use client";
import React, { useState } from "react";
import UrlListItem from "./url-list-item/url-list-item";

const UrlList = () => {
  const [count, setCount] = useState<number>(0);

  const handleCount = () => {
    setCount((prev) => prev + 1);
  };

  console.log(count);

  return (
    <div>
      <UrlListItem url="www.google.com.pk" setUrl={handleCount} />
    </div>
  );
};

export default UrlList;
