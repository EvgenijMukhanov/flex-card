import { Menu } from "../../../../../shared/navigation";
import { getMenuItemHandler } from "../../../store/helpers/elements/elements/menu/getMenuItemHandler";
import { mapMenuPropsTypeToVM } from "../../../store/mappers/elements/toVM/mapMenuPropsTypeToVM";
import { ElementParentType } from "../../../store/types/common/elements/parent";
import { MenuType } from "../../../store/types/elements/menu";

type Props = {
  children: MenuType;
  currentKey: string;
  parent: ElementParentType;
};

export const MenuWidget = ({ children, currentKey, parent }: Props) => {
  const styles = children.styles || {};
  const props = mapMenuPropsTypeToVM(children.props) || {};
  console.log("props", props);

  // const methods = children?.methods?.handlers
  //   ? createHandlers(children.methods)
  //   : {};

  console.log("MenuWidget");
  // console.log('parent', parent);
  console.log("children", children);
  const handleSelect = (event: any) => {
    console.log("handleSelect", event);
    const handler = getMenuItemHandler(children.props?.items, event.keyPath);
    console.log("handler", handler);
  };

  return <Menu {...props} style={styles} onSelect={handleSelect} />;
};
