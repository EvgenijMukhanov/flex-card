import { Layout } from "../../../../../../../../shared/grids";
import { ElementParentType } from "../../../../../../store/types/common/elements/parent";
import { ElementChildrens } from "../../../../../../widgets";
import { LayoutHeaderType } from "../../types/layout-header";

type Props = {
  children: LayoutHeaderType;
  currentKey: string;
  parent: ElementParentType;
};

export const LayoutHeaderWidget = ({ children, currentKey, parent }: Props) => {
  const styles = children.styles || {};
  return (
    <Layout.Header style={styles}>
      {!!children.childrens && (
        <ElementChildrens
          childrens={children.childrens}
          currentKey={currentKey}
          parent={parent}
        />
      )}
    </Layout.Header>
  );
};
