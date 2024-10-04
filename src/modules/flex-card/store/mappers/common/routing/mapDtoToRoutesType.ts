import { RoutesType, RouteType } from "../../../types/common/routing/routes";

export const mapDtoToRoutesType = (data: any): RoutesType | undefined => {
  let result: RoutesType = {
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
      if (item && item.pathname && typeof item.pathname === "string") {
        routes.push({
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
