import { AnyObject } from "../../../../../shared/types/common/AnyObject";
import { ElementType } from "../element";

export type LayoutHeaderType = {
  element: "layout.header";
  version: number;
  childrens?: ElementType[];
  styles?: AnyObject;
};
