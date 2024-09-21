import { FlexCardWidget } from "../../widgets";
import { RequestSourceType } from "../../store/types/common/sources/requestSource";

type Props = {
  source: RequestSourceType;
};

export const FlexPage = ({ source }: Props) => {
  return (
    <>
      <FlexCardWidget
        source={source}
        parent={{
          breadcrumbs: [],
          name: source.variant === "http" ? source.pathname : "",
        }}
      />
    </>
  );
};
