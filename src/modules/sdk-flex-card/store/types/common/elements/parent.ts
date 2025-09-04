import { CallbacksType } from "../../callbacks/callbacks";

export type ElementParentType = {
  callbacks?: CallbacksType;
  breadcrumbs: number[];
  name: string;
  nesting: number;
};
