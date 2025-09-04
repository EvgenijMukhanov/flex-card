import { AnyObject } from "../../../../../shared/types/common/AnyObject";
import { StyleType } from "../../types/common/styles";

export const mapDtoToStylesType = ({
  styleDto,
  allowStyles,
}: {
  styleDto: any;
  allowStyles: StyleType[];
}) => {
  if (styleDto && typeof styleDto === "object") {
    const _allowStyles = allowStyles as string[];
    const result: AnyObject = {};
    Object.keys(styleDto).forEach((key) => {
      if (_allowStyles.includes(key)) {
        if (["height", "minHeigth", "maxHeight"].includes(key)) {
          if (
            typeof styleDto[key] === "number" ||
            typeof styleDto[key] === "string"
          ) {
            result[key] = styleDto[key];
          }
        }
        if (["display"].includes(key)) {
          if (typeof styleDto[key] === "string") {
            result[key] = styleDto[key];
          }
        }
        if (["flexGrow"].includes(key)) {
          if (typeof styleDto[key] === "number") {
            result[key] = styleDto[key];
          }
        }
      }
    });
    return result;
  }
  return undefined;
};
