import { useEffect, useState } from "react";
import { ElementChildrens, ElementWidget } from "..";
import { ConfigurationModel } from "../../store/types/configurationModel";
import { ElementType } from "../../store/types/element";
import { loadConfiguration } from "../../store/helpers/configuration/loadConfiguration";
import { RequestSourceType } from "../../store/types/common/sources/requestSource";
import { ElementParentType } from "../../store/types/common/elements/parent";
import { joinConfigurationCallback } from "../../store/helpers/elements/callbacks/joinConfigurationCallback";
import { NavigateMethodType } from "../../store/types/common/methods/variants/navigateMethod";
import { checkEqualSources } from "../../store/helpers/common/sources/checkEqualSources";

type Props = {
  source: RequestSourceType;
  parent: ElementParentType;
};

export const FlexCardWidget = ({ source, parent }: Props) => {
  const [configuration, setConfiguration] = useState<
    ConfigurationModel | undefined
  >(undefined);

  const [currentSource, setCurrentSource] = useState<
    RequestSourceType | undefined
  >(undefined);

  useEffect(() => {
    let change = true;
    if (currentSource) {
      if (checkEqualSources(currentSource, source)) {
        change = false;
      }
    }
    if (change) {
      const load = async () => {
        const result = await loadConfiguration(source);
        setConfiguration(result);
        setCurrentSource(source);
        if (
          parent &&
          parent.callbacks &&
          typeof parent.callbacks.onLoadConfiguration === "function"
        ) {
          parent.callbacks.onLoadConfiguration(result);
        }
      };
      load();
    }
  }, [source]);

  const joinConfiguration = (data: {
    configuration: ConfigurationModel;
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

  const navigate = (data: NavigateMethodType) => {
    if (typeof parent?.callbacks?.navigate === "function") {
      parent.callbacks.navigate(data);
    }
  };

  const _parent: ElementParentType = {
    ...parent,
    callbacks: { element: "root", joinConfiguration, navigate },
  };

  return (
    <>
      {configuration?.elements && source.variant === "http" && (
        <ElementChildrens
          childrens={configuration.elements.childrens}
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
