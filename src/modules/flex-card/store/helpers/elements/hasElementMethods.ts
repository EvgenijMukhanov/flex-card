export const hasElementMethods = (data: any): boolean => {
  return data && data.methods && Object.keys(data.methods).length > 0;
};
