import { ConfigurationModel } from "../../../elements/core/types/configurationModel";
import { NavigateMethodType } from "../common/methods/variants/navigateMethod";
import { RequestSourceType } from "../common/sources/requestSource";

export type CallbacksType = {
  root?: RootLevelCallbackType;
  nesting?: NestingLevelCallbackType;
};

export type NestingLevelCallbackType = {};

export type RootLevelCallbackType = {
  onLoadConfiguration?: (data: OnLoadConfigurationType) => void;
  navigate?: (data: NavigateMethodType) => void;
};

export type OnLoadConfigurationType = {
  configuration: ConfigurationModel;
  source: RequestSourceType;
  nesting: number;
};
