import { AnyObject } from "../../../../../../../shared/types/common/AnyObject";
import { ElementType } from "../../../../core/types/element";

export type LayoutType = {
  elementType: "grid";
  element: "layout";
  version: number;
  childrens?: ElementType[];
  styles?: AnyObject;
};
