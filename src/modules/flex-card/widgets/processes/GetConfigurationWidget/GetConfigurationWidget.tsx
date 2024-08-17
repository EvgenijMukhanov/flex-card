import { useEffect } from "react";
import { GetConfigurationType } from "../../../store/types/processes/get-configuration";
import { fetchConfiguration } from "../../../store/api/fetchConfiguration";

type Props = {
  children: GetConfigurationType;
  currentKey: string;
};

export const GetConfigurationWidget = ({ children, currentKey }: Props) => {
  useEffect(() => {
    const request = children.sources?.find((item) => {
      return !!item;
    });
    console.log("request", request);

    if (request) {
      fetchConfiguration({
        baseUrl: request.source.baseUrl,
        pathname: request.source.path,
      }).then((response) => {
        console.log("response", response);
      });
    }
  }, []);

  useEffect(() => {
    console.log("GetConfigurationWidget", children);
  }, []);

  return <>GetConfigurationWidget</>;
};
