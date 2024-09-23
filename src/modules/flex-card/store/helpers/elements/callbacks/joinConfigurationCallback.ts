import { ConfigurationModel } from "../../../types/configurationModel";
import { ElementType } from "../../../types/element";

export const joinConfigurationCallback = ({
  rootConfiguration,
  configuration,
  breadcrumbs,
}: {
  rootConfiguration: {
    model: ConfigurationModel | undefined;
    element: ElementType | undefined;
  };
  configuration: {
    model: ConfigurationModel | undefined;
    element: ElementType | undefined;
  };
  breadcrumbs: number[];
}): {
  model: ConfigurationModel | undefined;
  element: ElementType | undefined;
} => {
  if (breadcrumbs.length > 0) {
    if (rootConfiguration.model) {
      if (
        Array.isArray(rootConfiguration.model.childrens) &&
        rootConfiguration.model.childrens.length > 0
      ) {
        const result = updateModel({
          breadcrumbs,
          model: rootConfiguration.model,
          configuration,
        });
        return {
          element: undefined,
          model: result,
        };
      }
    }
  }
  return {
    element: undefined,
    model: undefined,
  };
};

const updateModel = ({
  breadcrumbs,
  model,
  configuration,
}: {
  breadcrumbs: number[];
  model: ConfigurationModel;
  configuration: {
    model: ConfigurationModel | undefined;
    element: ElementType | undefined;
  };
}): ConfigurationModel | undefined => {
  if (breadcrumbs.length > 0) {
    const idx: number = breadcrumbs[0];
    if (Array.isArray(model.childrens) && model.childrens.length >= idx) {
      const element = model.childrens[idx];
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
  configuration: {
    model: ConfigurationModel | undefined;
    element: ElementType | undefined;
  };
}): ElementType | undefined => {
  if (breadcrumbs.length > 0) {
    const idx: number = breadcrumbs[0];
    if (
      element &&
      (element.element === "layout" ||
        element.element === "flex" ||
        element.element === "layout.content" ||
        element.element === "layout.footer" ||
        element.element === "layout.header" ||
        element.element === "layout.sider" ||
        element.element === "typography")
    ) {
      if (
        element.childrens &&
        element.childrens.length >= idx &&
        element.childrens[idx]
      ) {
        const _childrens = element.childrens
          .map((item: ElementType, _idx: number) => {
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
          })
          const childrens: ElementType[] = []
          _childrens.forEach(item => {
            if (item) {
              childrens.push(item)
            }
          })
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
