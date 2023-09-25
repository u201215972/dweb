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

    test : Pizza[] = [];

    clasicas: Pizza[] = [
        { id: '',description : '', name: 'Americana', image : this.pizzaAmerican, prices:{ 
            'Personal' : 10.90,
            'Mediana' : 25.90,
            'Grande' : 33.90,
            'Familiar': 43.90
            },price: 33.90, amount: 0, size: 'Grande',sizes:[] ,idSizedSelected : 0},
        {  id: '',description : '',name: 'Pepperoni', image : this.pizzaPepperoni, prices:{ 
            'Personal' : 10.90,
            'Mediana' : 28.40,
            'Grande' : 36.40,
            'Familiar': 46.40
            },price: 36.40, amount: 0, size: 'Grande' ,sizes:[],idSizedSelected : 0},
        {  id: '',description : '',name: 'Vegetariana', image : this.pizzaVegetarian, prices:{ 
            'Personal' : 8.80,
            'Mediana' : 28.40,
            'Grande' : 36.40,
            'Familiar': 46.40
            },price: 36.40, amount: 0, size: 'Grande',sizes:[] ,idSizedSelected : 0},
        {  id: '',description : '',name: 'Mozzarella', image : this.pizzaMozzarella, prices:{ 
            'Personal' : 10.90,
            'Mediana' : 28.40,
            'Grande' : 36.40,
            'Familiar': 46.40
            },price: 36.40, amount: 0, size: 'Grande',sizes:[] ,idSizedSelected : 0},
        // Otras pizzas
    ];


    especial: Pizza[] = [
        {  id: '',description : '',name: 'Hawaiana', image : this.pizzaHawaiian, prices:{ 
            'Personal' : 13.90,
            'Mediana' : 36.40,
            'Grande' : 41.40,
            'Familiar': 51.40
            },price: 41.40, amount: 0, size: 'Grande',sizes:[] ,idSizedSelected : 0},
        {  id: '',description : '',name: 'Margarita', image : this.pizzaDaisyFlower, prices:{ 
            'Personal' : 13.90,
            'Mediana' : 36.40,
            'Grande' : 41.40,
            'Familiar': 51.40
            },price: 41.40, amount: 0, size: 'Grande' ,sizes:[],idSizedSelected : 0},
        {  id: '',description : '',name: 'Continental', image : this.pizzaContinentalle, prices:{ 
            'Personal' : 13.90,
            'Mediana' : 36.40,
            'Grande' : 41.40,
            'Familiar': 51.40
            },price: 41.40, amount: 0, size: 'Grande' ,sizes:[],idSizedSelected : 0},
        {  id: '',description : '',name: 'Chicken BBQ', image : this.pizzaChickenBBQ, prices:{ 
            'Personal' : 13.90,
            'Mediana' : 40.40,
            'Grande' : 50.90,
            'Familiar': 60.40
            },price: 50.90, amount: 0, size: 'Grande',sizes:[],idSizedSelected : 0 },
        // Otras pizzas
    ];

    setupPricesPizza() : void {

        this.clasicas.forEach(function(pizza){
            
            const sizeSelected = pizza.sizes.find(size => size.size == "Grande");
            pizza.size = "Grande";
            
            
            if (sizeSelected) {
                pizza.idSizedSelected = sizeSelected.id;
                pizza.price = Number.parseFloat(sizeSelected.price);
            }

            //console.log("Nombre " + pizza.name);
        });

        this.especial.forEach(function(pizza){
            
            const sizeSelected = pizza.sizes.find(size => size.size == "Grande");
            pizza.size = "Grande";

            if (sizeSelected) {
                pizza.idSizedSelected = sizeSelected.id;
                pizza.price = Number.parseFloat(sizeSelected.price);
            }

            //console.log("Nombre " + pizza.name);

        });
    }

    
}