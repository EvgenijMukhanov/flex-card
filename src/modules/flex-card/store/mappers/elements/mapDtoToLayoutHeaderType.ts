import { hasElementChildrens } from "../../helpers/elements/hasElementChildrens";
import { hasElementStyles } from "../../helpers/elements/hasElementStyles";
import { ElementType } from "../../types/element";
import { LayoutHeaderType } from "../../types/elements/layout-header";
import { mapDtoToStylesType } from "../common/mapDtoToStylesType";
import { mapDtoChildrensToElements } from "../mapDtoChildrensToElements";

export const mapDtoToLayoutHeaderType = (
  children: any,
): ElementType | undefined => {
  if (
    children &&
    children.element === "layout.header" &&
    typeof children.version === "number"
  ) {
    const element: LayoutHeaderType = {
      element: "layout.header",
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