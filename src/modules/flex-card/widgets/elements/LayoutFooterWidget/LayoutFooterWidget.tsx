import { ElementChildrens } from "../..";
import { Layout } from "../../../../../shared/grids";
import { ElementParentType } from "../../../store/types/common/elements/parent";
import { LayoutFooterType } from "../../../store/types/elements/layout-footer";

type Props = {
  children: LayoutFooterType;
  currentKey: string;
  parent: ElementParentType;
};

export const LayoutFooterWidget = ({ children, currentKey, parent }: Props) => {
  const styles = children.styles || {};
  return (
    <Layout.Footer style={styles}>
      {!!children.childrens && (
        <ElementChildrens
          childrens={children.childrens}
          currentKey={currentKey}
          parent={parent}
        />
      )}
    </Layout.Footer>
  );
};
