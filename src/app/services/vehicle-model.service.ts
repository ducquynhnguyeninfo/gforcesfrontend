import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VehicleModelApiService } from '../repositories/api/vehicle-model-api.service';
import { VehicleModel } from '../repositories/models/vehicle-model.model';
import { VehicleModelVO } from '../repositories/vo/vehicle-model-vo.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleModelService {

  constructor(private api: VehicleModelApiService) {
  }

  getAll(): Observable <VehicleModel[]> {
    return this.api.getAll();
  }

  create(vo: VehicleModel): Observable<VehicleModel> {
    return this.api.create(vo);
  }

  update(vo: VehicleModel): Observable<VehicleModel> {
    return this.api.update(vo.id, vo);
  }

  delete(vm: VehicleModel): Observable<VehicleModel> {
    return this.api.delete(vm.id);
  }

}
