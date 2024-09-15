import { http } from "../../../../shared/http/request";
import { RequestSourceHttpType } from "../types/common/sources/requestSource";

export const fetchConfiguration = async (sourceHttp: RequestSourceHttpType) => {
  if (sourceHttp.method === "GET") {
    const response = await http.get(
      process.env.PUBLIC_URL +
        `${sourceHttp.baseUrl}/${sourceHttp.pathname}.json`,
    );
    return response.data;
  }
};
