import { fetchConfiguration } from "../../api/fetchConfiguration";
import { mapDtoToConfigurationModel } from "../../mappers/mapDtoToConfigurationModel";
import { ConfigurationModel } from "../../types/configurationModel";

export const loadMainConfiguration = async ({
  baseUrl,
  pathname,
}: {
  baseUrl: string;
  pathname: string;
}) => {
  const response = await fetchConfiguration({
    baseUrl,
    pathname,
  });
  const model: ConfigurationModel = mapDtoToConfigurationModel(response);
  return model;
};
