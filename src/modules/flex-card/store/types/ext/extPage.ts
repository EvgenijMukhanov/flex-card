import { NavigateMethodType } from "../common/methods/variants/navigateMethod";

export type ExtPageType = {
  callbacks?: {
    navigate?: (data: NavigateMethodType) => void;
  };
};
