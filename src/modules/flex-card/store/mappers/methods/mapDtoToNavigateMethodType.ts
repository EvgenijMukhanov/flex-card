import { NavigateMethodType } from "../../types/common/methods/variants/navigateMethod";
import { mapDtoToConfigurationDataIsolateType } from "../common/configurations/mapDtoToConfigurationDataIsolateType";
import { mapDtoToRoutingType } from "../common/routing/mapDtoToRoutingType";

export const mapDtoToNavigateMethodType = (
  obj: any,
): NavigateMethodType | undefined => {
  let result: NavigateMethodType | undefined = undefined;
  if (obj && obj.variant === "navigate") {
    result = {
      variant: "navigate",
    };
    const configuration = mapDtoToConfigurationDataIsolateType(obj.data);
    if (configuration) {
      result.configuration = configuration;
    }
    const routing = mapDtoToRoutingType(obj.routing);
    if (routing) {
      result.routing = routing;
    }
  }
  return result;
};
