import { fetchConfiguration } from "../../api/fetchConfiguration";
import { mapDtoElementToElementType } from "../../mappers/mapDtoElementToElementType";
import { mapDtoToConfigurationModel } from "../../mappers/mapDtoToConfigurationModel";
import { RequestSourceType } from "../../types/common/sources/requestSource";
import { ConfigurationModel } from "../../types/configurationModel";
import { ElementType } from "../../types/element";

export const loadConfiguration = async (
  source: RequestSourceType,
): Promise<{
  model: ConfigurationModel | undefined;
  element: ElementType | undefined;
}> => {
  if (source.variant === "http") {
    const response = await fetchConfiguration(source);
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
  } else {
    return new Promise(() => {
      return {
        model: undefined,
        element: undefined,
      };
    });
  }
};
