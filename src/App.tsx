import ru from "antd/es/locale/ru_RU";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ConfigProvider } from "./shared/config";
import { FlexPage } from "./modules/flex-card/pages";
import { ParamsType } from "./modules/flex-card/store/types/ext/params";

const startConfigurationPathname = "pages/main";

function App() {
  const [params, setParams] = useState<ParamsType[]>([
    {
      source: {
        variant: "http",
        method: "GET",
        baseUrl: "",
        pathname: startConfigurationPathname,
      },
      path: [
        {
          attribute: "",
          value: "/",
        },
      ],
    },
  ]);

  const getRoute = (params: ParamsType[]) => {
    return params.map((item: ParamsType, idx: number) => {
      return (
        <Route
          key={idx}
          path={item.path[0].attribute}
          element={<FlexPage source={item.source} />}
        ></Route>
      );
    });
  };

  return (
    <BrowserRouter>
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
        <Routes>{getRoute(params)}</Routes>
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
