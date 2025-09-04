import { hasElementChildrens } from "../../../../../store/helpers/elements/hasElements/hasElementChildrens";
import { hasElementProps } from "../../../../../store/helpers/elements/hasElements/hasElementProps";
import { hasElementStyles } from "../../../../../store/helpers/elements/hasElements/hasElementStyles";
import { FlexPropsType, FlexType } from "../types/flex";
import { mapDtoToStylesType } from "../../../../../store/mappers/common/mapDtoToStylesType";
import { ElementType } from "../../../../core/types/element";
import { mapDtoChildrensToElements } from "../../../../configuration/mappers/mapDtoChildrensToElements";

export const mapDtoToFlexType = (children: any): ElementType | undefined => {
  if (
    children &&
    children.element === "flex" &&
    typeof children.version === "number"
  ) {
    const element: FlexType = {
      elementType: "grid",
      element: "flex",
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
        allowStyles: ["height", "maxHeight", "minHeigth", "flexGrow"],
      });
      if (styles) {
        element.styles = styles;
      }
    }
    if (hasElementProps(children)) {
      const props = getProps(children.props);
      element.props = props;
    }
    return element;
  }
  return undefined;
};

const getProps = (data: any): FlexPropsType => {
  const props: FlexPropsType = {};
  if (data && typeof data === "object") {
    if (typeof data.vertical === "boolean") {
      props.vertical = data.vertical;
    }

    if (
      typeof data.wrap === "string" &&
      ["nowrap", "wrap", "wrap-reverse"].includes(data.wrap)
    ) {
      props.wrap = data.wrap;
    }

    if (
      typeof data.justify === "string" &&
      [
        "start",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
      ].includes(data.justify)
    ) {
      props.justify = data.justify;
    }

    if (
      typeof data.align === "string" &&
      ["stretch", "center", "start", "end"].includes(data.align)
    ) {
      props.align = data.align;
    }

    if (
      typeof data.gap === "string" &&
      ["small", "middle", "large"].includes(data.gap)
    ) {
      props.gap = data.gap;
    }
  }
  return props;
};
