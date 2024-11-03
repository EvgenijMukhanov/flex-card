import { ConfigurationModel } from "../../types/configurationModel";
import { ElementType } from "../../types/element";
import { GetConfigurationType } from "../../types/processes/get-configuration";

type CollectionGetConfigurationType = {
  breadcrumbs: number[];
  element: GetConfigurationType;
};

export const collectGetConfigurationFromConfigurationModel = (
  model: ConfigurationModel,
) => {
  const result: CollectionGetConfigurationType[] = [];
  if (model.element) {
    const find = collectionGetConfigurationFromElement(model.element, []);
    if (find.length > 0) {
      result.push(...find);
    }
  }
  if (model.elements) {
    model.elements.childrens.forEach((element: ElementType, idx: number) => {
      const find = collectionGetConfigurationFromElement(element, [idx]);
      if (find.length > 0) {
        result.push(...find);
      }
    });
  }
  return result;
};

const collectionGetConfigurationFromElement = (
  element: ElementType,
  breadcrumbs: number[],
): CollectionGetConfigurationType[] => {
  let result: CollectionGetConfigurationType[] = [];
  if (element.element === "get.configuration") {
    result.push({
      breadcrumbs,
      element,
    });
  }
  if (element.elementType === "grid" || element.elementType === "text") {
    if (Array.isArray(element.childrens) && element.childrens.length > 0) {
      element.childrens.forEach((item, idx) => {
        const _breadcrumbs = [...breadcrumbs, idx];
        const find = collectionGetConfigurationFromElement(item, _breadcrumbs);
        if (find.length > 0) {
          find.forEach((item) => {
            result.push(item);
          });
          return find;
        }
      });
    }
  }
  return result;
};
