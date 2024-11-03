import { ConfigurationModel } from "../../types/configurationModel";
import { ElementType } from "../../types/element";
import { ElementsType } from "../../types/elements";

export const joinConfiguration = ({
  rootConfiguration,
  configuration,
  breadcrumbs,
}: {
  rootConfiguration: ConfigurationModel;
  configuration: ConfigurationModel;
  breadcrumbs: number[];
}): ConfigurationModel => {
  if (breadcrumbs.length > 0) {
    if (rootConfiguration.elements) {
      if (
        Array.isArray(rootConfiguration.elements.childrens) &&
        rootConfiguration.elements.childrens.length > 0
      ) {
        const result = updateModel({
          breadcrumbs,
          rootElements: rootConfiguration.elements,
          configuration,
        });
        return {
          element: undefined,
          elements: result,
        };
      }
    }
  }
  return {
    element: undefined,
    elements: undefined,
  };
};

const updateModel = ({
  breadcrumbs,
  rootElements,
  configuration,
}: {
  breadcrumbs: number[];
  rootElements: ElementsType;
  configuration: ConfigurationModel;
}): ElementsType | undefined => {
  if (breadcrumbs.length > 0) {
    const idx: number = breadcrumbs[0];
    if (
      Array.isArray(rootElements.childrens) &&
      rootElements.childrens.length >= idx
    ) {
      const element = rootElements.childrens[idx];
      const _breadcrumbs = breadcrumbs.filter((item: number, idx: number) => {
        return idx > 0;
      });
      const _model = updateElement({
        element,
        breadcrumbs: _breadcrumbs,
        configuration,
      });
      if (_model) {
        return {
          childrens: [_model],
        };
      }
    }
  }
  return {
    childrens: [],
  };
};

const updateElement = ({
  breadcrumbs,
  element,
  configuration,
}: {
  breadcrumbs: number[];
  element: ElementType;
  configuration: ConfigurationModel;
}): ElementType | undefined => {
  if (breadcrumbs.length > 0) {
    const idx: number = breadcrumbs[0];
    if (
      element &&
      (element.elementType === "grid" || element.elementType === "text")
    ) {
      if (
        element.childrens &&
        element.childrens.length >= idx &&
        element.childrens[idx]
      ) {
        const _childrens = element.childrens.map(
          (item: ElementType, _idx: number) => {
            if (_idx === idx) {
              const _breadcrumbs = breadcrumbs.filter(
                (_: number, idx: number) => {
                  return idx > 0;
                },
              );
              const _element = updateElement({
                breadcrumbs: _breadcrumbs,
                element: item,
                configuration,
              });
              return _element;
            }
            return item;
          },
        );
        const childrens: ElementType[] = [];
        _childrens.forEach((item) => {
          if (item) {
            childrens.push(item);
          }
        });
        if (_childrens) {
          const _element: ElementType = { ...element, childrens };
          return _element;
        }
      }
    } else {
      return undefined;
    }
  } else {
    if (configuration.element) {
      return configuration.element;
    }
  }
  return undefined;
};
