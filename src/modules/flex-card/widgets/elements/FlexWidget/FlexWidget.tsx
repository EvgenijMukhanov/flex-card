import { ElementChildrens } from "../..";
import { Flex } from "../../../../../shared/grids";
import { FlexType } from "../../../store/types/elements/flex";

type Props = {
  children: FlexType;
  currentKey: string;
};

export const FlexWidget = ({ children, currentKey }: Props) => {
  const styles = children.styles || {};
  const props = children.props || {};
  return (
    <Flex style={styles} {...props}>
      {!!children.childrens && (
        <ElementChildrens
          childrens={children.childrens}
          currentKey={currentKey}
        />
      )}
    </Flex>
  );
};
