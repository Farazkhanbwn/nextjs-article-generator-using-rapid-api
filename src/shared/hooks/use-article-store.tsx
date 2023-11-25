import { fetchArticleSummaryForUrl } from "../store/slices/article-slice/article-slice-thunk";
import { AppDispatch, RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";

const UseArticleStore = () => {
  const dispatch = useDispatch<AppDispatch>();

  const fetchArticleSummary = (url: string) => {
    dispatch(fetchArticleSummaryForUrl(url));
  };

  const { summary, isLoading } = useSelector(
    (state: RootState) => state.article,
  );
  return { summary, isLoading, fetchArticleSummary };
};

export default UseArticleStore;
