import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ru from "antd/es/locale/ru_RU";
import { ConfigProvider } from "./shared/config";
import { LoadProcess } from "./processes";
import { FlexPageShell } from "./app/pages";
import { FlexPage } from "./modules/flex-card/pages";
import { RoutingModelType } from "./modules/flex-card/store/types/common/routing/routingModel";

const startConfigurationPathname = "pages/main";

function App() {
  const [routingModel, setRoutingModel] = useState<RoutingModelType[]>([]);

  const updateRoutingModel = (data: RoutingModelType) => {
    setRoutingModel((prev) => {
      const result: RoutingModelType[] = [];
      prev.forEach((item) => {
        if (item.nesting < data.nesting) {
          result.push(item);
        }
      });
      result.push(data);
      return result;
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
              ext={{
                routing: params,
                callbacks: {
                  navigate: (data) => {
                    console.log("callbacks navigate", data);
                  },
                },
              }}
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
                  ext={{
                    routing: {
                      nesting: 0,
                      configuration: {
                        type: "configuration",
                        relation: "isolate",
                        source: {
                          variant: "http",
                          method: "GET",
                          execute: "await",
                          baseUrl: "",
                          pathname: startConfigurationPathname,
                        },
                      },
                      routing: {
                        routes: [
                          {
                            type: "pathname",
                            pathname: [""],
                          },
                        ],
                      },
                    },
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
