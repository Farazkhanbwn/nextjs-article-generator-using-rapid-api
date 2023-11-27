import { addUrlToList } from "../store/slices/article-slice/article-slice-reducer";
import { fetchArticleSummaryForUrl } from "../store/slices/article-slice/article-slice-thunk";
import { AppDispatch, RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";

const useArticleStore = () => {
  const { summary, isLoading, urlList } = useSelector(
    (state: RootState) => state.article,
  );

  const dispatch = useDispatch<AppDispatch>();

  const generateArticleSummaryFromUrlForStore = (url: string) => {
    dispatch(fetchArticleSummaryForUrl(url));
  };

  const generateArticleUrlsFromUrlForStore = (url: string) => {
    dispatch(addUrlToList(url));
  };

  return {
    summary,
    isLoading,
    urlList,
    generateArticleSummaryFromUrlForStore,
    generateArticleUrlsFromUrlForStore,
  };
};

export default useArticleStore;
