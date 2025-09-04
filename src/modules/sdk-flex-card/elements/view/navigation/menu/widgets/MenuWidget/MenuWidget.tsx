import { Menu } from "../../../../../../../../shared/navigation";
import { getMenuItemHandler } from "../../../../../../store/helpers/elements/elements/menu/getMenuItemHandler";
import { ElementParentType } from "../../../../../../store/types/common/elements/parent";
import { mapMenuPropsTypeToVM } from "../../mappers/mapMenuPropsTypeToVM";
import { MenuType } from "../../types/menu";

type Props = {
  children: MenuType;
  currentKey: string;
  parent: ElementParentType;
};

export const MenuWidget = ({ children, currentKey, parent }: Props) => {
  const styles = children.styles || {};
  const props = mapMenuPropsTypeToVM(children.props) || {};
  const handleSelect = (event: any) => {
    const handlerModel = getMenuItemHandler(
      children.props?.items,
      event.keyPath,
    );
    if (
      handlerModel?.onSelect &&
      Array.isArray(handlerModel.onSelect) &&
      handlerModel.onSelect.length > 0
    ) {
      handlerModel.onSelect.forEach((handler) => {
        if (handler.variant === "navigate") {
          if (typeof parent?.callbacks?.root?.navigate === "function") {
            parent.callbacks.root.navigate(handler);
          }
        }
      });
    }
  };

  return <Menu {...props} style={styles} onSelect={handleSelect} />;
};
