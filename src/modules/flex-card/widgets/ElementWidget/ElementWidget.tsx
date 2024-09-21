import { ElementType } from "../../store/types/element";
import {
  FlexWidget,
  LayoutContentWidget,
  LayoutFooterWidget,
  LayoutHeaderWidget,
  LayoutSiderWidget,
  LayoutWidget,
  MenuWidget,
  TypographyWidget,
} from "../elements";
import { GetConfigurationWidget } from "../processes";

type Props = {
  children: ElementType;
  currentKey: string;
};

export const ElementWidget = ({ children, currentKey }: Props) => {
  return (
    <>
      {children.element === "get.configuration" && (
        <GetConfigurationWidget children={children} currentKey={currentKey} />
      )}
      {children.element === "layout" && (
        <LayoutWidget children={children} currentKey={currentKey} />
      )}
      {children.element === "layout.sider" && (
        <LayoutSiderWidget children={children} currentKey={currentKey} />
      )}
      {children.element === "layout.header" && (
        <LayoutHeaderWidget children={children} currentKey={currentKey} />
      )}
      {children.element === "layout.content" && (
        <LayoutContentWidget children={children} currentKey={currentKey} />
      )}
      {children.element === "layout.footer" && (
        <LayoutFooterWidget children={children} currentKey={currentKey} />
      )}
      {children.element === "typography" && (
        <TypographyWidget children={children} currentKey={currentKey} />
      )}
      {children.element === "flex" && (
        <FlexWidget children={children} currentKey={currentKey} />
      )}
      {children.element === "menu" && (
        <MenuWidget children={children} currentKey={currentKey} />
      )}
    </>
  );
};
