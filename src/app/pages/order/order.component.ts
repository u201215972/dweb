import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Kitchen } from 'src/app/models/kitchen';
import { Order } from 'src/app/models/order';
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
  showLoadingProducts : boolean = true;
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

      this.dp.getMenu().subscribe((result: Kitchen) => {
        //this.users = data;
        //this.kitchen.test = result;
        this.kitchen.clasicas = result.clasicas;
        this.kitchen.especial = result.especial;
  
        this.showLoadingProducts = false;

        console.log("Pizzas clasicas :" + result.clasicas);
        console.log("Pizzas especiales :" + result.especial);

        this.kitchen.setupPricesPizza();
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

    const sizeSelected = pizza.sizes.find(pizzaSize => pizzaSize.size == pizza.size);

    if (sizeSelected) {
      pizza.price = Number.parseFloat(sizeSelected.price);
      pizza.idSizedSelected = sizeSelected.id;
    }

  }

  sendOrder() : void
  {
    this.showLoadingSendOrder = true;
    const orderBody = new Order(this.comments ?? '',this.idTableSelected,this.shoppingCart);
    //const orderJson = JSON.stringify(orderBody);
    //console.log("Order body : " + orderJson);

    setTimeout(() => {

      this.dp.sendOrder(orderBody).subscribe((result: any) => {

        const queryParams: any = {};
        const idOrder : string = result.code;
  
        queryParams.cart =  JSON.stringify(this.shoppingCart);
        queryParams.comments = this.comments;
        queryParams.idOrder = idOrder;
    
        const navigationExtras: NavigationExtras = {
          queryParams
        };
    
        this.router.navigate(['/order/state'],navigationExtras);
  
      })

    }, 5000); 

  }

}
