import { createSlice } from "@reduxjs/toolkit";
import { articleStoreDefaults } from "./article-slice.interface";
import { createArticleActionTypeReducer } from "./article-slice-builders";

const articleSlice = createSlice({
  name: "article",
  initialState: articleStoreDefaults,
  reducers: {},
  extraReducers: (builder) => createArticleActionTypeReducer(builder),
});

const { reducer: articleReducer } = articleSlice;
export { articleReducer };
