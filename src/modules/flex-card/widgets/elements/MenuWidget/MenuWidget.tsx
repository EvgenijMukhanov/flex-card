import { Menu } from "../../../../../shared/navigation";
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
  // const methods = children?.methods?.handlers
  //   ? createHandlers(children.methods)
  //   : {};

  // console.log("MenuWidget");
  // console.log('parent', parent);
  // console.log("children", children);
  const handleSelect = (event: any) => {
    console.log("handleSelect", event);
  };

  return (
    <Menu
      {...props}
      style={styles}
      // {...methods}
      onSelect={handleSelect}
    />
  );
};
