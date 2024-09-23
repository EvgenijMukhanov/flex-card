import { useEffect, useState } from "react";
import { ElementChildrens, ElementWidget } from "..";
import { ConfigurationModel } from "../../store/types/configurationModel";
import { ElementType } from "../../store/types/element";
import { loadConfiguration } from "../../store/helpers/configuration/loadConfiguration";
import { RequestSourceType } from "../../store/types/common/sources/requestSource";
import { ElementParentType } from "../../store/types/common/elements/parent";
import { joinConfigurationCallback } from "../../store/helpers/elements/callbacks/joinConfigurationCallback";

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

  const joinConfiguration = (data: {
    configuration: {
      model: ConfigurationModel | undefined;
      element: ElementType | undefined;
    };
    breadcrumbs: number[];
  }) => {
    if (configuration && data.configuration && data.breadcrumbs) {
      const config = joinConfigurationCallback({
        rootConfiguration: configuration,
        configuration: data.configuration,
        breadcrumbs: data.breadcrumbs,
      });
      if (config) {
        setConfiguration(config);
      }
    }
  };

  const _parent: ElementParentType = {
    ...parent,
    callbacks: { element: "root", joinConfiguration },
  };

  return (
    <>
      {configuration?.model && source.variant === "http" && (
        <ElementChildrens
          childrens={configuration.model.childrens}
          currentKey={source.pathname}
          parent={_parent}
        />
      )}
      {configuration?.element && source.variant === "http" && (
        <ElementWidget
          children={configuration.element}
          currentKey={source.pathname}
          key={source.pathname}
          parent={_parent}
        />
      )}
    </>
  );
};
