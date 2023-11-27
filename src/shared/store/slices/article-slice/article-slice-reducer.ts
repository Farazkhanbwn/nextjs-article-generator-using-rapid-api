import { createSlice } from "@reduxjs/toolkit";
import { articleStoreDefaults } from "./article-slice.interface";
import {
  addArticleUrlToList,
  createArticleActionTypeReducer,
} from "./article-slice-utils";

const articleSlice = createSlice({
  name: "article",
  initialState: articleStoreDefaults,

  reducers: {
    addUrlToList: addArticleUrlToList,
  },

  extraReducers: (builder) => createArticleActionTypeReducer(builder),
});

const { reducer: articleReducer, actions } = articleSlice;
const { addUrlToList } = actions;
export { addUrlToList };
export { articleReducer };
