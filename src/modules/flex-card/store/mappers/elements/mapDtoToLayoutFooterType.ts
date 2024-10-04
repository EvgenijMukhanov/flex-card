import { hasElementChildrens } from "../../helpers/elements/hasElements/hasElementChildrens";
import { hasElementStyles } from "../../helpers/elements/hasElements/hasElementStyles";
import { ElementType } from "../../types/element";
import { LayoutFooterType } from "../../types/elements/layout-footer";
import { mapDtoToStylesType } from "../common/mapDtoToStylesType";
import { mapDtoChildrensToElements } from "../mapDtoChildrensToElements";

export const mapDtoToLayoutFooterType = (
  children: any,
): ElementType | undefined => {
  if (
    children &&
    children.element === "layout.footer" &&
    typeof children.version === "number"
  ) {
    const element: LayoutFooterType = {
      element: "layout.footer",
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
