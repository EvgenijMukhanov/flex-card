import { BrowserRouter, Route, Routes } from "react-router-dom";
import ru from "antd/es/locale/ru_RU";
import { ConfigProvider } from "./shared/config";
import { LoadProcess } from "./processes";
import { FlexPageShell } from "./app/pages";

function App() {
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
                <FlexPageShell startConfigurationPathname="pages/main" />
              }
            />
          </Routes>
        </ConfigProvider>
      </LoadProcess>
    </BrowserRouter>
  );
}

export default App;
