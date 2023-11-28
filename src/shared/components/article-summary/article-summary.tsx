import React from "react";
import PageContainer from "../page-container/page-container";
import useArticleStore from "@/shared/hooks/use-article-store";

const ArticleSummary = () => {
  const { summary, isLoading } = useArticleStore();

  if (!summary && !isLoading) {
    return null;
  }

  return (
    <PageContainer
      loading={isLoading}
      className="flex flex-col gap-1 max-w-xl mx-auto mb-4"
    >
      <h2 className="font-satoshi font-bold text-gray-600 text-xl">
        Article
        <span className="font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Summary
        </span>
      </h2>
      <div className="rounded-xl border border-gray-200 bg-white/20 backdrop-blur p-4">
        <p className="font-inter font-medium text-sm text-gray-700">
          {summary}
        </p>
      </div>
    </PageContainer>
  );
};

export default ArticleSummary;
