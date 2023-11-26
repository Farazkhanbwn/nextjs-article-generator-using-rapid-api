import React, { useState } from "react";
import ArticleSummaryService from "../services/article-summary-service";
import { ArticleProvider } from "./article-context";

interface ArticleContextContainerProps {
  children: React.ReactNode;
}

const ArticleContainer: React.FC<ArticleContextContainerProps> = ({
  children,
}) => {
  const [summary, setSummary] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const getArticleSummaryDescription = async (url: string) => {
    setLoading(true);
    const data = await ArticleSummaryService.getArticleSummary(url);
    setLoading(false);
    setSummary(data.message);
  };

  return (
    <ArticleProvider
      value={{
        summary: summary,
        isLoading: loading,
        generateArticleSummaryFromUrlForStore: getArticleSummaryDescription,
      }}
    >
      {children}
    </ArticleProvider>
  );
};

export default ArticleContainer;
