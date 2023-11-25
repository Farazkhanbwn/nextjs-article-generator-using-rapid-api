import { configureStore } from "@reduxjs/toolkit";
import { articleReducer } from "./slices/article-slice/article-slice-reducer";

export const store = configureStore({
  reducer: {
    article: articleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
