import React from "react";
import EnterIcon from "@/shared/icons/enter-icon";
import LinkIcon from "@/shared/icons/link-icon";
import CustomButton from "../custom-button/custom-button";
import { CustomButtonTypes } from "../custom-button/custom-button.types";
import { CustomInputField } from "../custom-input-field/custom-input-field";
import { CustomInputFieldType } from "../custom-input-field/custom-input.types";
import ArticleSummaryService from "@/shared/services/article-summary-service";

interface UrlInputFormProps {
  onSubmitUrlInputForm: (url: string, summary: string) => void;
  beforeSubmitUrlInputForm: () => void;
}
const UrlInputForm: React.FC<UrlInputFormProps> = ({
  onSubmitUrlInputForm,
  beforeSubmitUrlInputForm,
}) => {
  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const articleUrl = formData.get("form-input-field") as string;
    console.log("article Url is : ", articleUrl);
    beforeSubmitUrlInputForm();
    const articleSummary =
      await ArticleSummaryService.getArticleSummary(articleUrl);
    const { summary } = articleSummary;
    console.log("articlesummary si : ", articleSummary);
    console.log("summary is : ", summary);

    onSubmitUrlInputForm(articleUrl, summary);
  };
  return (
    <form
      className="relative max-w-xl w-full mx-auto mb-3"
      onSubmit={handleSubmitForm}
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
        name="form-input-field"
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
