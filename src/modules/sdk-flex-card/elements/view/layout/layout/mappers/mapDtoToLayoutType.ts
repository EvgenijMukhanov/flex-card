import { hasElementChildrens } from "../../../../../store/helpers/elements/hasElements/hasElementChildrens";
import { hasElementStyles } from "../../../../../store/helpers/elements/hasElements/hasElementStyles";
import { LayoutType } from "../types/layout";
import { mapDtoToStylesType } from "../../../../../store/mappers/common/mapDtoToStylesType";
import { ElementType } from "../../../../core/types/element";
import { mapDtoChildrensToElements } from "../../../../configuration/mappers/mapDtoChildrensToElements";

export const mapDtoToLayoutType = (children: any): ElementType | undefined => {
  if (
    children &&
    children.element === "layout" &&
    typeof children.version === "number"
  ) {
    const element: LayoutType = {
      elementType: "grid",
      element: "layout",
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
