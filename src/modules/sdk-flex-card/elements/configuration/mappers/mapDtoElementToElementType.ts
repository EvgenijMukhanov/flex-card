import { ElementType } from "../../core/types/element";
import { mapDtoToGetConfigurationType } from "../../system/get-configuration/mappers/mapDtoToGetConfigurationType";
import { mapDtoToRoutingOutlet } from "../../system/routing-outlet/mappers/mapDtoToRoutingOutlet";
import { mapDtoToTypographyType } from "../../view/interface/typography/mappers/mapDtoToTypographyType";
import { mapDtoToFlexType } from "../../view/layout/flex/mappers/mapDtoToFlexType";
import { mapDtoToLayoutContentType } from "../../view/layout/layout-content/mappers/mapDtoToLayoutContentType";
import { mapDtoToLayoutFooterType } from "../../view/layout/layout-footer/mappers/mapDtoToLayoutFooterType";
import { mapDtoToLayoutHeaderType } from "../../view/layout/layout-header/mappers/mapDtoToLayoutHeaderType";
import { mapDtoToLayoutSiderType } from "../../view/layout/layout-sider/mappers/mapDtoToLayoutSiderType";
import { mapDtoToLayoutType } from "../../view/layout/layout/mappers/mapDtoToLayoutType";
import { mapDtoToMenuType } from "../../view/navigation/menu/mappers/mapDtoToMenuType";

export const mapDtoElementToElementType = (
  children: any,
): ElementType | undefined => {
  if (children && typeof children.element === "string") {
    switch (children.element) {
      case "layout":
        return mapDtoToLayoutType(children);
      case "layout.sider":
        return mapDtoToLayoutSiderType(children);
      case "layout.header":
        return mapDtoToLayoutHeaderType(children);
      case "layout.footer":
        return mapDtoToLayoutFooterType(children);
      case "layout.content":
        return mapDtoToLayoutContentType(children);
      case "typography":
        return mapDtoToTypographyType(children);
      case "flex":
        return mapDtoToFlexType(children);
      case "menu":
        return mapDtoToMenuType(children);
      case "get.configuration":
        return mapDtoToGetConfigurationType(children);
      case "routing.outlet":
        return mapDtoToRoutingOutlet(children);
      default:
        return undefined;
    }
  }
  return undefined;
};
