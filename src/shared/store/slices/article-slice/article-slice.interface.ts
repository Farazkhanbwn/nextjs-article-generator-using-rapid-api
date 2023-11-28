interface ArticleStoreState {
  summary: string;
  isLoading: boolean;
  urlList: string[];
  selectedUrl: string;
}

const articleStoreDefaults: ArticleStoreState = {
  summary: "",
  isLoading: false,
  urlList: [],
  selectedUrl: "",
};

export { articleStoreDefaults };

export type { ArticleStoreState };
