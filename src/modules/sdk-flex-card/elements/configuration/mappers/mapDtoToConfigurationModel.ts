import { ElementsType } from "../../core/types/elements";
import { mapDtoChildrensToElements } from "./mapDtoChildrensToElements";

export const mapDtoToConfigurationModel = (dto: any): ElementsType => {
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
