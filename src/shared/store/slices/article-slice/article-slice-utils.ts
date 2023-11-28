import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";
import { ArticleStoreState } from "./article-slice.interface";
import { fetchArticleSummaryForUrl } from "./article-slice-thunk";

export const saveGeneratedArticleSummaryUrlsSnapshot = (
  urlList: Array<string>,
) => {
  const localData = localStorage.getItem("urls");

  if (localData) {
    const parseData = JSON.parse(localData);
    localStorage.setItem("urls", parseData);
  }
  localStorage.setItem("urls", JSON.stringify(urlList));
};

export const updateUrls = (
  state: ArticleStoreState,
  action: PayloadAction<string[]>,
) => {
  state.urlList = action.payload;
};

export const setSelectedUrl = (
  state: ArticleStoreState,
  action: PayloadAction<string>,
) => {
  state.selectedUrl = action.payload;
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
      state.urlList.unshift(action.payload.articleUrl);
      saveGeneratedArticleSummaryUrlsSnapshot(state.urlList);
    });
};
