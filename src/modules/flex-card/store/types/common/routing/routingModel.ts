import { ConfigurationDataIsolateType } from "../sources/configurationData";
import { RoutingType } from "./routing";

export type RoutingModelType = {
  nesting: number;
  configuration: ConfigurationDataIsolateType;
  routing: RoutingType;
};
