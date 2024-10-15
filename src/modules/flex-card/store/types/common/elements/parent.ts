import { ConfigurationModel } from "../../configurationModel";
import { CallbacksType } from "../../elements/callbacks/callbacks";

export type ElementParentType = {
  breadcrumbs: number[];
  name: string;
  callbacks?: CallbacksType;
  hooks?: {
    onLoadConfiguration?: (data: ConfigurationModel) => void;
  };
  nesting: number;
};
