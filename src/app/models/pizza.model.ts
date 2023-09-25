// pizza.model.ts
//No he quitado los campos que ya no uso de esta clase por temas de tiempo mas que todo.
export interface Pizza {
    id:string;
    name: string;
    price: number;
    image: string;
    description:string;
    amount: number;
    size: string;
    prices :  Record<string, number>;
    idSizedSelected: number;
    sizes : PizzaSize[];
}

export interface PizzaSize {
    id:number;
    price:string;
    size: string;
}


  