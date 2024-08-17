import ru from "antd/es/locale/ru_RU";
import { ConfigProvider } from "./shared/config";
import { FlexPage } from "./modules/flex-card/pages";

const configurationName = "pages/main";

function App() {
  return (
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
      <FlexPage
        configurationBaseUrl={""}
        configurationPathName={configurationName}
      />
    </ConfigProvider>
  );
}

export default App;
