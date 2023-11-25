import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { ArticleStoreState } from "./article-slice.interface";
import { fetchArticleSummaryForUrl } from "./article-slice-thunk";

export const createArticleActionTypeReducer = (
  builder: ActionReducerMapBuilder<ArticleStoreState>,
) => {
  builder
    .addCase(fetchArticleSummaryForUrl.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchArticleSummaryForUrl.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
      state.summary = action.payload.message;
    });
};
