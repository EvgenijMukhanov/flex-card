import { AnyObject } from "../../../../../shared/types/common/AnyObject";
import { ElementType } from "../element";

export type LayoutFooterType = {
  element: "layout.footer";
  version: number;
  childrens?: ElementType[];
  styles?: AnyObject;
};
