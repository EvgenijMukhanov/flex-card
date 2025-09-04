export type MetaConfigurationType = {
  main: MetaConfigurationMainType;
  pages: MetaConfigurationPageType[];
};

export type MetaConfigurationPageType = {
  name: string;
  url: string;
  configuration: string;
};

export type MetaConfigurationMainType = {
  configuration: string;
};
