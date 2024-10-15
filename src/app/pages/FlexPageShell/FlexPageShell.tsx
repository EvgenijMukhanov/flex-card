import { useLocation, useNavigate } from "react-router-dom";
import { NavigateMethodType } from "../../../modules/flex-card/store/types/common/methods/variants/navigateMethod";
import { RoutingModelType } from "../../../modules/flex-card/store/types/common/routing/routingModel";
import { RoutingStack } from "../../../processes";
import { useState } from "react";

type PropsType = {
  startConfigurationPathname: string;
};

export const FlexPageShell = ({ startConfigurationPathname }: PropsType) => {
  const [routingModel, setRoutingModel] = useState<RoutingModelType[]>([
    {
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
  ]);

  const updateRoutingModel = (data: RoutingModelType) => {
    setRoutingModel((prev) => {
      const result: RoutingModelType[] = [];
      prev.forEach((item) => {
        if (item.nesting <= data.nesting) {
          result.push(item);
        }
      });
      result.push({ ...data, nesting: data.nesting + 1 });
      return result;
    });
  };
  const navigate = useNavigate();
  const location = useLocation();
  console.log("location", location);

  const handleNavigate = (data: NavigateMethodType) => {
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
      nesting: data.data.nesting,
      configuration: data.data.configuration,
      routing: data.data.routing,
    });
    navigate(pathname);
  };

  return (
    <>
      <RoutingStack
        routingModel={routingModel}
        handleNavigate={handleNavigate}
      />
    </>
  );
};
