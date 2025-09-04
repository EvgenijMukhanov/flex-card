import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
// import { NavigateMethodType } from "../../../modules/sdk-flex-card/store/types/common/methods/variants/navigateMethod";
// import { RoutingModelType } from "../../../modules/sdk-flex-card/store/types/common/routing/routingModel";
// import { RoutingStack } from "../../../processes";
import { useEffect, useState } from "react";
import { loadMetaConfigurations } from "../../../configuration/meta/helpers/loadMetaConfigurations";
import { MetaConfigurationType } from "../../../configuration/meta/types/configuration";
// import { OnLoadConfigurationType } from "../../../modules/sdk-flex-card/store/types/callbacks/callbacks";
// import { collectNavigateMethodFromConfigurationModel } from "../../../modules/sdk-flex-card/store/helpers/configuration/collectNavigateMethodFromConfigurationModel";
// import { getBestMatchNavigateMethodFromCollection } from "../../../modules/sdk-flex-card/store/helpers/configuration/getBestMatchNavigateMethodFromCollection";
// import { loadMetaConfigurations } from "../../../modules/sdk-flex-card/store/helpers/meta/loadMetaConfigurations";

type PropsType = {
  configuration: {
    baseUrl: string;
    pathname: string;
  };
  main: {
    baseUrl: string;
    pathname: string;
  };
};

export const FlexShellPage = ({ configuration, main }: PropsType) => {
  const navigate = useNavigate();
  const location = useLocation();
  const locationSplit = location.pathname.split("/");
  console.log("locationSplit", locationSplit);

  const [meta, setMeta] = useState<MetaConfigurationType | undefined>(
    undefined,
  );

  useEffect(() => {
    const load = async () => {
      const meta = await loadMetaConfigurations({
        variant: "http",
        baseUrl: configuration.baseUrl,
        pathname: configuration.pathname,
        execute: "async",
        method: "GET",
      });
      setMeta(meta);
      if (meta.main) {
      }
    };
    load();
  }, []);
  console.log("meta", meta);

  // const [routingModel, setRoutingModel] = useState<RoutingModelType[]>([
  //   {
  //     nesting: 0,
  //     loading: false,
  //     configuration: {
  //       type: "configuration",
  //       relation: "isolate",
  //       source: {
  //         variant: "http",
  //         method: "GET",
  //         execute: "await",
  //         baseUrl: "",
  //         pathname: startConfigurationPathname,
  //       },
  //     },
  //     routing: {
  //       routes: [
  //         {
  //           type: "pathname",
  //           pathname: [""],
  //         },
  //       ],
  //     },
  //   },
  // ]);

  // const updateRoutingModel = (data: RoutingModelType) => {
  //   setRoutingModel((prev) => {
  //     const result: RoutingModelType[] = [];
  //     prev.forEach((item) => {
  //       if (item.nesting <= data.nesting) {
  //         result.push(item);
  //       }
  //     });
  //     result.push({ ...data, nesting: data.nesting + 1 });
  //     return result;
  //   });
  // };

  // const handleNavigate = (data: NavigateMethodType) => {
  //   let pathname = "";
  //   data.data.routing.routes.forEach((route) => {
  //     if (route.type === "pathname") {
  //       if (pathname) {
  //         pathname = `${pathname}/${route.pathname.join("/")}`;
  //       } else {
  //         pathname = `${route.pathname.join("/")}`;
  //       }
  //     }
  //   });
  //   updateRoutingModel({
  //     nesting: data.data.nesting,
  //     loading: false,
  //     configuration: data.data.configuration,
  //     routing: data.data.routing,
  //   });
  //   navigate(pathname);
  // };

  // const onLoadConfiguration = (data: OnLoadConfigurationType) => {
  //   console.log("onLoadConfiguration", data);
  //   const collectionNavigateMethods: NavigateMethodType[] =
  //     collectNavigateMethodFromConfigurationModel(data.configuration);
  //   console.log("collectionNavigateMethods", collectionNavigateMethods);
  //   const remainderLocation = locationSplit.slice(data.nesting + 1);
  //   const find = getBestMatchNavigateMethodFromCollection({
  //     locationSplit: remainderLocation,
  //     methods: collectionNavigateMethods,
  //   });
  //   console.log("find", find);

  //   setRoutingModel((prev: RoutingModelType[]) => {
  //     return prev.map((item: RoutingModelType) => {
  //       if (item.nesting === data.nesting) {
  //         return {
  //           ...item,
  //           loading: true,
  //         };
  //       }
  //       return item;
  //     });
  //   });
  // };

  // const getRoutingModel = (routingModel: RoutingModelType[]) => {
  //   const result: RoutingModelType[] = [];
  //   let isLastAdd = false;
  //   routingModel.forEach((item) => {
  //     if (item.loading) {
  //       result.push(item);
  //     } else {
  //       if (!isLastAdd) {
  //         result.push(item);
  //         isLastAdd = true;
  //       }
  //     }
  //   });
  //   return result;
  // };

  // console.log("routingModel", routingModel);

  return (
    <>
      <Routes>
        <Route path="/*" element={<div>123</div>} />
      </Routes>
      {/* <RoutingStack
        routingModel={getRoutingModel(routingModel)}
        navigate={handleNavigate}
        onLoadConfiguration={onLoadConfiguration}
      /> */}
    </>
  );
};
