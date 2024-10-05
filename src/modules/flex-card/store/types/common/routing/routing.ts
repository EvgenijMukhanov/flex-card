export type RoutingType = {
  routes: RouteType[];
};

export type RouteType = {
  type: "pathname";
  pathname: string[];
};
