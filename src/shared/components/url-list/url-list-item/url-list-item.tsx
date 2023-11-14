"use client";
import React, { useState } from "react";
import {
  urlListFieldIconStyles,
  urlListFieldStyles,
  urlListLinkStyles,
} from "../url-list.styles";
import { UrlListProps } from "../url-list.types";
import CopyIcon from "@/shared/icons/copy-icon";
import TickIcon from "@/shared/icons/tick-icon";

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

  const setUrlWithSetTickIcon = (url: string) => {
    setUrl(url);
    triggerTickIconAnimation();
  };

  return (
    <div
      className={`${urlListFieldStyles}  `}
      onClick={() => setUrlWithSetTickIcon(url)}
    >
      <div className={`${urlListFieldIconStyles} `}>
        {renderCopyOrTickIcon()}
      </div>

      <p className={urlListLinkStyles}>{url}</p>
    </div>
  );
};

export default UrlListItem;
