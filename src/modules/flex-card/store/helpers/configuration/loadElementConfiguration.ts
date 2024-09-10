import { fetchConfiguration } from "../../api/fetchConfiguration";
import { mapDtoElementToElementType } from "../../mappers/mapDtoElementToElementType";
import { ElementType } from "../../types/element";

export const loadElementConfiguration = async ({
  baseUrl,
  pathname,
}: {
  baseUrl: string;
  pathname: string;
}) => {
  const response = await fetchConfiguration({
    baseUrl,
    pathname,
  });
  const model: ElementType | undefined = mapDtoElementToElementType(response);
  return model;
};
