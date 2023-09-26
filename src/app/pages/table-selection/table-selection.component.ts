import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Restaurant } from 'src/app/models/restaurant';
import { Table } from 'src/app/models/table';
import { DePrizzaApiService } from 'src/app/services/de-prizza-api.service';

@Component({
  selector: 'app-table-selection',
  templateUrl: './table-selection.component.html',
  styleUrls: ['./table-selection.component.css']
})

export class TableSelectionComponent implements OnInit {

  selectedTable : boolean = false;
  showLoadingSpinner : boolean = false;
  loadingTables : boolean = true;
  users :any = [];

  restaurant = new Restaurant();

  constructor(  
    private readonly dp: DePrizzaApiService,
    private router: Router
  ) {}

  ngOnInit(): void {

    console.log("On init Table Selection");

    setTimeout(() => {
      this.dp.getTables().subscribe((data: any) => {
      
        if (Array.isArray(data)) {
          this.restaurant.tables = data;
          this.loadingTables = false;
          this.restaurant.setImageTable();

          const tablesJson = JSON.stringify(data);
          console.log(tablesJson);
  
        } else {
          alert('Ocurrió un error.Por favor, inténtelo de nuevo.')
        }
        
        console.log("Mesas cargadas :" + data);
        
      })

    }, 3000); 

  }

  selectTable(table : Table) : void {
    
    if(table.status == this.restaurant.available)
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
      //this.showLoadingSpinner = true;
      this.navigateToOrder();

      /*setTimeout(() => {
        
      }, 5000); */
    }

  }

  navigateToOrder() : void  {

    const mesaSeleccionada = this.restaurant.tables.find(table => table.selected);

    const queryParams: any = {};
    queryParams.numeroMesa = mesaSeleccionada!.name;
    queryParams.idMesa = mesaSeleccionada!.id;

    const navigationExtras: NavigationExtras = {
      queryParams
    };
    
    this.router.navigate(['/order'],navigationExtras);

  }


}





