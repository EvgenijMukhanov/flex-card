import { RequestSourceType } from "./requestSource";

export type ConfigurationDataType =
  | ConfigurationDataJoinType
  | ConfigurationDataIsolateType;

export type ConfigurationDataJoinType = {
  type: "configuration";
  relation: "join";
  source: RequestSourceType;
};

export type ConfigurationDataIsolateType = {
  type: "configuration";
  relation: "isolate";
  source: RequestSourceType;
};
