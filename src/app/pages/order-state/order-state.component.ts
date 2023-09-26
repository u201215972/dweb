import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pizza } from 'src/app/models/pizza.model';
import { DePrizzaApiService } from 'src/app/services/de-prizza-api.service';

@Component({
  selector: 'app-order-state',
  templateUrl: './order-state.component.html',
  styleUrls: ['./order-state.component.css']
})
export class OrderStateComponent implements OnInit {

  shoppingCart: Pizza[] = [];
  comments : string = 'No hay comentarios';
  idOrder : string = '985SROZNGE';
  estimadedDelivery : string = '9:00 pm';
  statusOrder : string = 'NEW';

  statusDone : string = 'DONE';
  statusPreparing : string = 'PREPARING';
  statusCanceled : string = 'CANCELED';

  cookingClass : string = "icon";
  cookingState : string = "step0 col-4";
  deliveredState : string = "step0 col-4";

  constructor(
    private route: ActivatedRoute,
    private readonly dp: DePrizzaApiService
  ) {}

  ngOnInit() {

    this.comments = this.route.snapshot.queryParamMap.get('comments') ?? 'No hay comentarios';
    this.idOrder = this.route.snapshot.queryParamMap.get('idOrder') ?? '';
    this.estimadedDelivery = this.route.snapshot.queryParamMap.get('estimadedDelivery') ?? '';

    const array = this.route.snapshot.queryParamMap.get('cart');
    this.shoppingCart = JSON.parse(array!) as Pizza[];

    console.log(this.comments);
    console.log(this.idOrder);
     //console.log("Carrito de compra -> " + this.shoppingCart);

    /*this.shoppingCart.forEach(function(pizza){
      console.log("Nombre " + pizza.name);
    });*/

    /*setTimeout(() => {
      this.cookingState = "active step0 col-4";
      this.cookingClass = "icon-cooking"; 
    }, 5000);

    setTimeout(() => {
      this.deliveredState = "active step0 col-4";
    }, 10000);*/

    this.checkStatusOrder();
  }

  calculateTotal() : number {
    return this.shoppingCart.reduce((total, pizza) => total + pizza.price * pizza.amount, 0);
  }

  checkStatusOrder() : void 
  {
    if (this.statusOrder == this.statusDone || this.statusOrder == this.statusCanceled) {
      return;
    }


    setTimeout(() => {
      
      this.dp.checkStatusOrder(this.idOrder).subscribe((result: any) => {

        const orderJson = JSON.stringify(result);
        console.log(orderJson);

        const statusOrderResponse : string = result.status;
        this.statusOrder = statusOrderResponse;

        console.log("Estado pedido actual "+this.statusOrder);

        switch (this.statusOrder) {
          case this.statusPreparing:

            this.cookingState = "active step0 col-4";
            this.cookingClass = "icon-cooking";

            break;
          case this.statusDone:

            this.deliveredState = "active step0 col-4";
            break;

          case this.statusCanceled:
            alert('El restaurante canceló tu pedido.')
            break;

          default:
            break;
        }

        this.checkStatusOrder();
      });

    }, 10000);

  }

}
