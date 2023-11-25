import React from "react";
import Header from "@/shared/components/header/header";
import UrlList from "@/shared/components/url-list/url-list";
import UrlInputForm from "@/shared/components/url-input-form/url-input-form";
import ArticleSummary from "@/shared/components/article-summary/article-summary";

const HomePage = () => {
  return (
    <main className="relative max-w-7xl mx-auto sm:px-16 px-6">
      <div className="container">
        <Header />
        <UrlInputForm />
        <UrlList />
        <ArticleSummary />
      </div>
    </main>
  );
};

export default HomePage;
