import { useNavigate } from "react-router-dom";
import { FlexPage } from "../../../modules/flex-card/pages";
import { RequestSourceType } from "../../../modules/flex-card/store/types/common/sources/requestSource";
import { NavigateMethodType } from "../../../modules/flex-card/store/types/common/methods/variants/navigateMethod";
import { RoutingModelType } from "../../../modules/flex-card/store/types/common/routing/routingModel";
import { ExtPageType } from "../../../modules/flex-card/store/types/ext/extPage";

type PropsType = {
  // source: RequestSourceType;
  ext: ExtPageType;
  updateRoutingModel: (data: RoutingModelType) => void;
};

export const FlexPageShell = ({ ext, updateRoutingModel }: PropsType) => {
  const navigate = useNavigate();

  const handleNavigate = (data: NavigateMethodType) => {
    console.log("navigate", data);
    let pathname = "";
    data.data.routing.routes.forEach((route) => {
      if (route.type === "pathname") {
        if (pathname) {
          pathname = `${pathname}/${route.pathname.join("/")}`;
        } else {
          pathname = `${route.pathname.join("/")}`;
        }
      }
    });
    updateRoutingModel({
      nesting: ext.routing.nesting++,
      configuration: data.data.configuration,
      routing: data.data.routing,
    });
    navigate(pathname);
  };

  return (
    <>
      <FlexPage
        ext={{
          callbacks: { navigate: handleNavigate },
          routing: ext.routing,
        }}
      />
    </>
  );
};
