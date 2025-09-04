import { RequestSourceType } from "../../../types/common/sources/requestSource";

export const checkEqualSources = (
  oldSource: RequestSourceType,
  newSource: RequestSourceType,
): boolean => {
  if (oldSource.variant !== oldSource.variant) {
    return false;
  }
  if (oldSource.variant === "http" && newSource.variant === "http") {
    if (
      oldSource.baseUrl === newSource.baseUrl &&
      oldSource.execute === newSource.execute &&
      oldSource.method === newSource.method &&
      oldSource.pathname === newSource.pathname
    ) {
      return true;
    }
  }
  return false;
};
