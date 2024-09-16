import { DirectActionMethodType } from "./directActionMethod";

export type MethodsType = {
  // [key in keyof AvailableMethodsType]?: DirectActionMethodType[];
  onSelect?: DirectActionMethodType[];
};

export type AvailableMethodsType = "onClick" | "onChange" | "onSelect";
