import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand.model';
import { ApiConfiguration } from './api-configuration';
import { BaseService } from './base-api-service';

@Injectable({
  providedIn: 'root'
})
export class BrandApiService extends BaseService<Brand> {

  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
    this.baseUrl = `${this.config.rootUrl}/brands/`;
  }
}
