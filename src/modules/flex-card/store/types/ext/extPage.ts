import { RoutingModelType } from "../common/routing/routingModel";
import { CallbacksType } from "../elements/callbacks/callbacks";

export type ExtPageType = {
  routing: RoutingModelType;
  callbacks?: CallbacksType;
};
