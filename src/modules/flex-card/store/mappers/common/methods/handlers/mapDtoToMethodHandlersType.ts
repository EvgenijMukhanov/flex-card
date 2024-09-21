import { DirectActionMethodType } from "../../../../types/common/methods/directActionMethod";
import { MethodHandlersType } from "../../../../types/common/methods/handlers/methodHandlers";
import { AvailableHandlersType } from "../../../../types/common/methods/methods";

export const mapDtoToMethodHandlersType = (
  data: any,
  availableMethods: AvailableHandlersType[],
): MethodHandlersType | undefined => {
  if (typeof data === "object" && Object.keys(data).length > 0) {
    const handlers: MethodHandlersType = {};
    Object.keys(data).forEach((method) => {
      switch (method) {
        case "onSelect":
          if (
            Array.isArray(data[method]) &&
            availableMethods.includes(method)
          ) {
            const _handlers: DirectActionMethodType[] = [];
            data[method].forEach((handler: any) => {
              if (handler.variant === "navigate") {
                if (handler.target === "key") {
                  _handlers.push({
                    variant: "navigate",
                    target: "key",
                  });
                }
              }
            });
            handlers[method] = _handlers;
          }

          break;

        default:
          break;
      }
    });

    if (Object.keys(handlers).length > 0) {
      return handlers;
    }
  }
  return undefined;
};
