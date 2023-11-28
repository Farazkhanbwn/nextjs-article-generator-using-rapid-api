import { createSlice } from "@reduxjs/toolkit";
import { articleStoreDefaults } from "./article-slice.interface";
import {
  createArticleActionTypeReducer,
  setSelectedUrl,
} from "./article-slice-utils";

const articleSlice = createSlice({
  name: "article",
  initialState: articleStoreDefaults,

  reducers: {
    setSelectedUrlReducer: setSelectedUrl,
  },

  extraReducers: (builder) => createArticleActionTypeReducer(builder),
});

const { reducer: articleReducer, actions } = articleSlice;
const { setSelectedUrlReducer } = actions;
export { setSelectedUrlReducer };
export { articleReducer };
