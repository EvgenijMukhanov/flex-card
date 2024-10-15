import { CallbacksType } from "../../elements/callbacks/callbacks";

export type ElementParentType = {
  callbacks?: CallbacksType;
  breadcrumbs: number[];
  name: string;
  nesting: number;
};
