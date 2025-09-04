import { hasElementChildrens } from "../../../../../store/helpers/elements/hasElements/hasElementChildrens";
import { hasElementProps } from "../../../../../store/helpers/elements/hasElements/hasElementProps";
import { hasElementStyles } from "../../../../../store/helpers/elements/hasElements/hasElementStyles";
import { TypographyPropsType, TypographyType } from "../types/typography";
import { mapDtoToStylesType } from "../../../../../store/mappers/common/mapDtoToStylesType";
import { ElementType } from "../../../../core/types/element";
import { mapDtoChildrensToElements } from "../../../../configuration/mappers/mapDtoChildrensToElements";

export const mapDtoToTypographyType = (
  children: any,
): ElementType | undefined => {
  if (
    children &&
    children.element === "typography" &&
    typeof children.version === "number"
  ) {
    const element: TypographyType = {
      elementType: "text",
      element: "typography",
      version: children.version,
    };

    if (hasElementChildrens(children)) {
      const childrens = mapDtoChildrensToElements(children.childrens);
      if (childrens) {
        element.childrens = childrens;
      }
    }

    if (hasElementProps(children)) {
      const props = getProps(children.props);
      if (Object.keys(props).length > 0) {
        element.props = props;
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

const getProps = (data: any): TypographyPropsType => {
  const props: TypographyPropsType = {};
  if (data && typeof data === "object") {
    if (data.children && typeof data.children === "string") {
      props.children = data.children;
    }
  }
  return props;
};
