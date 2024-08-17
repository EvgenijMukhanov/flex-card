import { RequestSourceType } from "../common/sources/requestSource";

export type GetConfigurationType = {
  element: "get.configuration";
  version: number;
  sources?: ConfigurationSourceType[];
};

export type ConfigurationSourceType = {
  type: "configuration";
  target: "current";
  variant: "http";
  source: RequestSourceType;
};
