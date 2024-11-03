import { RoutingOutletType } from "../../types/routing/routing-outlet";

export const mapDtoToRoutingOutlet = (
  children: any,
): RoutingOutletType | undefined => {
  if (
    typeof children === "object" &&
    children.element === "routing.outlet" &&
    typeof children.version === "number"
  ) {
    return {
      elementType: "routing",
      element: children.element,
      version: children.version,
    };
  }
  return undefined;
};
