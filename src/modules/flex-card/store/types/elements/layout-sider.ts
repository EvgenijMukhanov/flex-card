import { AnyObject } from "../../../../../shared/types/common/AnyObject";
import { ElementType } from "../element";

export type LayoutSiderType = {
  elementType: "grid";
  element: "layout.sider";
  version: number;
  childrens?: ElementType[];
  styles?: AnyObject;
  props?: LayoutSiderPropsType;
};

export type LayoutSiderPropsType = {
  collapsible?: boolean;
  collapsedWidth?: number;
  defaultCollapsed?: boolean;
  reverseArrow?: boolean;
  width?: number | string;
};
