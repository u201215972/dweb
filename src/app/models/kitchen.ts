import { Pizza } from "./pizza.model";

export class Kitchen
{
    constructor(){}

    pizzaPepperoni : string = 'assets/img/pizzas/pepperoni.jpg';
    pizzaVegetarian : string = 'assets/img/pizzas/vegetariana.jpeg';
    pizzaMozzarella : string = 'assets/img/pizzas/mozzarella.webp';
    pizzaAmerican : string = 'assets/img/pizzas/american.jpeg';
    pizzaHawaiian : string = 'assets/img/pizzas/hawaiian.jpeg';
    pizzaDaisyFlower : string = 'assets/img/pizzas/daisyflower_new.webp';
    pizzaContinentalle : string = 'assets/img/pizzas/continentalle.jpeg';
    pizzaChickenBBQ : string = 'assets/img/pizzas/chickenBBQ.jpeg';

    classic: Pizza[] = [
        { name: 'Americana', imagen : this.pizzaAmerican, prices:{ 
            'Personal' : 10.90,
            'Mediana' : 25.90,
            'Grande' : 33.90,
            'Familiar': 43.90
            },price: 33.90, amount: 0, size: 'Grande' },
        { name: 'Pepperoni', imagen : this.pizzaPepperoni, prices:{ 
            'Personal' : 10.90,
            'Mediana' : 28.40,
            'Grande' : 36.40,
            'Familiar': 46.40
            },price: 36.40, amount: 0, size: 'Grande' },
        { name: 'Vegetariana', imagen : this.pizzaVegetarian, prices:{ 
            'Personal' : 8.80,
            'Mediana' : 28.40,
            'Grande' : 36.40,
            'Familiar': 46.40
            },price: 36.40, amount: 0, size: 'Grande' },
        { name: 'Mozzarella', imagen : this.pizzaMozzarella, prices:{ 
            'Personal' : 10.90,
            'Mediana' : 28.40,
            'Grande' : 36.40,
            'Familiar': 46.40
            },price: 36.40, amount: 0, size: 'Grande' },
        // Otras pizzas
    ];


    specials: Pizza[] = [
        { name: 'Hawaiana', imagen : this.pizzaHawaiian, prices:{ 
            'Personal' : 13.90,
            'Mediana' : 36.40,
            'Grande' : 41.40,
            'Familiar': 51.40
            },price: 41.40, amount: 0, size: 'Grande' },
        { name: 'Margarita', imagen : this.pizzaDaisyFlower, prices:{ 
            'Personal' : 13.90,
            'Mediana' : 36.40,
            'Grande' : 41.40,
            'Familiar': 51.40
            },price: 41.40, amount: 0, size: 'Grande' },
        { name: 'Continental', imagen : this.pizzaContinentalle, prices:{ 
            'Personal' : 13.90,
            'Mediana' : 36.40,
            'Grande' : 41.40,
            'Familiar': 51.40
            },price: 41.40, amount: 0, size: 'Grande' },
        { name: 'Chicken BBQ', imagen : this.pizzaChickenBBQ, prices:{ 
            'Personal' : 13.90,
            'Mediana' : 40.40,
            'Grande' : 50.90,
            'Familiar': 60.40
            },price: 50.90, amount: 0, size: 'Grande' },
        // Otras pizzas
    ];

    
}