import {
  ConfigProvider as ConfigProviderAnt,
  ConfigProviderProps as ConfigProviderPropsAnt,
  theme as themeAnt,
} from "antd";
import { JSX } from "react/jsx-runtime";

type PropTypes = JSX.IntrinsicAttributes & ConfigProviderPropsAnt;
type ConfigProviderProps = ConfigProviderPropsAnt;

export const theme = themeAnt;

export const ConfigProvider = (props: PropTypes) => {
  return <ConfigProviderAnt {...props} />;
};

export type { ConfigProviderProps };
