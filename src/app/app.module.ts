import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableSelectionComponent } from './pages/table-selection/table-selection.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { OrderComponent } from './pages/order/order.component';
import { FormsModule } from '@angular/forms';
import { OrderStateComponent } from './pages/order-state/order-state.component';

@NgModule({
  declarations: [
    AppComponent,
    TableSelectionComponent,
    FooterComponent,
    HeaderComponent,
    OrderComponent,
    OrderStateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
