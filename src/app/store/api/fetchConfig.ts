import { http } from "../../../shared/http/request";

export const fetchConfig = async ({ name }: { name: string }) => {
  const response = await http.get(
    process.env.PUBLIC_URL + `/pages/${name}.json`,
  );
  return response.data;
};
