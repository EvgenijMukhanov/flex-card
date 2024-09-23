import { ConfigurationModel } from "../../configurationModel";
import { ElementType } from "../../element";

export type CallbacksType = RootElementCallbackType;

export type RootElementCallbackType = {
  element: "root";
  joinConfiguration?: (data: {
    configuration: {
      model: ConfigurationModel | undefined;
      element: ElementType | undefined;
    };
    breadcrumbs: number[];
  }) => void;
};
