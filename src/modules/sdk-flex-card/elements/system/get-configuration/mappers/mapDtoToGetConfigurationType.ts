import { GetConfigurationType } from "../types/get-configuration";
import { mapDtoToConfigurationDataIsolateType } from "../../../../store/mappers/common/configurations/mapDtoToConfigurationDataIsolateType";
import { mapDtoToConfigurationDataJoinType } from "../../../../store/mappers/common/configurations/mapDtoToConfigurationDataJoinType";

export const mapDtoToGetConfigurationType = (
  children: any,
): GetConfigurationType | undefined => {
  if (
    typeof children === "object" &&
    children.element === "get.configuration" &&
    typeof children.version === "number"
  ) {
    return {
      elementType: "configuration",
      element: "get.configuration",
      version: children.version,
      data:
        mapDtoToConfigurationDataJoinType(children.data) ||
        mapDtoToConfigurationDataIsolateType(children.data),
    };
  }
  return undefined;
};
