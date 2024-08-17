export const hasElementProps = (data: any): boolean => {
  return data && data.props && typeof data.props === "object";
};
