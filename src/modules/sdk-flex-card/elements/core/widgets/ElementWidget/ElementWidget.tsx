import { ElementParentType } from "../../../../store/types/common/elements/parent";
import { GetConfigurationWidget } from "../../../system/get-configuration/widgets/GetConfigurationWidget/GetConfigurationWidget";
import { RoutingOutletWidget } from "../../../system/routing-outlet/widgets/RoutingOutletWidget/RoutingOutletWidget";
import { TypographyWidget } from "../../../view/interface/typography/widgets/TypographyWidget/TypographyWidget";
import { FlexWidget } from "../../../view/layout/flex/widgets/FlexWidget/FlexWidget";
import { LayoutContentWidget } from "../../../view/layout/layout-content/widgets/LayoutContentWidget/LayoutContentWidget";
import { LayoutFooterWidget } from "../../../view/layout/layout-footer/widgets/LayoutFooterWidget/LayoutFooterWidget";
import { LayoutHeaderWidget } from "../../../view/layout/layout-header/widgets/LayoutHeaderWidget/LayoutHeaderWidget";
import { LayoutSiderWidget } from "../../../view/layout/layout-sider/widgets/LayoutSiderWidget/LayoutSiderWidget";
import { LayoutWidget } from "../../../view/layout/layout/widgets/LayoutWidget/LayoutWidget";
import { MenuWidget } from "../../../view/navigation/menu/widgets/MenuWidget/MenuWidget";
import { ElementType } from "../../types/element";

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
