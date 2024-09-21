import { FlexCardWidget } from "../../widgets";
import { RequestSourceType } from "../../store/types/common/sources/requestSource";
import { useParams } from "react-router-dom";

type Props = {
  source: RequestSourceType;
};

export const FlexPage = ({ source }: Props) => {
  const urlParams = useParams();

  console.log(JSON.parse(JSON.stringify(urlParams)));
  return (
    <>
      <FlexCardWidget source={source} />
    </>
  );
};
