import { useNavigate } from "react-router-dom";
import { FlexPage } from "../../../modules/flex-card/pages";
import { RequestSourceType } from "../../../modules/flex-card/store/types/common/sources/requestSource";
import { NavigateMethodType } from "../../../modules/flex-card/store/types/common/methods/variants/navigateMethod";
import { ConfigurationDataIsolateType } from "../../../modules/flex-card/store/types/common/sources/configurationData";
import { RoutingType } from "../../../modules/flex-card/store/types/common/routing/routing";

type PropsType = {
  source: RequestSourceType;
  updateRoutingModel: (data: RoutingModelType) => void;
};

type RoutingModelType = {
  configuration?: ConfigurationDataIsolateType;
  routing?: RoutingType;
};

export const FlexPageShell = ({ source, updateRoutingModel }: PropsType) => {
  const nav = useNavigate();

  const navigate = (data: NavigateMethodType) => {
    console.log("navigate", data);
    let pathname = "";
    data.routing?.routes.forEach((route) => {
      if (route.pathname) {
        if (pathname) {
          pathname = `${pathname}/${route.pathname.join("/")}`;
        } else {
          pathname = `${route.pathname.join("/")}`;
        }
      }
    });
    updateRoutingModel({
      configuration: data.configuration,
      routing: data.routing,
    });

    nav(pathname);
  };

  return (
    <>
      <FlexPage
        source={source}
        ext={{
          callbacks: { navigate },
        }}
      />
    </>
  );
};
