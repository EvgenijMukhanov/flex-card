import { GetConfigurationType } from "../../../store/types/processes/get-configuration";
import { FlexCardWidget } from "../../FlexCardWidget/FlexCardWidget";

type Props = {
  children: GetConfigurationType;
  currentKey: string;
};

export const GetConfigurationWidget = ({ children, currentKey }: Props) => {
  console.log("GetConfigurationWidget", children);

  const request = children.data;
  console.log("request", request);

  return (
    <>
      {request &&
        request.source.variant === "http" &&
        request.relation === "isolate" && (
          <FlexCardWidget source={request.source} />
        )}
    </>
  );
};
