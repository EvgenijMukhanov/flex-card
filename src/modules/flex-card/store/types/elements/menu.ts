import { AnyObject } from "../../../../../shared/types/common/AnyObject";
import { RequestSourceType } from "../common/sources/requestSource";

export type MenuType = {
  element: "menu";
  version: number;
  props?: MenuPropsType;
  styles?: AnyObject;
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
