import {
  MetaConfigurationMainType,
  MetaConfigurationPageType,
  MetaConfigurationType,
} from "../types/configuration";

export const mapDtoToMetaConfigurations = (dto: any): MetaConfigurationType => {
  const pages: MetaConfigurationPageType[] = [];
  const main: MetaConfigurationMainType = { configuration: "" };
  if (Array.isArray(dto?.pages)) {
    dto.pages?.forEach((item: any) => {
      if (
        typeof item.name === "string" &&
        typeof item.url === "string" &&
        typeof item.configuration === "string"
      ) {
        pages.push({
          name: item.name,
          url: item.url,
          configuration: item.configuration,
        });
      }
    });
  }
  if (
    typeof dto?.main === "object" &&
    typeof dto.main?.configuration === "string"
  ) {
    main.configuration = dto.main.configuration;
  }
  return {
    pages,
    main,
  };
};
