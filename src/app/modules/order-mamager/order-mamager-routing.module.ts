import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrandComponent } from './brand/brand.component';
import { BrandListComponent } from './brand/children/brand-list/brand-list.component';
import { BrandDetailComponent } from './brand/children/modals/brand-detail/brand-detail.component';

import { OrderDetailComponent } from './order/children/modals/order-detail/order-detail.component';
import { OrderListComponent } from './order/children/order-list/order-list.component';

import { VehicleModelListComponent } from './vehicle-model/children/vehicle-model-list/vehicle-model-list.component';
import { OrderComponent } from './order/order.component';
import { VehicleModelComponent } from './vehicle-model/vehicle-model.component';
import { VehicleModelDetailComponent } from './vehicle-model/children/modals/vehicle-model-detail/vehicle-model-detail.component';

const routes: Routes = [{
  path: 'brands',
  component: BrandComponent,
  children: [
    {
      path: '',
      component: BrandListComponent
    },
    {
      path: 'new',
      component: BrandDetailComponent
    }
  ]
}, {
  path: 'orders',
  // canActivate: [UnAuthGuardService],
  component: OrderComponent,
  children: [
    {
      path: '',
      component: OrderListComponent
    },
    {
      path: 'new',
      component: OrderDetailComponent
    }
  ]
}, {
  path: 'models',
  component: VehicleModelComponent,
  children: [
    {
      path: '',
      component: VehicleModelListComponent
    }, {
      path: 'new',
      component: VehicleModelDetailComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderManagerRoutingModule { }
