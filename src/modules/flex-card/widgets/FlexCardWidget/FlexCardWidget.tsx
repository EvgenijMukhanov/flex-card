import { ElementWidget } from "..";
import { ConfigurationModel } from "../../store/types/configurationModel";
import { ElementType } from "../../store/types/element";

type Props = {
  configuration: ConfigurationModel;
  configurationPathName: string;
};

export const FlexCardWidget = ({
  configuration,
  configurationPathName,
}: Props) => {
  return (
    <>
      {configuration.childrens.map((children: ElementType, idx: number) => {
        const key = `${configurationPathName}-${idx}`;
        return <ElementWidget children={children} currentKey={key} key={key} />;
      })}
    </>
  );
};
