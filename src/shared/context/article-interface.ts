export interface ArticleInterface {
  summary: string;
  isLoading: boolean;
  generateArticleSummaryFromUrlForStore: (url: string) => void;
}
