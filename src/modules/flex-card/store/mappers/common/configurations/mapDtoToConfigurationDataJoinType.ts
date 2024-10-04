import { ConfigurationDataJoinType } from "../../../types/common/sources/configurationData";
import { mapDtoToRequestSourceType } from "../sources/mapDtoToRequestSourceType";

export const mapDtoToConfigurationDataJoinType = (
  data: any,
): ConfigurationDataJoinType | undefined => {
  let result: ConfigurationDataJoinType | undefined = undefined;
  if (
    data.type === "configuration" &&
    ["join"].includes(data.relation) &&
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
