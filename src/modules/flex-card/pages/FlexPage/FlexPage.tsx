import { FlexCardWidget } from "../../widgets";
import { ParamsType } from "../../store/types/ext/params";
import { RequestSourceType } from "../../store/types/common/sources/requestSource";

type Props = {
  source: RequestSourceType;
};

export const FlexPage = ({ source }: Props) => {
  return (
    <>
      <FlexCardWidget source={source} />
    </>
  );
};
