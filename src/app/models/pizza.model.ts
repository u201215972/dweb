// pizza.model.ts
export interface Pizza {
    name: string;
    price: number;
    imagen: string;
    amount: number;
    size: string;
    prices :  Record<string, number>;
}

  