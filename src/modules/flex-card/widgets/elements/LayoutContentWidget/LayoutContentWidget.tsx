import { ElementChildrens } from "../..";
import { Layout } from "../../../../../shared/grids";
import { Outlet } from "../../../../../shared/routing";
import { ElementParentType } from "../../../store/types/common/elements/parent";
import { LayoutContentType } from "../../../store/types/elements/layout-content";

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
