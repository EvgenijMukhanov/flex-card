import { AnyObject } from "../../../../../../shared/types/common/AnyObject";
import { HttpMethodTypes } from "../http/httpMethods";

export type RequestSourceType = RequestSourcHttpType | RequestSourcImportType;

export type RequestSourcHttpType = {
  variant: "http";
  method: HttpMethodTypes;
  baseUrl: string;
  path: string;
  body?: AnyObject;
};

export type RequestSourcImportType = {
  variant: "import";
};
