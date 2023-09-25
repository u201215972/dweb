import { Pizza } from "./pizza.model";

export class Order {

    comments:string;
    table :string = "";
    dishes : Dish[] = [];
    
    constructor(comment:string,table:string,pizzas : Pizza[])
    {
        this.comments = comment;
        this.table = table;

        for (let index = 0; index < pizzas.length; index++) {
            const pizza = pizzas[index];
    
            const dish  = new Dish(pizza.id,pizza.amount,pizza.idSizedSelected);
            this.dishes.push(dish);
        }
    }

}

export class Dish {
    dish :string = "";
    quantity:number = 0;
    size:number = 0;

    constructor(dish:string,quantity:number,size:number){
        this.dish = dish;
        this.quantity = quantity;
        this.size = size;
    }
}



   /*{
      "comments": "",
      "table": "489108c9-7acf-4ec1-b989-e6cd7df649c7",
      "dishes": [
         {
             "dish": "cb6ec360-6c1c-484f-b13f-b31bb76807d6",
             "quantity": 2,
             "size": 12
         }
      ]
  }*/

  /*const bodyOrder = {
    "dishes": [
      1,3,4,6
    ],
    "table" : this.idTableSelected,
    "comments": this.comments ?? '',
  };*/