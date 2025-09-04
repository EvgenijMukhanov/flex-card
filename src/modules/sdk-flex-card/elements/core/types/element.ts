import { GetConfigurationType } from "../../system/get-configuration/types/get-configuration";
import { RoutingOutletType } from "../../system/routing-outlet/types/routing-outlet";
import { TypographyType } from "../../view/interface/typography/types/typography";
import { FlexType } from "../../view/layout/flex/types/flex";
import { LayoutContentType } from "../../view/layout/layout-content/types/layout-content";
import { LayoutFooterType } from "../../view/layout/layout-footer/types/layout-footer";
import { LayoutHeaderType } from "../../view/layout/layout-header/types/layout-header";
import { LayoutSiderType } from "../../view/layout/layout-sider/types/layout-sider";
import { LayoutType } from "../../view/layout/layout/types/layout";
import { MenuType } from "../../view/navigation/menu/types/menu";

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
