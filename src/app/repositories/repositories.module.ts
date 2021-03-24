import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api/api-configuration';
import { BrandApiService } from './api/brand-api.service';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { VehicleModelApiService } from './api/vehicle-model-api.service';
import { OrderApiService } from './api/order-api.service';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  providers: [
    ApiConfiguration,
    BrandApiService,
    VehicleModelApiService,
    OrderApiService,
  ]
})
export class RepositoriesModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders {
    return {
      ngModule: RepositoriesModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
