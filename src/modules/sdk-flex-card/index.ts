import Context from "./Context/Context";

type Props = {
  baseUrl: string;
  navigate: (path: string) => void;
};

export const init = ({ baseUrl, navigate }: Props) => {
  const instance = Context.getInstance();
  instance.init({
    baseUrl,
    navigate,
  });
};
