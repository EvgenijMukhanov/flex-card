class Context {
  private static instance: Context;

  baseUrl: string | undefined;
  navigate: ((path: string) => void | undefined) | undefined;

  static getInstance() {
    if (!Context.instance) {
      Context.instance = new Context();
    }
    return Context.instance;
  }

  init({
    baseUrl,
    navigate,
  }: {
    baseUrl: string;
    navigate: (path: string) => void;
  }) {
    this.baseUrl = baseUrl;
    this.navigate = navigate;
  }
}

export default Context;
