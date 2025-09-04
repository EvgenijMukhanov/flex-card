import { http } from "../../../../../shared/http/request";
import { RequestSourceHttpType } from "../../../store/types/common/sources/requestSource";

export const fetchMetaConfiguration = async (source: RequestSourceHttpType) => {
  if (source.method === "GET") {
    try {
      const response = await http.get(
        process.env.PUBLIC_URL + `${source.baseUrl}/${source.pathname}.json`,
      );
      return response.data;
    } catch (error) {
      return new Promise((rejects) => {
        rejects("");
      });
    }
  }
};
