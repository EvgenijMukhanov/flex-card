import { NavigateMethodType } from "../../../store/types/common/methods/variants/navigateMethod";

export const getBestMatchNavigateMethodFromCollection = ({
  methods,
  locationSplit,
}: {
  locationSplit: string[];
  methods: NavigateMethodType[];
}): NavigateMethodType | undefined => {
  console.log("getBestMatchNavigateMethodFromCollection");
  console.log("locationSplit", locationSplit);
  console.log("methods", methods);

  let result: NavigateMethodType[] = [];
  locationSplit.forEach((locationParam: string) => {
    console.log("locationParam", locationParam);

    methods.forEach((method) => {
      if (method.data.routing.routes.length > 0) {
        console.log("method.data.routing.routes", method.data.routing.routes);
        const path = method.data.routing.routes[0];
        console.log("path", path);
        if (path.pathname.length > 0) {
          const pathname = path.pathname[0];
          console.log("pathname", pathname);
        }
      }
    });
  });
  return undefined;
};
