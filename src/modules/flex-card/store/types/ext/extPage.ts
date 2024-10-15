import { NavigateMethodType } from "../common/methods/variants/navigateMethod";
import { RoutingModelType } from "../common/routing/routingModel";
import { ConfigurationModel } from "../configurationModel";
import { ElementType } from "../element";

export type ExtPageType = {
  routing: RoutingModelType;
  callbacks?: {
    navigate?: (data: NavigateMethodType) => void;
  };
  hooks?: {
    onLoadConfiguration?: (data: {
      model: ConfigurationModel | undefined;
      element: ElementType | undefined;
    }) => void;
  };
};
