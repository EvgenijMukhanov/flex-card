import { ElementType } from "../types/element";
import { mapDtoToFlexType } from "./elements/mapDtoToFlexType";
import { mapDtoToLayoutContentType } from "./elements/mapDtoToLayoutContentType";
import { mapDtoToLayoutFooterType } from "./elements/mapDtoToLayoutFooterType";
import { mapDtoToLayoutHeaderType } from "./elements/mapDtoToLayoutHeaderType";
import { mapDtoToLayoutSiderType } from "./elements/mapDtoToLayoutSiderType";
import { mapDtoToLayoutType } from "./elements/mapDtoToLayoutType";
import { mapDtoToMenuType } from "./elements/mapDtoToMenuType";
import { mapDtoToTypographyType } from "./elements/mapDtoToTypographyType";
import { mapDtoToGetConfigurationType } from "./processes/mapDtoToGetConfigurationType";
import { mapDtoToRoutingOutlet } from "./routing/mapDtoToRoutingOutlet";

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
