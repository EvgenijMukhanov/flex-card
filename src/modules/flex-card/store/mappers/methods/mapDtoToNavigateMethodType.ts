import { NavigateMethodType } from "../../types/common/methods/variants/navigateMethod";
import { mapDtoToConfigurationDataIsolateType } from "../common/configurations/mapDtoToConfigurationDataIsolateType";
import { mapDtoToRoutingType } from "../common/routing/mapDtoToRoutingType";

export const mapDtoToNavigateMethodType = (
  obj: any,
): NavigateMethodType | undefined => {
  let result: NavigateMethodType | undefined = undefined;
  if (obj && obj.variant === "navigate") {
    const configuration = mapDtoToConfigurationDataIsolateType(obj.data);
    const routing = mapDtoToRoutingType(obj.routing);
    if (configuration && routing) {
      result = {
        variant: "navigate",
        data: {
          nesting: 0,
          configuration,
          routing,
        },
      };
    }
  }
  return result;
};
