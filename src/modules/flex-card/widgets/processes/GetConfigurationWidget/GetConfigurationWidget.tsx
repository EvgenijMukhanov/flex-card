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
  // console.log("GetConfigurationWidget", children);

  const request = children.data;
  // console.log("request", request);
  // console.log("parent", parent);
  // console.log("currentKey", currentKey);

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
