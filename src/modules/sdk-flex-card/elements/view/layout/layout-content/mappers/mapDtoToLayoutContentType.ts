import { hasElementChildrens } from "../../../../../store/helpers/elements/hasElements/hasElementChildrens";
import { hasElementStyles } from "../../../../../store/helpers/elements/hasElements/hasElementStyles";
import { LayoutContentType } from "../types/layout-content";
import { mapDtoToStylesType } from "../../../../../store/mappers/common/mapDtoToStylesType";
import { ElementType } from "../../../../core/types/element";
import { mapDtoChildrensToElements } from "../../../../configuration/mappers/mapDtoChildrensToElements";

export const mapDtoToLayoutContentType = (
  children: any,
): ElementType | undefined => {
  if (
    children &&
    children.element === "layout.content" &&
    typeof children.version === "number"
  ) {
    const element: LayoutContentType = {
      elementType: "grid",
      element: "layout.content",
      version: children.version,
    };
    if (hasElementChildrens(children)) {
      const childrens = mapDtoChildrensToElements(children.childrens);
      if (childrens) {
        element.childrens = childrens;
      }
    }
    if (hasElementStyles(children)) {
      const styles = mapDtoToStylesType({
        styleDto: children.styles,
        allowStyles: ["height", "maxHeight", "minHeigth"],
      });
      if (styles) {
        element.styles = styles;
      }
    }
    return element;
  }

  return undefined;
};
