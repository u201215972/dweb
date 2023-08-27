import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Kitchen } from 'src/app/models/kitchen';
import { Pizza } from 'src/app/models/pizza.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent {
  
  shoppingCart: Pizza[] = [];
  kitchen = new Kitchen();
  comments? : string;

  constructor(private router: Router) {}

  addToCart(pizza: Pizza) : void {

    if (pizza.amount != 0) {
      this.shoppingCart.push(pizza);
    }

  }

  calculateTotal() : number {
    return this.shoppingCart.reduce((total, pizza) => total + pizza.price * pizza.amount, 0);
  }

  disabledSendOrder() : boolean
  {
    return this.calculateTotal() > 0;
  }

  updatedPrice(pizza: Pizza): void {
    pizza.price = pizza.prices[pizza.size];
  }

  sendOrder() : void
  {
    const queryParams: any = {};

    queryParams.cart =  JSON.stringify(this.shoppingCart);
    queryParams.comments = this.comments;

    const navigationExtras: NavigationExtras = {
      queryParams
    };

    this.router.navigate(['/order/state'],navigationExtras);
  }

}
