import { ElementWidget } from "../../../../widgets";
import { ElementParentType } from "../../../../store/types/common/elements/parent";
import { ElementType } from "../../types/element";

type Props = {
  childrens: ElementType[];
  currentKey: string;
  parent: ElementParentType;
};

export const ElementChildrens = ({ childrens, currentKey, parent }: Props) => {
  return (
    <>
      {!!childrens &&
        childrens.map((element: ElementType, idx: number) => {
          const key = `${currentKey}-${idx}`;
          return (
            <ElementWidget
              children={element}
              currentKey={key}
              key={key}
              parent={{ ...parent, breadcrumbs: [...parent.breadcrumbs, idx] }}
            />
          );
        })}
    </>
  );
};
