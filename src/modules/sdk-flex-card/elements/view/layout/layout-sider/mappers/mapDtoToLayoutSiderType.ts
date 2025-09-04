import { hasElementChildrens } from "../../../../../store/helpers/elements/hasElements/hasElementChildrens";
import { hasElementProps } from "../../../../../store/helpers/elements/hasElements/hasElementProps";
import { hasElementStyles } from "../../../../../store/helpers/elements/hasElements/hasElementStyles";
import { LayoutSiderPropsType, LayoutSiderType } from "../types/layout-sider";
import { mapDtoToStylesType } from "../../../../../store/mappers/common/mapDtoToStylesType";
import { ElementType } from "../../../../core/types/element";
import { mapDtoChildrensToElements } from "../../../../configuration/mappers/mapDtoChildrensToElements";

export const mapDtoToLayoutSiderType = (
  children: any,
): ElementType | undefined => {
  if (
    children &&
    children.element === "layout.sider" &&
    typeof children.version === "number"
  ) {
    const element: LayoutSiderType = {
      elementType: "grid",
      element: "layout.sider",
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
    if (hasElementProps(children)) {
      const props = getProps(children.props);
      if (Object.keys(props).length > 0) {
        element.props = props;
      }
    }
    return element;
  }

  return undefined;
};

const getProps = (data: any): LayoutSiderPropsType => {
  const props: LayoutSiderPropsType = {};
  if (data && typeof data === "object") {
    if (typeof data.collapsible === "boolean") {
      props.collapsible = data.collapsible;
    }
    if (typeof data.collapsedWidth === "number") {
      props.collapsedWidth = data.collapsedWidth;
    }
    if (typeof data.defaultCollapsed === "boolean") {
      props.defaultCollapsed = data.defaultCollapsed;
    }
    if (typeof data.reverseArrow === "boolean") {
      props.reverseArrow = data.reverseArrow;
    }
    if (typeof data.width === "number" || typeof data.width === "string") {
      props.width = data.width;
    }
  }
  return props;
};
