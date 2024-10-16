import { FlexCardWidget } from "../../widgets";
import { NavigateMethodType } from "../../store/types/common/methods/variants/navigateMethod";
import { ExtPageType } from "../../store/types/ext/extPage";

type Props = {
  ext: ExtPageType;
};

export const FlexPage = ({ ext }: Props) => {
  const navigate = (data: NavigateMethodType) => {
    if (typeof ext?.callbacks?.navigate === "function") {
      ext.callbacks.navigate(data);
    }
  };
  return (
    <FlexCardWidget
      source={ext.routing.configuration.source}
      parent={{
        breadcrumbs: [],
        name:
          ext.routing.configuration.source.variant === "http"
            ? ext.routing.configuration.source.pathname
            : "",
        callbacks: {
          element: "root",
          navigate,
          onLoadConfiguration: ext.callbacks?.onLoadConfiguration,
        },
        nesting: ext.routing.nesting,
      }}
    />
  );
};
