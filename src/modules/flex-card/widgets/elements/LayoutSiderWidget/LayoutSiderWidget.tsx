import { ElementChildrens } from "../..";
import { Layout } from "../../../../../shared/grids";
import { ElementParentType } from "../../../store/types/common/elements/parent";
import { LayoutSiderType } from "../../../store/types/elements/layout-sider";

type Props = {
  children: LayoutSiderType;
  currentKey: string;
  parent: ElementParentType;
};

export const LayoutSiderWidget = ({ children, currentKey, parent }: Props) => {
  const styles = children.styles || {};
  const props = children.props || {};
  return (
    <Layout.Sider style={styles} {...props}>
      {!!children.childrens && (
        <ElementChildrens
          childrens={children.childrens}
          currentKey={currentKey}
          parent={parent}
        />
      )}
    </Layout.Sider>
  );
};
