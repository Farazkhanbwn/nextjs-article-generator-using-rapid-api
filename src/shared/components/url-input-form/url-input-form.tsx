import React, { FormEvent } from "react";
import EnterIcon from "@/shared/icons/enter-icon";
import LinkIcon from "@/shared/icons/link-icon";
import CustomButton from "../custom-button/custom-button";
import { CustomButtonTypes } from "../custom-button/custom-button.types";
import { CustomInputField } from "../custom-input-field/custom-input-field";
import { CustomInputFieldType } from "../custom-input-field/custom-input.types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/shared/store/store";
import { fetchArticleSummaryForUrl } from "@/shared/store/slices/article-slice/article-slice-thunk";

const UrlInputForm = () => {
  const dispatch = useDispatch<AppDispatch>();

  const fetchAndDispatchArticleSummary = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const url = formData.get("url-input") as string;
    dispatch(fetchArticleSummaryForUrl(url));
  };

  return (
    <form
      className="relative max-w-xl w-full mx-auto mb-3"
      onSubmit={fetchAndDispatchArticleSummary}
    >
      <LinkIcon
        className="absolute left-2 top-3"
        width={20}
        height={20}
        fillColor="#999"
      />

      <CustomInputField
        type={CustomInputFieldType.URL}
        placeholder="Enter Your URL"
        className="input-field"
        name="url-input"
      />

      <CustomButton
        type={CustomButtonTypes.ICON_BUTTON}
        className="input-field-focus:border-gray-700"
      >
        <EnterIcon width={16} height={16} fillColor="#555" />
      </CustomButton>
    </form>
  );
};

export default UrlInputForm;
