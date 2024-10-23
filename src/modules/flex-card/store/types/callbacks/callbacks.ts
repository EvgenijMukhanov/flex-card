import { NavigateMethodType } from "../common/methods/variants/navigateMethod";
import { ConfigurationDataType } from "../common/sources/configurationData";
import { ConfigurationModel } from "../configurationModel";

export type CallbacksType = {
  root?: RootLevelCallbackType;
  nesting?: NestingLevelCallbackType;
};

export type NestingLevelCallbackType = {
  joinConfiguration?: (data: {
    configuration: ConfigurationModel;
    breadcrumbs: number[];
  }) => void;
};

export type RootLevelCallbackType = {
  onLoadConfiguration?: (data: {
    configuration: ConfigurationModel;
    data?: ConfigurationDataType;
    breadcrumbs: number[];
    nesting: number;
  }) => void;
  navigate?: (data: NavigateMethodType) => void;
};
