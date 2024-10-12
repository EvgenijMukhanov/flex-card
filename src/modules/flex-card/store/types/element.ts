import { FlexType } from "./elements/flex";
import { LayoutType } from "./elements/layout";
import { LayoutContentType } from "./elements/layout-content";
import { LayoutFooterType } from "./elements/layout-footer";
import { LayoutHeaderType } from "./elements/layout-header";
import { LayoutSiderType } from "./elements/layout-sider";
import { MenuType } from "./elements/menu";
import { TypographyType } from "./elements/typography";
import { GetConfigurationType } from "./processes/get-configuration";
import { RoutingOutletType } from "./routing/routing-outlet";

export type ElementType =
  | LayoutType
  | LayoutContentType
  | LayoutFooterType
  | LayoutHeaderType
  | LayoutSiderType
  | TypographyType
  | FlexType
  | MenuType
  | GetConfigurationType
  | RoutingOutletType;
