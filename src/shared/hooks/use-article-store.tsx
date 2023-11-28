import { updateUrlList } from "../store/slices/article-slice/article-slice-reducer";
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

  const updateUrlsList = (url: string[]) => {
    dispatch(updateUrlList(url));
  };

  return {
    summary,
    isLoading,
    urlList,
    updateUrlsList,
    generateArticleDataFromUrlForStore,
  };
};

export default useArticleStore;
