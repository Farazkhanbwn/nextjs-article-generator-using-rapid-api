enum HttpRequestMethods {
  GET = "GET",
  POST = "POST",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

const API_ENDPOINT = process.env.NEXT_PUBLIC_RAPID_API_ENDPOINT;

const headerConfig = { "Content-Type": "application/json" };

class HttpClient {
  static async get(resourcePath: string, headers?: Record<string, string>) {
    const request = await fetch(`${API_ENDPOINT}${resourcePath}`, {
      method: HttpRequestMethods.GET,
      headers: {
        ...headerConfig,
        ...headers,
      },
    });
    const responseObject = await request.json();
    return responseObject;
  }

  static async post(
    resourcePath: string,
    body: string | object | number | string[] | number,
    headers?: Record<string, string>,
  ) {
    const request = await fetch(`${API_ENDPOINT}${resourcePath}`, {
      method: HttpRequestMethods.POST,
      headers: {
        ...headerConfig,
        ...headers,
      },
      body: JSON.stringify(body),
    });
    const responseObject = await request.json();
    return responseObject;
  }
}

export default HttpClient;
