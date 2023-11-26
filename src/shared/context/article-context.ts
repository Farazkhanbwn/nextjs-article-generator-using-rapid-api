import { createContext, useContext } from "react";
import { ArticleInterface } from "./article-interface";
import { defaultArticleContext } from "./article-default";

export const ArticleContext = createContext<ArticleInterface>(
  defaultArticleContext,
);
export const ArticleProvider = ArticleContext.Provider;

export const useArticleContext = () => useContext(ArticleContext);
