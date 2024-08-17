import { ElementType } from "../types/element";
import { mapDtoElementToElementType } from "./mapDtoElementToElementType";

export const mapDtoChildrensToElements = (
  childrens: any,
): ElementType[] | undefined => {
  if (Array.isArray(childrens)) {
    const mapResult: (ElementType | undefined)[] = childrens.map(
      (children: any) => {
        return mapDtoElementToElementType(children);
      },
    );
    const result: ElementType[] = [];
    mapResult.forEach((children) => {
      if (children) {
        result.push(children);
      }
    });
    if (result.length === 0) {
      return undefined;
    }
    return result;
  }
  return undefined;
};
