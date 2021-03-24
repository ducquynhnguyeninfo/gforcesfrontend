import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigatorBarComponent } from './navigator-bar/navigator-bar.component';
import { TranslateModule } from '@ngx-translate/core';
import { OrderManagerRoutingModule } from '../order-mamager/order-mamager-routing.module';
import { InformModalComponent } from './inform-modal/inform-modal.component';


@NgModule({
  declarations: [
    NavigatorBarComponent,
    InformModalComponent,
  ],
  imports: [
    CommonModule,
    OrderManagerRoutingModule,
    TranslateModule
  ],
  exports: [
    NavigatorBarComponent,
    InformModalComponent,
  ]
})
export class CommonUIModule { }
