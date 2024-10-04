import { ConfigurationDataIsolateType } from "../../../types/common/sources/configurationData";
import { mapDtoToRequestSourceType } from "../sources/mapDtoToRequestSourceType";

export const mapDtoToConfigurationDataIsolateType = (
  data: any,
): ConfigurationDataIsolateType | undefined => {
  let result: ConfigurationDataIsolateType | undefined = undefined;
  if (
    data.type === "configuration" &&
    ["isolate"].includes(data.relation) &&
    ["http", "import"].includes(data?.source?.variant)
  ) {
    const source = mapDtoToRequestSourceType(data.source);
    if (source) {
      result = {
        type: "configuration",
        relation: data.relation,
        source,
      };
    }
  }
  return result;
};
