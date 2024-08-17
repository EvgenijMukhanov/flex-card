import { AnyObject } from "../../../../../../shared/types/common/AnyObject";
import { HttpMethodTypes } from "../http/httpMethods";

export type RequestSourceType = {
  method: HttpMethodTypes;
  baseUrl: string;
  path: string;
  body?: AnyObject;
};
