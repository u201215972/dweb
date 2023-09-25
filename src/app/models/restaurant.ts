import { Table } from "./table";

export class Restaurant
{
  tableSilhouetteRed : string = 'assets/img/silueta_mesa_rojo.png';
  tableSilhouetteGray : string = 'assets/img/silueta_mesa_gris.png';
  tableSilhouetteGreen : string = 'assets/img/silueta_mesa_verde.png';

  available : string = 'A';
  bussy : string = 'B'

  tables : Table [] = [
    { id : "1" ,name :1,persons:2,path: this.tableSilhouetteRed, color: 'rojo',status:this.available,selected :false},
    { id : "1" , name :2,persons:4,path: this.tableSilhouetteGray, color: 'gris',status:this.bussy,selected : false},
    { id : "1" , name :3,persons:6,path: this.tableSilhouetteRed, color: 'rojo',status:this.available,selected :false},
    { id : "1" , name :4,persons : 2, path: this.tableSilhouetteGray, color: 'gris',status:this.bussy,selected :false},
    { id : "1" , name :5,persons : 4, path: this.tableSilhouetteRed, color: 'rojo',status:this.available,selected :false},
    { id : "1" , name :6,persons : 2, path: this.tableSilhouetteGray, color: 'gris',status:this.bussy,selected :false},
    { id : "1" , name :7,persons : 6, path: this.tableSilhouetteRed, color: 'rojo',status:this.available,selected :false},
    { id : "1" , name :8,persons : 1, path: this.tableSilhouetteRed, color: 'rojo',status:this.available,selected :false},
    { id : "1" , name :9,persons : 4, path: this.tableSilhouetteGray, color: 'gris',status:this.bussy,selected :false},
    { id : "1" , name :10,persons: 2,path: this.tableSilhouetteGray,color: 'rojo',status:this.bussy,selected :false},
    { id : "1" , name :11,persons: 6,path: this.tableSilhouetteRed,color: 'gris',status:this.available,selected :false},
    { id : "1" , name :12,persons: 1,path: this.tableSilhouetteGray,color: 'gris',status:this.bussy,selected :false},
  ];

  setImageTable() : void
  {
    for (let index = 0; index < this.tables.length; index++) {

      this.tables[index].path = this.tables[index].status == this.available ? this.tableSilhouetteRed : this.tableSilhouetteGray;
      
    }
  }

}