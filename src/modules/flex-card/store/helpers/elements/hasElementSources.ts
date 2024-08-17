export const hasElementSources = (data: any): boolean => {
  return data && data.sources && typeof data.sources === "object";
};
