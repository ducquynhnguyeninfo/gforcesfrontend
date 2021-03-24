import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';


const home: Route = {path: '', redirectTo: 'orders', pathMatch: 'full'};
const routes: Routes = [home];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
