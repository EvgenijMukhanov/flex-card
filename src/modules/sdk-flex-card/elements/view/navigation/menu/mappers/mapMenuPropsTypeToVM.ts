import {
  MenuItemType,
  MenuItemVMType,
  MenuPropsType,
  MenuPropsVMType,
  MenuType,
  MenuVMType,
} from "../types/menu";

export const mapMenuPropsTypeToVM = (
  props: MenuPropsType | undefined,
): MenuPropsVMType | undefined => {
  if (!props) {
    return undefined;
  }

  const result: MenuPropsVMType = {
    mode: props.mode,
  };
  const items = props.items?.map((item) => {
    return getMenuItem(item);
  });
  if (items) {
    result.items = items;
  }
  return result;
};

const getMenuItem = (item: MenuItemType): MenuItemVMType => {
  if (item.type === "menu" || item.type === "submenu") {
    const _item: MenuItemVMType = {
      key: item.key,
      label: item.label,
      danger: item.danger,
      disabled: item.disabled,
    };
    if (item.children) {
      const childrens = item.children.map((elem) => {
        return getMenuItem(elem);
      });
      _item.children = childrens;
    }
    return _item;
  }
  return item;
};
