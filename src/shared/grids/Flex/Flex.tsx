import { Flex as FlexAnt, FlexProps as FlexPropsAnt } from "antd";
import { AnyObject } from "antd/es/_util/type";
import { RefAttributes } from "react";
import { JSX } from "react/jsx-runtime";

type PropTypes = JSX.IntrinsicAttributes &
  FlexPropsAnt<AnyObject> &
  RefAttributes<HTMLElement>;
type FlexProps = FlexPropsAnt;

export const Flex = (props: PropTypes) => {
  return <FlexAnt {...props} />;
};

export type { FlexProps };
