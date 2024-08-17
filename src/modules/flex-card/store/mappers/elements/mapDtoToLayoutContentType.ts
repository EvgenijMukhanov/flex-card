import { hasElementChildrens } from "../../helpers/elements/hasElementChildrens";
import { hasElementStyles } from "../../helpers/elements/hasElementStyles";
import { ElementType } from "../../types/element";
import { LayoutContentType } from "../../types/elements/layout-content";
import { mapDtoToStylesType } from "../common/mapDtoToStylesType";
import { mapDtoChildrensToElements } from "../mapDtoChildrensToElements";

export const mapDtoToLayoutContentType = (
  children: any,
): ElementType | undefined => {
  if (
    children &&
    children.element === "layout.content" &&
    typeof children.version === "number"
  ) {
    const element: LayoutContentType = {
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
