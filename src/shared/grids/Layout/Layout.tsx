import {
  Layout as LayoutAnt,
  LayoutProps as LayoutPropsAnt,
  SiderProps as SiderPropsAnt,
} from "antd";
import { RefAttributes } from "react";
import { JSX } from "react/jsx-runtime";

type PropTypes = JSX.IntrinsicAttributes &
  LayoutPropsAnt &
  RefAttributes<HTMLElement>;
type LayoutProps = LayoutPropsAnt;
type SiderProps = SiderPropsAnt;

export const Layout = (props: PropTypes) => {
  return <LayoutAnt {...props} />;
};

const Header = (
  props: JSX.IntrinsicAttributes & LayoutPropsAnt & RefAttributes<HTMLElement>,
) => {
  return <LayoutAnt.Header {...props} />;
};

const Content = (
  props: JSX.IntrinsicAttributes & LayoutPropsAnt & RefAttributes<HTMLElement>,
) => {
  return <LayoutAnt.Content {...props} />;
};

const Footer = (
  props: JSX.IntrinsicAttributes & LayoutPropsAnt & RefAttributes<HTMLElement>,
) => {
  return <LayoutAnt.Footer {...props} />;
};

const Sider = (
  props: JSX.IntrinsicAttributes &
    SiderPropsAnt &
    RefAttributes<HTMLDivElement>,
) => {
  return <LayoutAnt.Sider {...props} />;
};

Layout.Header = Header;
Layout.Content = Content;
Layout.Footer = Footer;
Layout.Sider = Sider;

export type { LayoutProps, SiderProps };
