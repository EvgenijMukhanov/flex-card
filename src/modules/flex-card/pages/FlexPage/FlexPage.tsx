import { useEffect, useState } from "react";
import { FlexCardWidget } from "../../widgets";
import { ConfigurationModel } from "../../store/types/configurationModel";
import { loadMainConfiguration } from "../../store/helpers/configuration/loadMainConfiguration";

type Props = {
  configurationBaseUrl: string;
  configurationPathName: string;
};

export const FlexPage = ({
  configurationBaseUrl,
  configurationPathName,
}: Props) => {
  const [configuration, setConfiguration] = useState<
    ConfigurationModel | undefined
  >(undefined);

  useEffect(() => {
    const load = async () => {
      const result = await loadMainConfiguration({
        pathname: configurationPathName,
        baseUrl: configurationBaseUrl,
      });
      setConfiguration(result);
    };
    load();
  }, [configurationPathName, configurationBaseUrl]);

  return (
    <>
      {configuration && (
        <FlexCardWidget
          configuration={configuration}
          configurationPathName={configurationPathName}
        />
      )}
    </>
  );
};
