import { fetchConfiguration } from "../../api/fetchConfiguration";
import { mapDtoElementToElementType } from "../../mappers/mapDtoElementToElementType";
import { mapDtoToConfigurationModel } from "../../mappers/mapDtoToConfigurationModel";
import { RequestSourceType } from "../../types/common/sources/requestSource";
import { ConfigurationModel } from "../../types/configurationModel";
import { ElementType } from "../../types/element";
import { ElementsType } from "../../types/elements";
import { joinConfiguration } from "./joinConfiguration";
import { collectGetConfigurationFromConfigurationModel } from "./collectGetConfigurationFromConfigurationModel";

export const loadConfiguration = async (
  source: RequestSourceType,
): Promise<ConfigurationModel> => {
  let configuration = await load({ source });

  const configurations = collectGetConfigurationFromConfigurationModel(
    configuration,
  ).filter((item) => {
    return item.element.data?.relation === "join";
  });
  if (configurations.length > 0) {
    const queue = configurations
      .map((item) => {
        if (item.element.data?.source) {
          return loadConfiguration(item.element.data.source);
        }
        return undefined;
      })
      .filter((item) => {
        return !!item;
      });

    const response = await Promise.all(queue);
    response.forEach((item: ConfigurationModel | undefined, idx: number) => {
      if (item) {
        const breadcrumbs = configurations[idx].breadcrumbs;
        configuration = joinConfiguration({
          rootConfiguration: configuration,
          configuration: item,
          breadcrumbs,
        });
      }
    });
  }
  return configuration;
};

const load = async ({
  source,
}: {
  source: RequestSourceType;
}): Promise<ConfigurationModel> => {
  if (source.variant === "http") {
    const response = await fetchConfiguration(source);
    if (response?.childrens && Array.isArray(response.childrens)) {
      const elements: ElementsType = mapDtoToConfigurationModel(response);
      return {
        element: undefined,
        elements,
      };
    } else if (typeof response === "object") {
      const element: ElementType | undefined =
        mapDtoElementToElementType(response);
      return {
        elements: undefined,
        element,
      };
    } else {
      return new Promise(() => {
        return {
          elements: undefined,
          element: undefined,
        };
      });
    }
  } else {
    return new Promise(() => {
      return {
        elements: undefined,
        element: undefined,
      };
    });
  }
};
