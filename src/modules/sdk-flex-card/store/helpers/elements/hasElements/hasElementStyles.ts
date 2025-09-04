export const hasElementStyles = (data: any): boolean => {
  return data && data.styles && typeof data.styles === "object";
};
