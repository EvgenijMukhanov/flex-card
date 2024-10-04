export const hasElementHandlers = (data: any): boolean => {
  return data && data.handlers && Object.keys(data.handlers).length > 0;
};
