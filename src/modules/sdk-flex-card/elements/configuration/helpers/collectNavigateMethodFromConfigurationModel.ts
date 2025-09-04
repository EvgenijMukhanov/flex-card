import { NavigateMethodType } from "../../../store/types/common/methods/variants/navigateMethod";
import { ConfigurationModel } from "../../core/types/configurationModel";
import { ElementType } from "../../core/types/element";
import { MenuItemType, MenuType } from "../../view/navigation/menu/types/menu";

export const collectNavigateMethodFromConfigurationModel = (
  model: ConfigurationModel,
): NavigateMethodType[] => {
  const result: NavigateMethodType[] = [];
  if (model.element) {
    const find = collectNavigateMethodFromElement(model.element);
    if (find.length > 0) {
      result.push(...find);
    }
  }
  if (model.elements) {
    model.elements.childrens.forEach((element: ElementType) => {
      const find = collectNavigateMethodFromElement(element);
      if (find.length > 0) {
        find.forEach((item) => {
          result.push(item);
        });
      }
    });
  }
  return result;
};

const collectNavigateMethodFromElement = (
  element: ElementType,
): NavigateMethodType[] => {
  let result: NavigateMethodType[] = [];
  if (element.element === "menu") {
    const methods: NavigateMethodType[] =
      collectNavigateMethodFromMenu(element);
    if (methods.length > 0) {
      methods.forEach((item) => {
        result.push(item);
      });
    }
  }
  if (element.elementType === "grid" || element.elementType === "text") {
    if (Array.isArray(element.childrens) && element.childrens.length > 0) {
      element.childrens.forEach((item) => {
        const find = collectNavigateMethodFromElement(item);
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

const collectNavigateMethodFromMenu = (
  element: MenuType,
): NavigateMethodType[] => {
  const result: NavigateMethodType[] = [];
  element.props?.items?.forEach((item) => {
    const methods: NavigateMethodType[] =
      collectNavigateMethodFromMenuItem(item);
    if (methods.length > 0) {
      methods.forEach((elem) => {
        result.push(elem);
      });
    }
  });
  return result;
};

const collectNavigateMethodFromMenuItem = (
  item: MenuItemType,
): NavigateMethodType[] => {
  const result: NavigateMethodType[] = [];
  if (item.type === "menu" || item.type === "submenu") {
    if (item.handlers && Object.keys(item.handlers).length > 0) {
      item.handlers.onSelect?.forEach((handler) => {
        if (handler.variant === "navigate") {
          result.push(handler);
        }
      });
    }
  }
  if (
    item.type === "group" ||
    item.type === "menu" ||
    item.type === "submenu"
  ) {
    if (Array.isArray(item.children) && item.children.length > 0) {
      item.children.forEach((elem) => {
        const res = collectNavigateMethodFromMenuItem(elem);
        if (res.length > 0) {
          res.forEach((m) => {
            result.push(m);
          });
        }
      });
    }
  }
  return result;
};
