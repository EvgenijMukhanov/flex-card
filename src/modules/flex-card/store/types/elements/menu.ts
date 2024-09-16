import { AnyObject } from "../../../../../shared/types/common/AnyObject";
import { MethodsType } from "../common/methods/methods";

export type MenuType = {
  element: "menu";
  version: number;
  props?: MenuPropsType;
  styles?: AnyObject;
  methods?: MethodsType;
};

export type MenuPropsType = {
  items?: MenuItemType[];
  mode?: "vertical" | "horizontal" | "inline";
};

export type MenuItemType =
  | MainMenuType
  | SubMenuType
  | MenuItemGroupType
  | MenuDividerType;

export type MainMenuType = {
  key: string;
  label: string;
  disabled?: boolean;
  danger?: boolean;
  children?: MenuItemType[];
};

export type SubMenuType = {
  key: string;
  label: string;
  disabled?: boolean;
  danger?: boolean;
  children?: MenuItemType[];
};

export type MenuItemGroupType = {
  type: "group";
  label: string;
  children: MenuItemType[];
};

export type MenuDividerType = {
  type: "divider";
};
