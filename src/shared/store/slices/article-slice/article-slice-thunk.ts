import ArticleSummaryService from "@/shared/services/article-summary-service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchArticleSummaryForUrl = createAsyncThunk(
  "article/createArticleActionTypeReducer",
  async (articleUrl: string) => {
    const data = await ArticleSummaryService.getArticleSummary(articleUrl);
    return data;
  },
);
