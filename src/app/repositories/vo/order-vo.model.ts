import { VehicleModelVO } from './vehicle-model-vo.model';

export class OrderVO {
  id?: string;
  name?: string;
  cart?: Map<VehicleModelVO, number>;
}
