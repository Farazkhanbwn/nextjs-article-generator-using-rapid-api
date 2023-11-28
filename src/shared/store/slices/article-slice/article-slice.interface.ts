interface ArticleStoreState {
  summary: string;
  isLoading: boolean;
  urlList: string[];
}

const articleStoreDefaults: ArticleStoreState = {
  summary: "",
  isLoading: false,
  urlList: [],
};

export { articleStoreDefaults };

export type { ArticleStoreState };
