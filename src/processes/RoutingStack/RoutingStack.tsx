import { Route, Routes } from "react-router-dom";
import { FlexPage } from "../../modules/flex-card/pages";
import { RoutingModelType } from "../../modules/flex-card/store/types/common/routing/routingModel";
import { NavigateMethodType } from "../../modules/flex-card/store/types/common/methods/variants/navigateMethod";
import { OnLoadConfigurationType } from "../../modules/flex-card/store/types/callbacks/callbacks";

type PropsType = {
  routingModel: RoutingModelType[];
  navigate: (data: NavigateMethodType) => void;
  onLoadConfiguration: (data: OnLoadConfigurationType) => void;
};

export const RoutingStack = ({
  routingModel,
  navigate,
  onLoadConfiguration,
}: PropsType) => {
  const getRoutes = (routingModel: RoutingModelType[], nesting: number) => {
    if (routingModel.length > 0) {
      const routing = routingModel[0];
      let pathname = "";
      routing.routing?.routes.forEach((item) => {
        if (item.pathname) {
          if (pathname) {
            pathname = `${pathname}/${item.pathname.join("/")}`;
          } else {
            pathname = `${item.pathname.join("/")}`;
          }
        }
      });
      return (
        <Route
          key={nesting}
          // index
          path={pathname}
          element={
            <FlexPage
              ext={{
                routing,
                callbacks: {
                  root: {
                    navigate,
                    onLoadConfiguration,
                  },
                },
              }}
            />
          }
        >
          {routingModel.length > 1 &&
            getRoutes(
              routingModel.filter((_, idx) => idx > 0),
              nesting + 1,
            )}
        </Route>
      );
    }
  };

  return <Routes>{getRoutes(routingModel, 0)}</Routes>;
};
