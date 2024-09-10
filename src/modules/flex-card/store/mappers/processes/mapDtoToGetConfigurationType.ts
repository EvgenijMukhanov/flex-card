import {
  ConfigurationSourceType,
  GetConfigurationType,
} from "../../types/processes/get-configuration";
import { mapDtoToRequestSourceType } from "../common/sources/mapDtoToRequestSourceType";

export const mapDtoToGetConfigurationType = (
  children: any,
): GetConfigurationType | undefined => {
  if (
    typeof children === "object" &&
    children.element === "get.configuration" &&
    typeof children.version === "number"
  ) {
    return {
      element: "get.configuration",
      version: children.version,
      sources: getSources(children.sources),
    };
  }
  return undefined;
};

const getSources = (data: any): ConfigurationSourceType[] | undefined => {
  if (data && Array.isArray(data)) {
    const result: ConfigurationSourceType[] = [];
    data.forEach((item) => {
      if (
        item.type === "configuration" &&
        item.target === "current" &&
        ["http", "import"].includes(item?.source?.variant)
      ) {
        const source = mapDtoToRequestSourceType(item.source);
        if (source) {
          result.push({
            type: "configuration",
            target: "current",
            source,
          });
        }
      }
    });
    return result;
  }
  return undefined;
};
