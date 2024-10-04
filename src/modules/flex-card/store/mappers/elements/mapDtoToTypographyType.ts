import { hasElementChildrens } from "../../helpers/elements/hasElements/hasElementChildrens";
import { hasElementProps } from "../../helpers/elements/hasElements/hasElementProps";
import { hasElementStyles } from "../../helpers/elements/hasElements/hasElementStyles";
import { ElementType } from "../../types/element";
import {
  TypographyPropsType,
  TypographyType,
} from "../../types/elements/typography";
import { mapDtoToStylesType } from "../common/mapDtoToStylesType";
import { mapDtoChildrensToElements } from "../mapDtoChildrensToElements";

export const mapDtoToTypographyType = (
  children: any,
): ElementType | undefined => {
  if (
    children &&
    children.element === "typography" &&
    typeof children.version === "number"
  ) {
    const element: TypographyType = {
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
