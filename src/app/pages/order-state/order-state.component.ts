import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pizza } from 'src/app/models/pizza.model';

@Component({
  selector: 'app-order-state',
  templateUrl: './order-state.component.html',
  styleUrls: ['./order-state.component.css']
})
export class OrderStateComponent implements OnInit {

  shoppingCart: Pizza[] = [];
  comments : string = 'No hay comentarios';

  cookingClass : string = "icon";
  cookingState : string = "step0 col-4";
  deliveredState : string = "step0 col-4";

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {

    /*this.route.queryParams.subscribe(params => {
      this.comments = params['comments'];
      console.log(this.comments);
    });*/
    this.comments = this.route.snapshot.queryParamMap.get('comments') ?? 'No hay comentarios';

    const array = this.route.snapshot.queryParamMap.get('cart');
    this.shoppingCart = JSON.parse(array!) as Pizza[];

    //console.log(this.comments);
     //console.log("Carrito de compra -> " + this.shoppingCart);

    /*this.shoppingCart.forEach(function(pizza){
      console.log("Nombre " + pizza.name);
    });*/

    setTimeout(() => {
      this.cookingState = "active step0 col-4";
      this.cookingClass = "icon-cooking"; 
    }, 5000);

    setTimeout(() => {
      this.deliveredState = "active step0 col-4";
    }, 10000);
    
  }

}
