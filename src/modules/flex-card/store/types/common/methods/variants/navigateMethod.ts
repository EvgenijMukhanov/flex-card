import { RoutingType } from "../../routing/routing";
import { ConfigurationDataIsolateType } from "../../sources/configurationData";

export type NavigateMethodType = {
  variant: "navigate";
  configuration?: ConfigurationDataIsolateType;
  routing?: RoutingType;
};
