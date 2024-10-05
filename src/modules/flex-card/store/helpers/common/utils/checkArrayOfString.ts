export const checkArrayOfString = (data: any): boolean => {
  if (data && Array.isArray(data)) {
    const result = data.some((item) => typeof item !== "string");
    return !result;
  }
  return false;
};
