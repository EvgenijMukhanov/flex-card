import { ElementChildrens } from "../..";
import { Layout } from "../../../../../shared/grids";
import { LayoutHeaderType } from "../../../store/types/elements/layout-header";

type Props = {
  children: LayoutHeaderType;
  currentKey: string;
};

export const LayoutHeaderWidget = ({ children, currentKey }: Props) => {
  const styles = children.styles || {};
  return (
    <Layout.Header style={styles}>
      {!!children.childrens && (
        <ElementChildrens
          childrens={children.childrens}
          currentKey={currentKey}
        />
      )}
    </Layout.Header>
  );
};
