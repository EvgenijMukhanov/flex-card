import { FlexCardWidget } from "../../widgets";
import { RequestSourceType } from "../../store/types/common/sources/requestSource";
import { NavigateMethodType } from "../../store/types/common/methods/variants/navigateMethod";
import { ExtPageType } from "../../store/types/ext/extPage";
import { useEffect } from "react";

type Props = {
  source: RequestSourceType;
  ext: ExtPageType;
};

export const FlexPage = ({ source, ext }: Props) => {
  const navigate = (data: NavigateMethodType) => {
    if (
      ext &&
      ext.callbacks &&
      ext.callbacks.navigate &&
      typeof ext.callbacks.navigate === "function"
    ) {
      ext.callbacks.navigate(data);
    }
  };

  // useEffect(() => {
  //   console.log("FlexPage mounth", source, ext);
  // }, []);

  return (
    <>
      <FlexCardWidget
        source={source}
        parent={{
          breadcrumbs: [],
          name: source.variant === "http" ? source.pathname : "",
          callbacks: {
            element: "root",
            navigate,
          },
        }}
      />
    </>
  );
};
