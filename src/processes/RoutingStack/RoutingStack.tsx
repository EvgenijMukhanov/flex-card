import { Route, Routes } from "react-router-dom";
import { FlexPage } from "../../modules/flex-card/pages";
import { RoutingModelType } from "../../modules/flex-card/store/types/common/routing/routingModel";
import { NavigateMethodType } from "../../modules/flex-card/store/types/common/methods/variants/navigateMethod";

type PropsType = {
  routingModel: RoutingModelType[];
  handleNavigate: (data: NavigateMethodType) => void;
};

export const RoutingStack = ({ routingModel, handleNavigate }: PropsType) => {
  const getRoutes = (routingModel: RoutingModelType[], idx: number) => {
    if (routingModel.length > 0) {
      const route = routingModel[0];
      let pathname = "";
      route.routing?.routes.forEach((item) => {
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
          key={idx}
          // index
          path={pathname}
          element={
            <FlexPage
              ext={{
                // routing: { ...route, nesting: route.nesting++ },
                routing: route,
                callbacks: {
                  navigate: (data) => {
                    console.log("callbacks navigate", data);
                    handleNavigate(data);
                  },
                },
                hooks: {
                  onLoadConfiguration: (data) => {
                    console.log("onLoadConfiguration getRoutes", data);
                  },
                },
              }}
            />
          }
        >
          {routingModel &&
            routingModel.length > 1 &&
            getRoutes(
              routingModel.filter((_, idx) => idx > 0),
              idx + 1,
            )}
        </Route>
      );
    }
  };

  return (
    <>
      <Routes>
        {routingModel.length > 0 && <>{getRoutes(routingModel, 0)}</>}
      </Routes>
    </>
  );
};
