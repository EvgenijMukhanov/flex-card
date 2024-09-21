import { DirectActionMethodType } from "../../../types/common/methods/directActionMethod";
import {
  AvailableHandlersType,
  MethodsType,
} from "../../../types/common/methods/methods";
import { mapDtoToMethodHandlersType } from "./handlers/mapDtoToMethodHandlersType";

export const mapDtoToMethodsType = (
  data: any,
  availableMethods: AvailableHandlersType[],
): MethodsType | undefined => {
  if (typeof data === "object" && Object.keys(data).length > 0) {
    const methods: MethodsType = {};
    if (data.handlers) {
      const handlers = mapDtoToMethodHandlersType(
        data.handlers,
        availableMethods,
      );
      if (handlers) {
        methods.handlers = handlers;
      }
    }
    if (Object.keys(methods).length > 0) {
      return methods;
    }
  }
  return undefined;
};
