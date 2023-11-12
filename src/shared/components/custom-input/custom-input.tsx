import React from "react";
import { CustomInputField } from "./custom-input-field/custom-input-field";
import { CustomInputType } from "./custom-input.types";
import LinkIcon from "@/shared/icons/link-icon";
import CustomButton from "../custom-button/custom-button";
import { CustomButtonTypes } from "../custom-button/custom-button.types";
import EnterIcon from "@/shared/icons/enter-icon";

const CustomInput = () => {
  return (
    <form className="relative max-w-xl w-full mx-auto">
      <LinkIcon
        className="absolute left-2 top-3"
        width={20}
        height={20}
        fillColor="#999"
      />

      <CustomInputField
        type={CustomInputType.URL}
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

export default CustomInput;
