import { setSelectedUrlReducer } from "../store/slices/article-slice/article-slice-reducer";
import { fetchArticleSummaryForUrl } from "../store/slices/article-slice/article-slice-thunk";
import { AppDispatch, RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";

const useArticleStore = () => {
  const { summary, isLoading, urlList, selectedUrl } = useSelector(
    (state: RootState) => state.article,
  );

  const dispatch = useDispatch<AppDispatch>();

  const generateArticleDataFromUrlForStore = (url: string) => {
    dispatch(fetchArticleSummaryForUrl(url));
  };

  const setSelectedUrlActionForStore = (url: string) => {
    dispatch(setSelectedUrlReducer(url));
  };

  return {
    summary,
    isLoading,
    urlList,
    selectedUrl,
    generateArticleDataFromUrlForStore,
    setSelectedUrlActionForStore,
  };
};

export default useArticleStore;
