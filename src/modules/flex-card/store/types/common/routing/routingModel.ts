import { ConfigurationDataType } from "../sources/configurationData";
import { RoutingType } from "./routing";

export type RoutingModelType = {
  nesting: number;
  configuration: ConfigurationDataType;
  routing: RoutingType;
};
