import { useEffect, useState } from "react";
import { ElementChildrens, ElementWidget } from "..";
import { ConfigurationModel } from "../../store/types/configurationModel";
import { loadConfiguration } from "../../store/helpers/configuration/loadConfiguration";
import { RequestSourceType } from "../../store/types/common/sources/requestSource";
import { ElementParentType } from "../../store/types/common/elements/parent";
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
          typeof parent?.callbacks?.root?.onLoadConfiguration === "function" &&
          result
        ) {
          parent.callbacks.root.onLoadConfiguration({
            nesting: parent.nesting,
            configuration: result,
            source,
          });
        }
      };
      load();
    }
  }, [source, currentSource, parent]);

  const _parent: ElementParentType = {
    ...parent,
    callbacks: {
      ...parent.callbacks,
    },
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
