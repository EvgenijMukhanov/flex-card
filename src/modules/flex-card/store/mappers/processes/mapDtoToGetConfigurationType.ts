import {
  ConfigurationDataType,
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
      data: getData(children.data),
    };
  }
  return undefined;
};

const getData = (data: any): ConfigurationDataType | undefined => {
  if (typeof data === "object") {
    let result: ConfigurationDataType | undefined = undefined;
    if (
      data.type === "configuration" &&
      data.relation === "isolate" &&
      ["http", "import"].includes(data?.source?.variant)
    ) {
      const source = mapDtoToRequestSourceType(data.source);
      if (source) {
        result = {
          type: "configuration",
          relation: data.relation,
          source,
        };
      }
    }
    return result;
  }
  return undefined;
};
