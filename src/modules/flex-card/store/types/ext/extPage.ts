import { RoutingModelType } from "../common/routing/routingModel";
import { CallbacksType } from "../callbacks/callbacks";

export type ExtPageType = {
  routing: RoutingModelType;
  callbacks?: CallbacksType;
};
