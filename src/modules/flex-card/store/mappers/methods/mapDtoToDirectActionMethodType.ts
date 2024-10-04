import { DirectActionMethodType } from "../../types/common/methods/directActionMethod";
import { mapDtoToNavigateMethodType } from "./mapDtoToNavigateMethodType";

export const mapDtoToDirectActionMethodType = (
  data: any,
): DirectActionMethodType[] | undefined => {
  const result: DirectActionMethodType[] = [];
  if (data && Array.isArray(data) && data.length > 0) {
    data.forEach((item) => {
      if (item.variant === "navigate") {
        const method = mapDtoToNavigateMethodType(item);
        if (method) {
          result.push(method);
        }
      }
    });
  }
  return result;
};
