import { createSlice } from "@reduxjs/toolkit";
import { articleStoreDefaults } from "./article-slice.interface";
import {
  createArticleActionTypeReducer,
  updateUrls,
} from "./article-slice-utils";

const articleSlice = createSlice({
  name: "article",
  initialState: articleStoreDefaults,

  reducers: {
    updateUrlList: updateUrls,
  },

  extraReducers: (builder) => createArticleActionTypeReducer(builder),
});

const { reducer: articleReducer, actions } = articleSlice;
const { updateUrlList } = actions;
export { updateUrlList };
export { articleReducer };
