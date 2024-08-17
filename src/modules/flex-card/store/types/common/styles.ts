export type StyleType =
  | "height"
  | "minHeigth"
  | "maxHeight"
  | "display"
  | "flexGrow";

export type StylesType = {
  height?: string | number;
  minHeigth?: string | number;
  maxHeight?: string | number;
  display: string;
  flexGrow: number;
};
