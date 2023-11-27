import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";
import { ArticleStoreState } from "./article-slice.interface";
import { fetchArticleSummaryForUrl } from "./article-slice-thunk";

export const addArticleUrlToList = (
  state: ArticleStoreState,
  action: PayloadAction<string>,
) => {
  state.urlList.unshift(action.payload);
};

export const createArticleActionTypeReducer = (
  builder: ActionReducerMapBuilder<ArticleStoreState>,
) => {
  builder
    .addCase(fetchArticleSummaryForUrl.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchArticleSummaryForUrl.fulfilled, (state, action) => {
      state.isLoading = false;
      state.summary = action.payload.message;
    });
};
