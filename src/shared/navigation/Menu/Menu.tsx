import {
  Menu as MenuAnt,
  MenuProps as MenuPropsAnt,
  MenuRef as MenuRefAnt,
} from "antd";
import {
  MenuDividerProps as MenuDividerPropsAnt,
  MenuItemGroupProps as MenuItemGroupPropsAnt,
  MenuItemProps as MenuItemPropsAnt,
  SubMenuProps as SubMenuPropsAnt,
} from "antd/es/menu";
import {
  ItemType as ItemTypeAnt,
  MenuItemType as MenuItemTypeAnt,
} from "antd/es/menu/interface";
import { RefAttributes } from "react";
import { JSX } from "react/jsx-runtime";

type PropTypes = JSX.IntrinsicAttributes &
  Omit<MenuPropsAnt & RefAttributes<MenuRefAnt>, "items"> & {
    items?: ItemTypeAnt<MenuItemTypeAnt>[] | undefined;
  };
type MenuProps = MenuPropsAnt;
type MenuRef = MenuRefAnt;
type ItemType = ItemTypeAnt;
type MenuItemType = MenuItemTypeAnt;
type MenuDividerProps = MenuDividerPropsAnt;
type MenuItemGroupProps = MenuItemGroupPropsAnt;
type MenuItemProps = MenuItemPropsAnt;
type SubMenuProps = SubMenuPropsAnt;

export const Menu = (props: PropTypes) => {
  return <MenuAnt {...props} />;
};

const Divider = (props: JSX.IntrinsicAttributes & MenuDividerPropsAnt) => {
  return <MenuAnt.Divider {...props} />;
};

const Item = (props: JSX.IntrinsicAttributes & MenuItemPropsAnt) => {
  return <MenuAnt.Item {...props} />;
};

const ItemGroup = (
  props: JSX.IntrinsicAttributes &
    Pick<
      MenuItemGroupPropsAnt,
      "className" | "style" | "title" | "children" | "eventKey" | "warnKey"
    > &
    RefAttributes<HTMLLIElement>,
) => {
  return <MenuAnt.ItemGroup {...props} />;
};

const SubMenu = (props: JSX.IntrinsicAttributes & SubMenuPropsAnt) => {
  return <MenuAnt.SubMenu {...props} />;
};

Menu.Divider = Divider;
Menu.Item = Item;
Menu.ItemGroup = ItemGroup;
Menu.SubMenu = SubMenu;

export type {
  MenuProps,
  MenuRef,
  ItemType,
  MenuItemType,
  MenuDividerProps,
  MenuItemGroupProps,
  MenuItemProps,
  SubMenuProps,
};
