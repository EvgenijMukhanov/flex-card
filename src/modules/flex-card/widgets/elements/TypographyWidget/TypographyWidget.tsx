import { Typography } from "../../../../../shared/ui";
import { TypographyType } from "../../../store/types/elements/typography";

type Props = {
  children: TypographyType;
  currentKey: string;
};

export const TypographyWidget = ({ children, currentKey }: Props) => {
  const styles = children.styles || {};
  const props = children.props || {};
  return <Typography {...props} style={styles} />;
};
