import {
  Outlet as OutletRouter,
  OutletProps as OutletPropsRouter,
} from "react-router-dom";
import { JSX } from "react/jsx-runtime";

type PropTypes = JSX.IntrinsicAttributes & OutletPropsRouter;

type OutletProps = OutletPropsRouter;

export const Outlet = (props: PropTypes) => {
  return <OutletRouter {...props} />;
};

export type { OutletProps };
