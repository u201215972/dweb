import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pizza } from 'src/app/models/pizza.model';

@Component({
  selector: 'app-order-state',
  templateUrl: './order-state.component.html',
  styleUrls: ['./order-state.component.css']
})
export class OrderStateComponent {

  shoppingCart: Pizza[] = [];;
  comments : string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.shoppingCart = params['cart'];
      this.comments = params['comments'];
    });
    
  }

}
