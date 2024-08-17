import { ElementChildrens } from "../..";
import { Layout } from "../../../../../shared/grids";
import { LayoutFooterType } from "../../../store/types/elements/layout-footer";

type Props = {
  children: LayoutFooterType;
  currentKey: string;
};

export const LayoutFooterWidget = ({ children, currentKey }: Props) => {
  const styles = children.styles || {};
  return (
    <Layout.Footer style={styles}>
      {!!children.childrens && (
        <ElementChildrens
          childrens={children.childrens}
          currentKey={currentKey}
        />
      )}
    </Layout.Footer>
  );
};
