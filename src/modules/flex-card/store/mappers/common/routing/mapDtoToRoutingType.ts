import { checkArrayOfString } from "../../../helpers/common/utils/checkArrayOfString";
import { RoutingType, RouteType } from "../../../types/common/routing/routing";

export const mapDtoToRoutingType = (data: any): RoutingType | undefined => {
  let result: RoutingType = {
    routes: [],
  };
  if (
    data &&
    data.routes &&
    Array.isArray(data.routes) &&
    data.routes.length > 0
  ) {
    const routes: RouteType[] = [];
    data.routes.forEach((item: any) => {
      if (item && checkArrayOfString(item.pathname)) {
        routes.push({
          type: "pathname",
          pathname: item.pathname,
        });
      }
    });
    if (routes.length > 0) {
      result.routes = routes;
      return result;
    }
  }
  return undefined;
};
