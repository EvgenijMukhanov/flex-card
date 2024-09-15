import { GetConfigurationType } from "../../../store/types/processes/get-configuration";
import { FlexCardWidget } from "../../FlexCardWidget/FlexCardWidget";

type Props = {
  children: GetConfigurationType;
  currentKey: string;
};

export const GetConfigurationWidget = ({ children, currentKey }: Props) => {
  const request = children.sources?.find((item) => {
    return !!item;
  });
  return (
    <>
      {request && request.source.variant === "http" && (
        <FlexCardWidget source={request.source} />
      )}
    </>
  );
};
