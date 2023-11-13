"use client";
import TickIcon from "@/shared/icons/tick-icon";
import React, { useState } from "react";

import CopyIcon from "@/shared/icons/copy-icon";
import {
  urlListFieldIconStyles,
  urlListFieldStyles,
  urlListLinkStyles,
} from "../url-list.styles";
import { UrlListProps } from "../url-list.types";

const UrlListItem: React.FC<UrlListProps> = ({ url, setUrl }) => {
  const [isTickIconVisible, setTickIconVisibility] = useState<boolean>(false);

  const triggerTickIconAnimation = () => {
    setTickIconVisibility(true);
    setTimeout(() => {
      setTickIconVisibility(false);
    }, 2000);
  };

  const renderCopyOrTickIcon = () => {
    if (isTickIconVisible) {
      return <TickIcon width={16} height={16} fillColor="#777" />;
    }
    return <CopyIcon width={16} height={16} fillColor="#999" />;
  };

  const setUrlWithSetTickIcon = () => {
    setUrl();
    triggerTickIconAnimation();
  };

  return (
    <div className={`${urlListFieldStyles}  `} onClick={setUrlWithSetTickIcon}>
      <div className={`${urlListFieldIconStyles} `}>
        {renderCopyOrTickIcon()}
      </div>

      <p className={urlListLinkStyles}>{url}</p>
    </div>
  );
};

export default UrlListItem;
