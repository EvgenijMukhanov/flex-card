import { useEffect } from "react";
import { ElementParentType } from "../../../store/types/common/elements/parent";
import { GetConfigurationType } from "../../../store/types/processes/get-configuration";
import { FlexCardWidget } from "../../FlexCardWidget/FlexCardWidget";
import { loadConfiguration } from "../../../store/helpers/configuration/loadConfiguration";

type Props = {
  children: GetConfigurationType;
  currentKey: string;
  parent: ElementParentType;
};

export const GetConfigurationWidget = ({
  children,
  currentKey,
  parent,
}: Props) => {
  useEffect(() => {
    const request = children.data;
    if (
      request &&
      request.source.variant === "http" &&
      request.relation === "join"
    ) {
      const load = async () => {
        const result = await loadConfiguration(request.source);
        if (parent.callbacks?.nesting?.joinConfiguration) {
          parent.callbacks.nesting.joinConfiguration({
            configuration: result,
            breadcrumbs: parent.breadcrumbs,
          });
        }
        // if (
        //   parent.callbacks &&
        //   typeof parent.callbacks.onLoadConfiguration === "function"
        // ) {
        //   parent.callbacks.onLoadConfiguration({
        //     nesting: parent.nesting,
        //     configuration: result,
        //     breadcrumbs: parent.breadcrumbs,
        //     data: request,
        //   });
        // }
      };
      load();
    }
  }, [children]);

  const request = children.data;

  return (
    <>
      {request &&
        request.source.variant === "http" &&
        request.relation === "isolate" && (
          <FlexCardWidget source={request.source} parent={parent} />
        )}
    </>
  );
};
