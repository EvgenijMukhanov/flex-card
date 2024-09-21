import { useEffect, useState } from "react";
import { ElementChildrens, ElementWidget } from "..";
import { ConfigurationModel } from "../../store/types/configurationModel";
import { ElementType } from "../../store/types/element";
import { loadConfiguration } from "../../store/helpers/configuration/loadConfiguration";
import { RequestSourceType } from "../../store/types/common/sources/requestSource";
import { ElementParentType } from "../../store/types/common/elements/parent";

type Props = {
  source: RequestSourceType;
  parent: ElementParentType;
};

export const FlexCardWidget = ({ source, parent }: Props) => {
  const [configuration, setConfiguration] = useState<
    | {
        model: ConfigurationModel | undefined;
        element: ElementType | undefined;
      }
    | undefined
  >(undefined);

  useEffect(() => {
    const load = async () => {
      const result = await loadConfiguration(source);
      setConfiguration(result);
    };
    load();
  }, [source]);
  // console.log("configuration", configuration?.model);

  return (
    <>
      {configuration?.model && source.variant === "http" && (
        <ElementChildrens
          childrens={configuration.model.childrens}
          currentKey={source.pathname}
          parent={parent}
        />
      )}
      {configuration?.element && source.variant === "http" && (
        <ElementWidget
          children={configuration.element}
          currentKey={source.pathname}
          key={source.pathname}
          parent={parent}
        />
      )}
    </>
  );
};
