"use client";
import React, { useState } from "react";
import Header from "@/shared/components/header/header";
import UrlList from "@/shared/components/url-list/url-list";
import UrlInputForm from "@/shared/components/url-input-form/url-input-form";
import ArticleSummary from "@/shared/components/article-summary/article-summary";

const HomePage = () => {
  const [articleUrlAdress, setArticleUrlAdress] = useState<string>("");
  const [articleSummary, setArticleSummary] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const isLoaderOrSummary = articleSummary || loading;

  const beforeSubmitUrlInputForm = () => {
    setLoading(true);
  };

  const afterSubmitUrlInputForm = (articleUrl: string, summary: string) => {
    setArticleUrlAdress(articleUrl);
    setArticleSummary(summary);
    setLoading(false);
  };

  return (
    <main className="relative max-w-7xl mx-auto sm:px-16 px-6">
      <div className="container">
        <Header />
        <UrlInputForm
          onSubmitUrlInputForm={afterSubmitUrlInputForm}
          beforeSubmitUrlInputForm={beforeSubmitUrlInputForm}
        />

        <UrlList ArticleUrlAdress={articleUrlAdress} />
        {isLoaderOrSummary && (
          <ArticleSummary description={articleSummary} loading={loading} />
        )}
      </div>
    </main>
  );
};

export default HomePage;
