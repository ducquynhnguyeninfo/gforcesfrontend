import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VehicleModel } from '../models/vehicle-model.model';
import { ApiConfiguration } from './api-configuration';
import { BaseService } from './base-api-service';

@Injectable({
  providedIn: 'root'
})
export class VehicleModelApiService extends BaseService<VehicleModel> {

  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
    this.baseUrl = `${this.config.rootUrl}/vehiclemodels/`;
  }
}
