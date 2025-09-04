import { FlexCardWidget } from "../../widgets";
import { ExtPageType } from "../../store/types/ext/extPage";

type Props = {
  ext: ExtPageType;
};

export const FlexPage = ({ ext }: Props) => {
  return (
    <FlexCardWidget
      source={ext.routing.configuration.source}
      parent={{
        breadcrumbs: [],
        name:
          ext.routing.configuration.source.variant === "http"
            ? ext.routing.configuration.source.pathname
            : "",
        callbacks: ext.callbacks,
        nesting: ext.routing.nesting,
      }}
    />
  );
};
