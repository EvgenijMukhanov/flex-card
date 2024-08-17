import { Menu } from "../../../../../shared/navigation";
import { MenuType } from "../../../store/types/elements/menu";

type Props = {
  children: MenuType;
  currentKey: string;
};

const onSelect = (e: any) => {
  console.log("onSelect", e);
};

export const MenuWidget = ({ children, currentKey }: Props) => {
  const styles = children.styles || {};
  const props = children.props || {};
  return <Menu {...props} style={styles} onSelect={onSelect} />;
};
