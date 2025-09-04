import { Typography } from "../../../../../../../../shared/ui";
import { ElementParentType } from "../../../../../../store/types/common/elements/parent";
import { TypographyType } from "../../types/typography";

type Props = {
  children: TypographyType;
  currentKey: string;
  parent: ElementParentType;
};

export const TypographyWidget = ({ children, currentKey, parent }: Props) => {
  const styles = children.styles || {};
  const props = children.props || {};
  return <Typography {...props} style={styles} />;
};
