import { AnyObject } from "../../../../../../../shared/types/common/AnyObject";
import { ElementType } from "../../../../core/types/element";

export type LayoutContentType = {
  elementType: "grid";
  element: "layout.content";
  version: number;
  childrens?: ElementType[];
  styles?: AnyObject;
};
