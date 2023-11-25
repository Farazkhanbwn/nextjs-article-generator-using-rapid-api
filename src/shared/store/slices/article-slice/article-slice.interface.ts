interface ArticleStoreState {
  summary: string;
  isLoading: boolean;
}

const articleStoreDefaults: ArticleStoreState = {
  summary: "",
  isLoading: false,
};

export { articleStoreDefaults };

export type { ArticleStoreState };
