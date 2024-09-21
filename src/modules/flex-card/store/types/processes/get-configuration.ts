import { RequestSourceType } from "../common/sources/requestSource";

export type GetConfigurationType = {
  element: "get.configuration";
  version: number;
  data?: ConfigurationDataType;
};

export type ConfigurationDataType = {
  type: "configuration";
  relation: ConfigurationDataRelationType;
  source: RequestSourceType;
};

export type ConfigurationDataRelationType = "join" | "isolate";
