import { NavigateMethodType } from "../../types/common/methods/variants/navigateMethod";
import { mapDtoToConfigurationDataIsolateType } from "../common/configurations/mapDtoToConfigurationDataIsolateType";
import { mapDtoToRoutesType } from "../common/routing/mapDtoToRoutesType";

export const mapDtoToNavigateMethodType = (
  obj: any,
): NavigateMethodType | undefined => {
  let result: NavigateMethodType | undefined = undefined;
  if (obj && obj.variant === "navigate") {
    result = {
      variant: "navigate",
    };
    const data = mapDtoToConfigurationDataIsolateType(obj.data);
    if (data) {
      result.data = data;
    }
    const routes = mapDtoToRoutesType(obj.routes);
    if (routes) {
      result.routes = routes;
    }
  }
  return result;
};
