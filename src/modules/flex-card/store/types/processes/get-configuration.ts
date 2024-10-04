import { ConfigurationDataType } from "../common/sources/configurationData";

export type GetConfigurationType = {
  element: "get.configuration";
  version: number;
  data?: ConfigurationDataType;
};
