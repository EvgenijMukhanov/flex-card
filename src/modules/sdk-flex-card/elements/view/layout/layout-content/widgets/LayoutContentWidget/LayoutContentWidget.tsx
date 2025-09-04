import { Layout } from "../../../../../../../../shared/grids";
import { ElementParentType } from "../../../../../../store/types/common/elements/parent";
import { ElementChildrens } from "../../../../../../widgets";
import { LayoutContentType } from "../../types/layout-content";

type Props = {
  children: LayoutContentType;
  currentKey: string;
  parent: ElementParentType;
};

export const LayoutContentWidget = ({
  children,
  currentKey,
  parent,
}: Props) => {
  const styles = children.styles || {};
  return (
    <Layout.Content style={styles}>
      {!!children.childrens && (
        <ElementChildrens
          childrens={children.childrens}
          currentKey={currentKey}
          parent={parent}
        />
      )}
    </Layout.Content>
  );
};
