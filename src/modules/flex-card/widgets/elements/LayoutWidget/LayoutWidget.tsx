import { ElementChildrens } from "../..";
import { Layout } from "../../../../../shared/grids";
import { LayoutType } from "../../../store/types/elements/layout";

type Props = {
  children: LayoutType;
  currentKey: string;
};

export const LayoutWidget = ({ children, currentKey }: Props) => {
  const styles = children.styles || {};
  return (
    <Layout style={styles}>
      {!!children.childrens && (
        <ElementChildrens
          childrens={children.childrens}
          currentKey={currentKey}
        />
      )}
    </Layout>
  );
};
