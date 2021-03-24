import { Brand } from "./brand.model";
import { VehicleModel } from "./vehicle-model.model";

export class Order {
  id: any;
  name?: string;
  cart?: Map<VehicleModel, number>;
}
