import { RequestSourceType } from "../../../types/common/sources/requestSource";

export const mapDtoToRequestSourceType = (
  data: any,
): RequestSourceType | undefined => {
  if (data && typeof data === "object") {
    if (
      typeof data.method === "string" &&
      ["GET", "POST", "PUT", "PATCH", "DELETE"].includes(data.method) &&
      typeof data.baseUrl === "string" &&
      typeof data.pathname === "string" &&
      ["http", "import"].includes(data.variant) &&
      ["await", "async"].includes(data.execute)
    ) {
      switch (data.variant) {
        case "http":
          const result: RequestSourceType = {
            variant: data.variant,
            method: data.method,
            execute: data.execute,
            baseUrl: data.baseUrl,
            pathname: data.pathname,
          };
          if (["POST", "PUT", "PATCH"].includes(data.method)) {
            if (
              typeof data.body === "object" &&
              Object.keys(data.body).length > 0
            ) {
              result.body = data.body;
            }
          }
          return result;
        case "import":
          break;
        default:
          break;
      }
    }
  }
  return undefined;
};
