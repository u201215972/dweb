import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableSelectionComponent } from './pages/table-selection/table-selection.component';
import { OrderComponent } from './pages/order/order.component';
import { OrderStateComponent } from './pages/order-state/order-state.component';

const routes: Routes = [
  {path:'',component:TableSelectionComponent},
  {path:'order' ,component:OrderComponent},
  {path:'order/state' ,component:OrderStateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
