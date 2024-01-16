import HttpClient from "./http-client";

const RAPID_API_ARTICLE_KEY =
  process.env.NEXT_PUBLIC_RAPID_API_ARTICLE_KEY ?? "";
const RAPID_API_HOST_KEY = process.env.NEXT_PUBLIC_RAPID_API_HOST_KEY ?? "";

const rapidApiCredentials = {
  "X-RapidAPI-Key": RAPID_API_ARTICLE_KEY,
  "X-RapidAPI-Host": RAPID_API_HOST_KEY,
};

enum ArticleSummaryEndpoints {
  SEARCH_ARTICLE = "/summarize?url=:url&length=:paragraphCount",
}

class ArticleSummaryService extends HttpClient {
  static async getArticleSummary(
    articleUrl: string,
    articleParagraphsCount?: number,
  ) {
    const encodedArticleURL = encodeURIComponent(articleUrl);

    const urlPath = ArticleSummaryEndpoints.SEARCH_ARTICLE.replace(
      ":url",
      encodedArticleURL,
    ).replace(":paragraphCount", `${articleParagraphsCount ?? 0}`);

    const data = await this.get(urlPath, {
      ...rapidApiCredentials,
    });
    console.log("data ", data);

    return data;
  }
}

export default ArticleSummaryService;
