import { createSlice } from "@reduxjs/toolkit";
import { articleStoreDefaults } from "./article-slice.interface";
import {
  createArticleActionTypeReducer,
  updateUrls,
  setSelectedUrl,
} from "./article-slice-utils";

const articleSlice = createSlice({
  name: "article",
  initialState: articleStoreDefaults,

  reducers: {
    updateUrlList: updateUrls,
    setSelectedUrlReducer: setSelectedUrl,
  },

  extraReducers: (builder) => createArticleActionTypeReducer(builder),
});

const { reducer: articleReducer, actions } = articleSlice;
const { setSelectedUrlReducer, updateUrlList } = actions;

export { articleReducer, updateUrlList, setSelectedUrlReducer };
