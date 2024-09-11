import { useState } from "react";
import { FlexCardWidget } from "../../widgets";
import { Params } from "../../store/types/ext/params";

type Props = {
  configurationBaseUrl: string;
  configurationPathName: string;
};

export const FlexPage = ({
  configurationBaseUrl,
  configurationPathName,
}: Props) => {
  const [params, setParams] = useState<Params[]>([]);
  return (
    <>
      <FlexCardWidget
        source={{
          baseUrl: configurationBaseUrl,
          pathname: configurationPathName,
        }}
      />
    </>
  );
};
