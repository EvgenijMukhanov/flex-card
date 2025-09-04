import { ReactNode, useEffect, useState } from "react";
import { init as initFlexCard } from "../../modules/sdk-flex-card";
import { useNavigate } from "react-router-dom";

type Props = {
  children: ReactNode;
};

export const LoadProcess = (props: Props) => {
  const navigate = useNavigate();
  const [load, setLoad] = useState<boolean>(false);

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
