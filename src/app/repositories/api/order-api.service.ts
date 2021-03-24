import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';
import { ApiConfiguration } from './api-configuration';
import { BaseService } from './base-api-service';

@Injectable({
  providedIn: 'root'
})
export class OrderApiService extends BaseService<Order> {

  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
    this.baseUrl = `${this.config.rootUrl}/orders`;
  }
}
