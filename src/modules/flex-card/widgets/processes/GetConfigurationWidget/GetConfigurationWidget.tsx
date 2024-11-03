import { ElementParentType } from "../../../store/types/common/elements/parent";
import { GetConfigurationType } from "../../../store/types/processes/get-configuration";
import { FlexCardWidget } from "../../FlexCardWidget/FlexCardWidget";

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
