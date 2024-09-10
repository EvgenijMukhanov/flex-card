import { fetchConfiguration } from "../../api/fetchConfiguration";
import { mapDtoElementToElementType } from "../../mappers/mapDtoElementToElementType";
import { mapDtoToConfigurationModel } from "../../mappers/mapDtoToConfigurationModel";
import { ConfigurationModel } from "../../types/configurationModel";
import { ElementType } from "../../types/element";

export const loadConfiguration = async ({
  baseUrl,
  pathname,
}: {
  baseUrl: string;
  pathname: string;
}): Promise<{
  model: ConfigurationModel | undefined;
  element: ElementType | undefined;
}> => {
  const response = await fetchConfiguration({
    baseUrl,
    pathname,
  });
  if (response?.childrens && Array.isArray(response.childrens)) {
    const model: ConfigurationModel = mapDtoToConfigurationModel(response);
    return {
      model,
      element: undefined,
    };
  } else if (typeof response === "object") {
    const element: ElementType | undefined =
      mapDtoElementToElementType(response);
    return {
      model: undefined,
      element,
    };
  }
  return {
    model: undefined,
    element: undefined,
  };
};
