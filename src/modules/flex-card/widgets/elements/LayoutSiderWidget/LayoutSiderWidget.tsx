import { ElementChildrens } from "../..";
import { Layout } from "../../../../../shared/grids";
import { LayoutSiderType } from "../../../store/types/elements/layout-sider";

type Props = {
  children: LayoutSiderType;
  currentKey: string;
};

export const LayoutSiderWidget = ({ children, currentKey }: Props) => {
  const styles = children.styles || {};
  const props = children.props || {};
  return (
    <Layout.Sider style={styles} {...props}>
      {!!children.childrens && (
        <ElementChildrens
          childrens={children.childrens}
          currentKey={currentKey}
        />
      )}
    </Layout.Sider>
  );
};
