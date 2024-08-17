import { AnyObject } from "../../../../../shared/types/common/AnyObject";
import { ElementType } from "../element";

export type LayoutContentType = {
  element: "layout.content";
  version: number;
  childrens?: ElementType[];
  styles?: AnyObject;
};
