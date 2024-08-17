import { AnyObject } from "../../../../../shared/types/common/AnyObject";
import { ElementType } from "../element";

export type FlexType = {
  element: "flex";
  version: number;
  childrens?: ElementType[];
  styles?: AnyObject;
  props?: FlexPropsType;
};

export type FlexPropsType = {
  vertical?: boolean;
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  justify?:
    | "start"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  align?: "stretch" | "center" | "start" | "end";
  gap?: "small" | "middle" | "large";
};
