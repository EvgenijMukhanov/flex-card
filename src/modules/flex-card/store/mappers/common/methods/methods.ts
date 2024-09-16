import { DirectActionMethodType } from "../../../types/common/methods/directActionMethod";
import {
  AvailableMethodsType,
  MethodsType,
} from "../../../types/common/methods/methods";

export const mapDtoToMethodsType = (
  data: any,
  availableMethods: AvailableMethodsType[],
): MethodsType | undefined => {
  if (typeof data === "object" && Object.keys(data).length > 0) {
    const methods: MethodsType = {};
    Object.keys(data).forEach((method) => {
      switch (method) {
        case "onSelect":
          if (
            Array.isArray(data[method]) &&
            availableMethods.includes(method)
          ) {
            const handlers: DirectActionMethodType[] = [];
            data[method].forEach((handler: any) => {
              if (handler.variant === "navigate") {
                if (handler.target === "key") {
                  handlers.push({
                    variant: "navigate",
                    target: "key",
                  });
                }
              }
            });
            methods[method] = handlers;
          }

          break;

        default:
          break;
      }
    });

    if (Object.keys(methods).length > 0) {
      return methods;
    }
  }
  return undefined;
};
