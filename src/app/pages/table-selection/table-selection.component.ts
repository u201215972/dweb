import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-selection',
  templateUrl: './table-selection.component.html',
  styleUrls: ['./table-selection.component.css']
})
export class TableSelectionComponent {

  tableSilhouetteRed : string = 'assets/img/silueta_mesa_rojo.png';
  tableSilhouetteGray : string = 'assets/img/silueta_mesa_gris.png';
  tableSilhouetteGreen : string = 'assets/img/silueta_mesa_verde.png';

  available : string = 'disponible';
  bussy : string = 'ocupado'

  selectedTable : boolean = false;

  silhouettes = [
    { number :1,path: this.tableSilhouetteRed, color: 'rojo',state:this.available,selected :false},
    { number :2,path: this.tableSilhouetteGray, color: 'gris',state:this.bussy,selected : false},
    { number :3,path: this.tableSilhouetteRed, color: 'rojo',state:this.available,selected :false},
    { number :4,path: this.tableSilhouetteGray, color: 'gris',state:this.bussy,selected :false},
    { number :5,path: this.tableSilhouetteRed, color: 'rojo',state:this.available,selected :false},
    { number :6,path: this.tableSilhouetteGray, color: 'gris',state:this.bussy,selected :false},
    { number :7,path: this.tableSilhouetteRed, color: 'rojo',state:this.available,selected :false},
    { number :8,path: this.tableSilhouetteRed, color: 'rojo',state:this.available,selected :false},
    { number :9,path: this.tableSilhouetteGray, color: 'gris',state:this.bussy,selected :false},
    { number :10,path: this.tableSilhouetteGray,color: 'rojo',state:this.bussy,selected :false},
    { number :11,path: this.tableSilhouetteRed,color: 'gris',state:this.available,selected :false},
    { number :12,path: this.tableSilhouetteGray,color: 'gris',state:this.bussy,selected :false},
  ];

  constructor(private router: Router) {}

  selectTable(table :  {number: number;path: string;color: string;state: string;selected: boolean;}) : void {
    
    if(table.state == this.available)
    {
      table.selected = !table.selected;
      table.path = table.selected ? this.tableSilhouetteGreen : this.tableSilhouetteRed;
      this.selectedTable = this.silhouettes.some(m => m.selected);
    }
   
  }

  getSelectedNumber() : void {

    //this.silhouettes.some()
    const mesaSeleccionada = this.silhouettes.find(table => table.selected);

    if (mesaSeleccionada) {
      //alert(`Número de mesa seleccionada: ${mesaSeleccionada.number}`);
      this.navigateToOrder();
    }

  }

  navigateToOrder() : void  {
    this.router.navigate(['/order']);
  }


}





