import { ConfigurationDataType } from "../sources/configurationData";
import { RoutingType } from "./routing";

export type RoutingModelType = {
  nesting: number;
  loading: boolean;
  configuration: ConfigurationDataType;
  routing: RoutingType;
};
