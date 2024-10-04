import { RoutesType } from "../../routing/routes";
import { ConfigurationDataIsolateType } from "../../sources/configurationData";

export type NavigateMethodType = {
  variant: "navigate";
  data?: ConfigurationDataIsolateType;
  routes?: RoutesType;
};
