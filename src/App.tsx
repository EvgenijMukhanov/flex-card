import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ru from "antd/es/locale/ru_RU";
import { ConfigProvider } from "./shared/config";
import { LoadProcess } from "./processes";
import { FlexPageShell } from "./app/pages";
import { ConfigurationDataIsolateType } from "./modules/flex-card/store/types/common/sources/configurationData";
import { RoutingType } from "./modules/flex-card/store/types/common/routing/routing";
import { FlexPage } from "./modules/flex-card/pages";

const startConfigurationPathname = "pages/main";

type RoutingModelType = {
  configuration?: ConfigurationDataIsolateType;
  routing?: RoutingType;
};

function App() {
  const [routingModel, setRoutingModel] = useState<RoutingModelType[]>([]);

  const updateRoutingModel = (data: RoutingModelType) => {
    setRoutingModel((prev) => {
      return [...prev, data];
    });
  };
  console.log("routingModel", routingModel);

  const getRoutes = (params: RoutingModelType) => {
    let pathname = "";
    params.routing?.routes.forEach((item) => {
      if (item.pathname) {
        if (pathname) {
          pathname = `${pathname}/${item.pathname.join("/")}`;
        } else {
          pathname = `${item.pathname.join("/")}`;
        }
      }
    });
    const source = params.configuration?.source;
    console.log("source", source);

    console.log("pathname", pathname);

    if (source && pathname) {
      console.log("return");

      return (
        <Route
          // key={'pathname'}
          index
          path={pathname}
          element={
            <FlexPage
              source={source}
              ext={
                {
                  // callbacks: {
                  //   navigate,
                  // },
                }
              }
            />
          }
        ></Route>
      );
    }
  };

  return (
    <BrowserRouter>
      <LoadProcess>
        <ConfigProvider
          locale={ru}
          theme={{
            components: {
              Layout: {
                headerBg: "#808080",
                headerColor: "white",
                siderBg: "#DDDDDD",
                triggerHeight: 70,
                triggerBg: "#999999",
                footerBg: "#808080",
                triggerColor: "red",
              },
            },
          }}
        >
          <Routes>
            <Route
              path="/*"
              element={
                <FlexPageShell
                  source={{
                    variant: "http",
                    method: "GET",
                    execute: "await",
                    baseUrl: "",
                    pathname: startConfigurationPathname,
                  }}
                  updateRoutingModel={updateRoutingModel}
                />
              }
            >
              {routingModel.length > 0 && <>{getRoutes(routingModel[0])}</>}
            </Route>
          </Routes>
        </ConfigProvider>
      </LoadProcess>
    </BrowserRouter>
  );
}

export default App;
