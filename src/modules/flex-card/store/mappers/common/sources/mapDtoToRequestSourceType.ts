import { RequestSourceType } from "../../../types/common/sources/requestSource";

export const mapDtoToRequestSourceType = (
  data: any,
): RequestSourceType | undefined => {
  if (data && typeof data === "object") {
    if (
      typeof data.method === "string" &&
      ["GET", "POST", "PUT", "PATCH", "DELETE"].includes(data.method) &&
      typeof data.baseUrl === "string" &&
      typeof data.path === "string"
    ) {
      const result: RequestSourceType = {
        method: data.method,
        baseUrl: data.baseUrl,
        path: data.path,
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
    }
  }
  return undefined;
};
