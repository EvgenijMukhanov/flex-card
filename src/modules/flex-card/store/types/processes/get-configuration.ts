import { ConfigurationDataType } from "../common/sources/configurationData";

export type GetConfigurationType = {
  elementType: "configuration";
  element: "get.configuration";
  version: number;
  data?: ConfigurationDataType;
};
