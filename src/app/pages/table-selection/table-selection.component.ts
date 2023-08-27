import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from 'src/app/models/restaurant';
import { Table } from 'src/app/models/table';

@Component({
  selector: 'app-table-selection',
  templateUrl: './table-selection.component.html',
  styleUrls: ['./table-selection.component.css']
})

export class TableSelectionComponent {

  selectedTable : boolean = false;

  restaurant = new Restaurant();

  constructor(private router: Router) {}

  selectTable(table : Table) : void {
    
    if(table.state == this.restaurant.available)
    {
      //this.restaurant.tables.forEach(function (table){ table.selected = false; });
      table.selected = !table.selected;
      table.path = table.selected ? this.restaurant.tableSilhouetteGreen : this.restaurant.tableSilhouetteRed;
      this.selectedTable = this.restaurant.tables.some(m => m.selected);
    }
   
  }

  getSelectedNumber() : void {

    //this.silhouettes.some()
    const mesaSeleccionada = this.restaurant.tables.find(table => table.selected);

    if (mesaSeleccionada) {
      //alert(`Número de mesa seleccionada: ${mesaSeleccionada.number}`);
      this.navigateToOrder();
    }

  }

  navigateToOrder() : void  {
    this.router.navigate(['/order']);
  }


}





