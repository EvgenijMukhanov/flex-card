import { AnyObject } from "../../../../../shared/types/common/AnyObject";
import { ElementType } from "../element";

export type TypographyType = {
  elementType: "text";
  element: "typography";
  version: number;
  childrens?: ElementType[];
  props?: TypographyPropsType;
  styles?: AnyObject;
};

export type TypographyPropsType = {
  children?: string;
};
