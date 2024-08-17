import { ElementWidget } from "..";
import { ElementType } from "../../store/types/element";

type Props = {
  childrens: ElementType[];
  currentKey: string;
};

export const ElementChildrens = ({ childrens, currentKey }: Props) => {
  return (
    <>
      {!!childrens &&
        childrens.map((element: ElementType, idx: number) => {
          const key = `${currentKey}-${idx}`;
          return (
            <ElementWidget children={element} currentKey={key} key={key} />
          );
        })}
    </>
  );
};
