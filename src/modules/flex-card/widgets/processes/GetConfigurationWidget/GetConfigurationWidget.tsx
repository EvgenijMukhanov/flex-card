import { useEffect } from "react";
import { GetConfigurationType } from "../../../store/types/processes/get-configuration";
import { fetchConfiguration } from "../../../store/api/fetchConfiguration";
import { loadElementConfiguration } from "../../../store/helpers/configuration/loadElementConfiguration";

type Props = {
  children: GetConfigurationType;
  currentKey: string;
};

export const GetConfigurationWidget = ({ children, currentKey }: Props) => {
  useEffect(() => {
    const load = async () => {
      const request = children.sources?.find((item) => {
        return !!item;
      });
      if (request) {
        const response = await loadElementConfiguration({
          baseUrl: request.source.baseUrl,
          pathname: request.source.path,
        });
      }
    };
    load();
  }, []);

  return <>GetConfigurationWidget</>;
};
