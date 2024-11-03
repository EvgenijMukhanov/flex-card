import { AnyObject } from "../../../../../shared/types/common/AnyObject";
import { MenuHandlersType } from "./handlers/menuHandlers";

export type MenuType = {
  elementType: "menu";
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
  type: "menu";
  key: string;
  label: string;
  disabled?: boolean;
  danger?: boolean;
  handlers?: MenuHandlersType;
  children?: MenuItemType[];
};

export type SubMenuType = {
  type: "submenu";
  key: string;
  label: string;
  disabled?: boolean;
  danger?: boolean;
  handlers?: MenuHandlersType;
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

// VM
export type MenuVMType = {
  element: "menu";
  version: number;
  props?: MenuPropsVMType;
  styles?: AnyObject;
};

export type MenuPropsVMType = {
  items?: MenuItemVMType[];
  mode?: "vertical" | "horizontal" | "inline";
};

export type MenuItemVMType =
  | MainMenuVMType
  | SubMenuVMType
  | MenuItemGroupVMType
  | MenuDividerType;

export type MainMenuVMType = {
  key: string;
  label: string;
  disabled?: boolean;
  danger?: boolean;
  children?: MenuItemVMType[];
};

export type SubMenuVMType = {
  key: string;
  label: string;
  disabled?: boolean;
  danger?: boolean;
  children?: MenuItemVMType[];
};

export type MenuItemGroupVMType = {
  type: "group";
  label: string;
  children: MenuItemVMType[];
};
