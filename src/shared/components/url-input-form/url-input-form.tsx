import React from "react";
import EnterIcon from "@/shared/icons/enter-icon";
import LinkIcon from "@/shared/icons/link-icon";
import CustomButton from "../custom-button/custom-button";
import { CustomButtonTypes } from "../custom-button/custom-button.types";
import { CustomInputField } from "../custom-input-field/custom-input-field";
import { CustomInputFieldType } from "../custom-input-field/custom-input.types";

const UrlInputForm = () => {
  return (
    <form className="relative max-w-xl w-full mx-auto mb-3">
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
