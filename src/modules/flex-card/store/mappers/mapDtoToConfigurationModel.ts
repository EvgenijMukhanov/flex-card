import { ConfigurationModel } from "../types/configurationModel";
import { mapDtoChildrensToElements } from "./mapDtoChildrensToElements";

export const mapDtoToConfigurationModel = (dto: any): ConfigurationModel => {
  if (dto && Array.isArray(dto?.childrens)) {
    const childrens = mapDtoChildrensToElements(dto.childrens);
    if (childrens) {
      return { childrens };
    }
  }
  return {
    childrens: [],
  };
};
