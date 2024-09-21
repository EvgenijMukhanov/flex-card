import { Menu } from "../../../../../shared/navigation";
import { createMethods } from "../../../store/helpers/common/methods/createMethods";
import { MenuType } from "../../../store/types/elements/menu";

type Props = {
  children: MenuType;
  currentKey: string;
};

export const MenuWidget = ({ children, currentKey }: Props) => {
  const styles = children.styles || {};
  const props = children.props || {};
  const methods = children.methods ? createMethods(children.methods) : {};

  return (
    <Menu
      {...props}
      style={styles}
      {...methods}
      defaultSelectedKeys={["2-2"]}
    />
  );
};
