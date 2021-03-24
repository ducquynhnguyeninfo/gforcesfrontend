import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { OrderManagerRoutingModule } from './order-mamager-routing.module';

import { BrandComponent } from './brand/brand.component';
import { BrandListComponent } from './brand/children/brand-list/brand-list.component';
import { BrandDetailComponent } from './brand/children/modals/brand-detail/brand-detail.component';

import { VehicleModelListComponent } from './vehicle-model/children/vehicle-model-list/vehicle-model-list.component';
import { VehicleModelDetailComponent } from './vehicle-model/children/modals/vehicle-model-detail/vehicle-model-detail.component';

import { OrderListComponent } from './order/children/order-list/order-list.component';
import { OrderDetailComponent } from './order/children/modals/order-detail/order-detail.component';
import { OrderComponent } from './order/order.component';
import { VehicleModelComponent } from './vehicle-model/vehicle-model.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VehicleSelectorComponent } from './order/children/modals/vehicle-selector/vehicle-selector.component';
import { CommonUIModule } from '../common-ui/common-ui.module';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [
    BrandComponent,
    BrandListComponent,
    BrandDetailComponent,

    VehicleModelComponent,
    VehicleModelListComponent,
    VehicleModelDetailComponent,

    OrderComponent,
    OrderListComponent,
    OrderDetailComponent,
    VehicleSelectorComponent
  ],
  imports: [
    NgbModule,
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,

    OrderManagerRoutingModule,
    CommonUIModule
  ],
  exports: [
    BrandComponent,
    BrandListComponent,
    BrandDetailComponent,

    VehicleModelComponent,
    VehicleModelListComponent,
    VehicleModelDetailComponent,

    OrderComponent,
    OrderListComponent,
    OrderDetailComponent,
    VehicleSelectorComponent
  ],
  bootstrap: [
    VehicleModelDetailComponent,
    VehicleSelectorComponent
  ]
})
export class OrderMamagerModule { }
