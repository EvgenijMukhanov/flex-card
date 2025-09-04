import { Outlet } from "../../../../../../../shared/routing";
import { ElementParentType } from "../../../../../store/types/common/elements/parent";
import { RoutingOutletType } from "../../types/routing-outlet";

type Props = {
  children: RoutingOutletType;
  currentKey: string;
  parent: ElementParentType;
};

export const RoutingOutletWidget = ({}: Props) => {
  return (
    <>
      <Outlet />
    </>
  );
};
