import { MethodsType } from "../../../../types/common/methods/methods";
import { AnyObject } from "../../../../../../../shared/types/common/AnyObject";
import Context from "../../../../../Context/Context";

export const createHandlers = (methods: MethodsType): AnyObject => {
  if (methods.handlers) {
    if (methods.handlers.onSelect) {
      return {
        onSelect: (event: AnyObject) => {
          if (event && event.keyPath) {
            const context = Context.getInstance();
            if (Array.isArray(event.keyPath)) {
              const path = event.keyPath.join("/");
              if (path && typeof path === "string" && context.navigate) {
                context.navigate(path);
              }
            }
          }
        },
      };
    }
  }
  return {};
};
