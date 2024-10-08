import { ElementChildrens } from "../..";
import { Flex } from "../../../../../shared/grids";
import { ElementParentType } from "../../../store/types/common/elements/parent";
import { FlexType } from "../../../store/types/elements/flex";

type Props = {
  children: FlexType;
  currentKey: string;
  parent: ElementParentType;
};

export const FlexWidget = ({ children, currentKey, parent }: Props) => {
  const styles = children.styles || {};
  const props = children.props || {};
  return (
    <Flex style={styles} {...props}>
      {!!children.childrens && (
        <ElementChildrens
          childrens={children.childrens}
          currentKey={currentKey}
          parent={parent}
        />
      )}
    </Flex>
  );
};
