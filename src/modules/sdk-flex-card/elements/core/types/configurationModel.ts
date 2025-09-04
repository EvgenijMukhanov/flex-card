import { ElementType } from "./element";
import { ElementsType } from "./elements";

export type ConfigurationModel = {
  element: ElementType | undefined;
  elements: ElementsType | undefined;
};
