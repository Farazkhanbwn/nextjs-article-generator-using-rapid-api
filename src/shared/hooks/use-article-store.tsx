import { RootState } from "../store/store";
import { useSelector } from "react-redux";

const UseArticleStore = () => {
  const { summary, isLoading } = useSelector(
    (state: RootState) => state.article,
  );
  return { summary, isLoading };
};

export default UseArticleStore;
