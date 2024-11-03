import { hasElementHandlers } from "../../helpers/elements/hasElements/hasElementHandlers";
import { hasElementProps } from "../../helpers/elements/hasElements/hasElementProps";
import { hasElementStyles } from "../../helpers/elements/hasElements/hasElementStyles";
import { ElementType } from "../../types/element";
import { MenuHandlersType } from "../../types/elements/handlers/menuHandlers";
import {
  MenuItemType,
  MenuPropsType,
  MenuType,
} from "../../types/elements/menu";
import { mapDtoToStylesType } from "../common/mapDtoToStylesType";
import { mapDtoToDirectActionMethodType } from "../methods/mapDtoToDirectActionMethodType";

export const mapDtoToMenuType = (children: any): ElementType | undefined => {
  if (
    children &&
    children.element === "menu" &&
    typeof children.version === "number"
  ) {
    const element: MenuType = {
      elementType: "menu",
      element: "menu",
      version: children.version,
    };

    if (hasElementStyles(children)) {
      const styles = mapDtoToStylesType({
        styleDto: children.styles,
        allowStyles: ["height", "maxHeight", "minHeigth"],
      });
      if (styles) {
        element.styles = styles;
      }
    }
    if (hasElementProps(children)) {
      const props = getProps(children.props);
      if (Object.keys(props).length > 0) {
        element.props = props;
      }
    }
    return element;
  }

  return undefined;
};

const getProps = (data: any): MenuPropsType => {
  const props: MenuPropsType = {};
  if (data && typeof data === "object") {
    if (data.items && Array.isArray(data.items)) {
      const items = getMenuItems(data.items);
      if (items.length > 0) {
        props.items = items;
      }
    }
    if (
      typeof data.mode === "string" &&
      ["vertical", "horizontal", "inline"].includes(data.mode)
    ) {
      props.mode = data.mode;
    }
  }
  return props;
};

const getMenuItems = (data: any): MenuItemType[] => {
  if (Array.isArray(data)) {
    const result: MenuItemType[] = [];
    data.forEach((item) => {
      if (item.type === "divider") {
        result.push({
          type: item.type,
        });
      }
      if (item.type === "group") {
        if (typeof item.label === "string") {
          const children = getMenuItems(item.children);
          if (children.length > 0) {
            result.push({
              type: item.type,
              label: item.label,
              children,
            });
          } else {
            result.push({
              type: item.type,
              label: item.label,
            });
          }
        }
      }
      if (
        typeof item.key === "string" &&
        typeof item.label === "string" &&
        (item.type === "menu" || item.type === "submenu")
      ) {
        const children = getMenuItems(item.children);
        if (children.length > 0) {
          const menuItem: MenuItemType = {
            type: item.type,
            key: String(item.key),
            label: String(item.label),
            disabled: item.disabled ? true : false,
            danger: item.danger ? true : undefined,
            children,
          };
          result.push(menuItem);
        } else {
          const menuItem: MenuItemType = {
            type: item.type,
            key: String(item.key),
            label: String(item.label),
            danger: item.danger ? true : false,
            disabled: item.disabled ? true : undefined,
          };
          if (hasElementHandlers(item)) {
            const handlers = getHandlers(item);
            if (handlers) {
              menuItem.handlers = handlers;
            }
          }
          result.push(menuItem);
        }
      }
    });
    return result;
  }
  return [];
};

const getHandlers = (item: any): MenuHandlersType | undefined => {
  const result: MenuHandlersType = {};
  if (item.handlers) {
    if (item.handlers.onSelect) {
      const onSelect = mapDtoToDirectActionMethodType(item.handlers.onSelect);
      if (onSelect) {
        result.onSelect = onSelect;
      }
    }
    if (Object.keys(result).length > 0) {
      return result;
    }
  }
  return undefined;
};
