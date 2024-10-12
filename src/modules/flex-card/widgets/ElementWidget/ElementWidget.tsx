import { ElementParentType } from "../../store/types/common/elements/parent";
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
import { RoutingOutletWidget } from "../routing";

type Props = {
  children: ElementType;
  currentKey: string;
  parent: ElementParentType;
};

export const ElementWidget = ({ children, currentKey, parent }: Props) => {
  return (
    <>
      {children.element === "get.configuration" && (
        <GetConfigurationWidget
          children={children}
          currentKey={currentKey}
          parent={parent}
        />
      )}
      {children.element === "layout" && (
        <LayoutWidget
          children={children}
          currentKey={currentKey}
          parent={parent}
        />
      )}
      {children.element === "layout.sider" && (
        <LayoutSiderWidget
          children={children}
          currentKey={currentKey}
          parent={parent}
        />
      )}
      {children.element === "layout.header" && (
        <LayoutHeaderWidget
          children={children}
          currentKey={currentKey}
          parent={parent}
        />
      )}
      {children.element === "layout.content" && (
        <LayoutContentWidget
          children={children}
          currentKey={currentKey}
          parent={parent}
        />
      )}
      {children.element === "layout.footer" && (
        <LayoutFooterWidget
          children={children}
          currentKey={currentKey}
          parent={parent}
        />
      )}
      {children.element === "typography" && (
        <TypographyWidget
          children={children}
          currentKey={currentKey}
          parent={parent}
        />
      )}
      {children.element === "flex" && (
        <FlexWidget
          children={children}
          currentKey={currentKey}
          parent={parent}
        />
      )}
      {children.element === "menu" && (
        <MenuWidget
          children={children}
          currentKey={currentKey}
          parent={parent}
        />
      )}
      {children.element === "routing.outlet" && (
        <RoutingOutletWidget
          children={children}
          currentKey={currentKey}
          parent={parent}
        />
      )}
    </>
  );
};
