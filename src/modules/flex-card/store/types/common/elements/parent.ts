import { CallbacksType } from "../../elements/callbacks/callbacks";

export type ElementParentType = {
  breadcrumbs: number[];
  name: string;
  callbacks?: CallbacksType;
  nesting: number;
};
