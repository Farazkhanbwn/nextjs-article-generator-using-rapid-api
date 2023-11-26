import { ArticleInterface } from "./article-interface";

export const defaultArticleContext: ArticleInterface = {
  isLoading: false,
  summary: "",
  generateArticleSummaryFromUrlForStore(url) {
    console.log(`Fetching article summary from: ${url}`);
  },
};
