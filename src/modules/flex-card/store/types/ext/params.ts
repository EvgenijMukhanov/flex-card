import { RequestSourceType } from "../common/sources/requestSource";

export type ParamsType = {
  path: ParamsPathType[];
  source: RequestSourceType;
};

export type ParamsPathType = {
  attribute: string;
  value: string;
};
