import Context from "./Context/Context";

type Props = {
  baseUrl: string;
};

export const init = ({ baseUrl }: Props) => {
  const instance = Context.getInstance();
  instance.init({
    baseUrl: baseUrl,
  });
};
