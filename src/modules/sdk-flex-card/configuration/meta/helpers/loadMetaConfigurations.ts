import { fetchMetaConfiguration } from "../api/fetchMetaConfiguration";
import { mapDtoToMetaConfigurations } from "../mappers/mapDtoToMetaConfigurations";
import { RequestSourceHttpType } from "../../../store/types/common/sources/requestSource";

export const loadMetaConfigurations = async (source: RequestSourceHttpType) => {
  const response = await fetchMetaConfiguration(source);
  const result = mapDtoToMetaConfigurations(response);
  return result;
};
