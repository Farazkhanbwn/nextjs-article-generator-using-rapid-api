"use client";
import ArticleContainer from "@/shared/context/article-container";
import HomePage from "./home-page/page";

export default function Home() {
  return (
    <ArticleContainer>
      <HomePage />
    </ArticleContainer>
  );
}
