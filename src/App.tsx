import { BrowserRouter } from "react-router-dom";
import ru from "antd/es/locale/ru_RU";
import { ConfigProvider } from "./shared/config";
import { LoadProcess } from "./processes";
import { FlexShellPage } from "./modules/sdk-flex-card/ext";

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
          <FlexShellPage
            configuration={{
              baseUrl: "meta",
              pathname: "configuration",
            }}
            main={{
              baseUrl: "pages",
              pathname: "main",
            }}
          />
          {/* <Routes>
            <Route
              path="/*"
              element={
                <FlexShellPage startConfigurationPathname="pages/main" />
              }
            />
          </Routes> */}
        </ConfigProvider>
      </LoadProcess>
    </BrowserRouter>
  );
}

export default App;
