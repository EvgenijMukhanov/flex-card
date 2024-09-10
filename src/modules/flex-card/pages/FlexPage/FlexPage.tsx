import { FlexCardWidget } from "../../widgets";

type Props = {
  configurationBaseUrl: string;
  configurationPathName: string;
};

export const FlexPage = ({
  configurationBaseUrl,
  configurationPathName,
}: Props) => {
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
