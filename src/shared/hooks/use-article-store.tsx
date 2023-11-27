import { fetchArticleSummaryForUrl } from "../store/slices/article-slice/article-slice-thunk";
import { AppDispatch, RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";

const useArticleStore = () => {
  const { summary, isLoading, urlList } = useSelector(
    (state: RootState) => state.article,
  );

  const dispatch = useDispatch<AppDispatch>();

  const generateArticleDataFromUrlForStore = (url: string) => {
    dispatch(fetchArticleSummaryForUrl(url));
  };

  return {
    summary,
    isLoading,
    urlList,
    generateArticleDataFromUrlForStore,
  };
};

export default useArticleStore;
