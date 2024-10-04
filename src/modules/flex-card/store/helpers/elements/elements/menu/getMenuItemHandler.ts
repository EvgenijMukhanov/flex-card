import { MenuHandlersType } from "../../../../types/elements/handlers/menuHandlers";
import { MenuItemType } from "../../../../types/elements/menu";

export const getMenuItemHandler = (
  items: MenuItemType[] | undefined,
  keyPath: string[],
): MenuHandlersType | undefined => {
  if (
    keyPath &&
    Array.isArray(keyPath) &&
    keyPath.length > 0 &&
    items &&
    items.length > 0
  ) {
    const find = findItem(items, keyPath);
    if (find?.type === "menu" || find?.type === "submenu") {
      if (find.handlers) {
        return find.handlers;
      }
    }
  }
  return undefined;
};

const findItem = (
  items: MenuItemType[],
  keyPath: string[],
): MenuItemType | undefined => {
  let find: MenuItemType | undefined = undefined;
  if (keyPath.length > 0 && items.length > 0) {
    const key = keyPath[0];
    items.forEach((item: MenuItemType) => {
      if (item.type === "menu" || item.type === "submenu") {
        if (item.key === key) {
          return (find = item);
        }
        if (item.children) {
          const _keyPath = [...keyPath].shift();
          if (_keyPath && _keyPath.length > 0) {
            const findInChildren = findItem(item.children, keyPath);
            if (findInChildren) {
              find = findInChildren;
            }
          }
        }
      }
    });
  }
  return find;
};
