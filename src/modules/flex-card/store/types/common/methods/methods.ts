import { MethodHandlersType } from "./handlers/methodHandlers";

export type MethodsType = {
  // [key in keyof AvailableHandlersType]?: DirectActionMethodType[];
  handlers?: MethodHandlersType;
};

export type AvailableHandlersType = "onClick" | "onChange" | "onSelect";
