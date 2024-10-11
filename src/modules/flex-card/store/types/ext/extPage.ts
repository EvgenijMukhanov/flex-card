import { NavigateMethodType } from "../common/methods/variants/navigateMethod";
import { RoutingModelType } from "../common/routing/routingModel";

export type ExtPageType = {
  routing: RoutingModelType;
  callbacks?: {
    navigate?: (data: NavigateMethodType) => void;
  };
};
