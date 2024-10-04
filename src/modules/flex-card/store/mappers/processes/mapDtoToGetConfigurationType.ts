import { GetConfigurationType } from "../../types/processes/get-configuration";
import { mapDtoToConfigurationDataIsolateType } from "../common/configurations/mapDtoToConfigurationDataIsolateType";
import { mapDtoToConfigurationDataJoinType } from "../common/configurations/mapDtoToConfigurationDataJoinType";

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
      data:
        mapDtoToConfigurationDataJoinType(children.data) ||
        mapDtoToConfigurationDataIsolateType(children.data),
    };
  }
  return undefined;
};
