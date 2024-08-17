export const hasElementChildrens = (data: any): boolean => {
  return data && data.childrens && Array.isArray(data.childrens);
};
