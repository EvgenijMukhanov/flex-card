import { useEffect, useState } from "react";
import { ElementChildrens, ElementWidget } from "..";
import { ConfigurationModel } from "../../store/types/configurationModel";
import { ElementType } from "../../store/types/element";
import { loadConfiguration } from "../../store/helpers/configuration/loadConfiguration";

type Props = {
  source: {
    baseUrl: string;
    pathname: string;
  };
};

export const FlexCardWidget = ({ source }: Props) => {
  const [configuration, setConfiguration] = useState<
    {
        model: ConfigurationModel | undefined;
        element: ElementType | undefined;
      }
    | undefined
  >(undefined);

  useEffect(() => {
    const load = async () => {
      const result = await loadConfiguration({
        pathname: source.pathname,
        baseUrl: source.baseUrl,
      });
      setConfiguration(result);
    };
    load();
  }, [source]);

  return (
    <>
      {configuration?.model && (
        <ElementChildrens
          childrens={configuration.model.childrens}
          currentKey={source.pathname}
        />
      )}
      {configuration?.element && (
        <ElementWidget
          children={configuration.element}
          currentKey={source.pathname}
          key={source.pathname}
        />
      )}
    </>
  );
};
