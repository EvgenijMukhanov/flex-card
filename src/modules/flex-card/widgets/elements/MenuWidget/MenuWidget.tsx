import { Menu } from "../../../../../shared/navigation";
import { createHandlers } from "../../../store/helpers/common/methods/handlers/createHandlers";
import { ElementParentType } from "../../../store/types/common/elements/parent";
import { MenuType } from "../../../store/types/elements/menu";

type Props = {
  children: MenuType;
  currentKey: string;
  parent: ElementParentType;
};

export const MenuWidget = ({ children, currentKey, parent }: Props) => {
  const styles = children.styles || {};
  const props = children.props || {};
  const methods = children?.methods?.handlers
    ? createHandlers(children.methods)
    : {};

  return (
    <Menu
      {...props}
      style={styles}
      {...methods}
      defaultSelectedKeys={["2-2"]}
    />
  );
};
