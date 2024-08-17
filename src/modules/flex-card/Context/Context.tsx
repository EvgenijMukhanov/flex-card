class Context {
  private static instance: Context;

  baseUrl: string | undefined;

  static getInstance() {
    if (!Context.instance) {
      Context.instance = new Context();
    }
    return Context.instance;
  }

  init({ baseUrl }: { baseUrl: string }) {
    this.baseUrl = baseUrl;
  }
}

export default Context;
