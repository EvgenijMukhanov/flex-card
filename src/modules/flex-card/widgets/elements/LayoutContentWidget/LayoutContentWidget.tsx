import { ElementChildrens } from "../..";
import { Layout } from "../../../../../shared/grids";
import { LayoutContentType } from "../../../store/types/elements/layout-content";

type Props = {
  children: LayoutContentType;
  currentKey: string;
};

export const LayoutContentWidget = ({ children, currentKey }: Props) => {
  const styles = children.styles || {};
  return (
    <Layout.Content style={styles}>
      {!!children.childrens && (
        <ElementChildrens
          childrens={children.childrens}
          currentKey={currentKey}
        />
      )}
    </Layout.Content>
  );
};
