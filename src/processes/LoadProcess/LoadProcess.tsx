import { ReactNode, useEffect, useState } from "react";
import { init as initFlexCard } from "../../modules/flex-card";
import { useLocation, useNavigate, useParams } from "react-router-dom";

type Props = {
  children: ReactNode;
};

export const LoadProcess = (props: Props) => {
  const navigate = useNavigate();
  const [load, setLoad] = useState<boolean>(false);
  const locationParams = useParams();
  console.log("locationParams", locationParams);
  const location = useLocation();
  console.log("location", location);

  useEffect(() => {
    initFlexCard({
      baseUrl: "",
      navigate: (path: string) => {
        navigate(path);
      },
    });
    setLoad(true);
  }, []);

  return <>{load && props.children}</>;
};
