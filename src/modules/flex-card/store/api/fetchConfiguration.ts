import { http } from "../../../../shared/http/request";

export const fetchConfiguration = async ({
  baseUrl,
  pathname,
}: {
  baseUrl: string;
  pathname: string;
}) => {
  const response = await http.get(
    process.env.PUBLIC_URL + `${baseUrl}/${pathname}.json`,
  );
  return response.data;
};
