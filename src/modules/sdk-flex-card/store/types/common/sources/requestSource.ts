import { AnyObject } from "../../../../../../shared/types/common/AnyObject";
import { HttpExecuteType } from "../http/HttpExecuteType";
import { HttpMethodTypes } from "../http/httpMethods";

export type RequestSourceType = RequestSourceHttpType | RequestSourcImportType;

export type RequestSourceHttpType = {
  variant: "http";
  method: HttpMethodTypes;
  execute: HttpExecuteType;
  baseUrl: string;
  pathname: string;
  body?: AnyObject;
};

export type RequestSourcImportType = {
  variant: "import";
};
