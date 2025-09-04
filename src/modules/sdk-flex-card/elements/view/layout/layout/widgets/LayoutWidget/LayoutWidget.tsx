import { Layout } from "../../../../../../../../shared/grids";
import { ElementParentType } from "../../../../../../store/types/common/elements/parent";
import { ElementChildrens } from "../../../../../../widgets";
import { LayoutType } from "../../types/layout";

type Props = {
  children: LayoutType;
  currentKey: string;
  parent: ElementParentType;
};

export const LayoutWidget = ({ children, currentKey, parent }: Props) => {
  const styles = children.styles || {};
  return (
    <Layout style={styles}>
      {!!children.childrens && (
        <ElementChildrens
          childrens={children.childrens}
          currentKey={currentKey}
          parent={parent}
        />
      )}
    </Layout>
  );
};
