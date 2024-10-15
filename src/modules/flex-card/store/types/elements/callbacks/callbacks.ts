import { NavigateMethodType } from "../../common/methods/variants/navigateMethod";
import { ConfigurationModel } from "../../configurationModel";

export type CallbacksType = RootElementCallbackType;

export type RootElementCallbackType = {
  element: "root";
  joinConfiguration?: (data: {
    configuration: ConfigurationModel;
    breadcrumbs: number[];
  }) => void;
  navigate?: (data: NavigateMethodType) => void;
  onLoadConfiguration?: (data: ConfigurationModel) => void;
};
