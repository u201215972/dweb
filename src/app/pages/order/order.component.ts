import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Kitchen } from 'src/app/models/kitchen';
import { Pizza } from 'src/app/models/pizza.model';
import { DePrizzaApiService } from 'src/app/services/de-prizza-api.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent {
  
  shoppingCart: Pizza[] = [];
  kitchen = new Kitchen();
  comments? : string;
  showLoadingSendOrder : boolean = false;
  showLoadingProducts : boolean = false;
  numberTableSelected : number = 0;
  idTableSelected : string = '';
    
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private readonly dp: DePrizzaApiService
  ) 
  {}

  ngOnInit() {

    this.numberTableSelected = Number.parseInt(this.route.snapshot.queryParamMap.get('numeroMesa') ?? '0');
    this.idTableSelected = this.route.snapshot.queryParamMap.get('idMesa') ?? '0';

    setTimeout(() => {

      this.dp.getProducts().subscribe((result: any) => {
        //this.users = data;
        this.kitchen.classic = result.data.classic;
        this.kitchen.specials = result.data.specials;
  
        this.showLoadingProducts = false;

        console.log("Pizzas clasicas :" + result.data.classic);
        console.log("Pizzas especiales :" + result.data.specials);
      })

    }, 3000); 
    
  }

  addToCart(pizza: Pizza) : void {

    if (pizza.amount > 0) {
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

  removeItem(pizza: Pizza) : void {

    const indexPizza = this.shoppingCart.indexOf(pizza);
    this.shoppingCart.splice(indexPizza,1);
    //delete this.shoppingCart[indexPizza];
    
    console.log("Cantidad de items : " + this.shoppingCart.length);
  }

  updatedPrice(pizza: Pizza): void {
    pizza.price = pizza.prices[pizza.size];
  }

  sendOrder() : void
  {
    this.showLoadingSendOrder = true;

    /*{
      "pedidos": [
        1,3,4,6
      ],
      "total" : 45.70
      "comentarios": null,
    }*/


    /*this.dp.sendOrder().subscribe((result: any) => {

    })*/

    /*setTimeout(() => {

      const queryParams: any = {};

      queryParams.cart =  JSON.stringify(this.shoppingCart);
      queryParams.comments = this.comments;
  
      const navigationExtras: NavigationExtras = {
        queryParams
      };
  
      this.router.navigate(['/order/state'],navigationExtras);

    }, 5000); */


  }

}
