import TickIcon from "@/shared/icons/tick-icon";
import React from "react";

import CopyIcon from "@/shared/icons/copy-icon";
import {
  urlListFieldIconStyles,
  urlListFieldStyles,
  urlListLinkStyles,
} from "../url-list.styles";
import { UrlListProps } from "../url-list.types";

const UrlListItem: React.FC<UrlListProps> = ({
  url,
  copy = false,
  setUrl,
  onClick,
}) => {
  return (
    <div className={`${urlListFieldStyles}  `} onClick={setUrl}>
      <div className={`${urlListFieldIconStyles} `} onClick={onClick}>
        {copy ? (
          <TickIcon width={16} height={16} fillColor="#777" />
        ) : (
          <CopyIcon width={16} height={16} fillColor="#999" />
        )}
      </div>

      <p className={urlListLinkStyles}>{url}</p>
    </div>
  );
};

export default UrlListItem;
