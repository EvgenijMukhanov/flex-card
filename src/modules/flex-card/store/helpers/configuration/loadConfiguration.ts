import { fetchConfiguration } from "../../api/fetchConfiguration";
import { mapDtoElementToElementType } from "../../mappers/mapDtoElementToElementType";
import { mapDtoToConfigurationModel } from "../../mappers/mapDtoToConfigurationModel";
import { RequestSourceType } from "../../types/common/sources/requestSource";
import { ConfigurationModel } from "../../types/configurationModel";
import { ElementType } from "../../types/element";
import { ElementsType } from "../../types/elements";

export const loadConfiguration = async (
  source: RequestSourceType,
): Promise<ConfigurationModel> => {
  if (source.variant === "http") {
    const response = await fetchConfiguration(source);
    if (response?.childrens && Array.isArray(response.childrens)) {
      const elements: ElementsType = mapDtoToConfigurationModel(response);
      return {
        elements,
        element: undefined,
      };
    } else if (typeof response === "object") {
      const element: ElementType | undefined =
        mapDtoElementToElementType(response);
      return {
        elements: undefined,
        element,
      };
    }
    return {
      elements: undefined,
      element: undefined,
    };
  } else {
    return new Promise(() => {
      return {
        elements: undefined,
        element: undefined,
      };
    });
  }
};
