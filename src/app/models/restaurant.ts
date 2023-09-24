import { Table } from "./table";

export class Restaurant
{
    tableSilhouetteRed : string = 'assets/img/silueta_mesa_rojo.png';
    tableSilhouetteGray : string = 'assets/img/silueta_mesa_gris.png';
    tableSilhouetteGreen : string = 'assets/img/silueta_mesa_verde.png';

    available : string = 'disponible';
    bussy : string = 'ocupado'
  
    tables : Table [] = [
      { number :1,persons:2,path: this.tableSilhouetteRed, color: 'rojo',state:this.available,selected :false},
      { number :2,persons:4,path: this.tableSilhouetteGray, color: 'gris',state:this.bussy,selected : false},
      { number :3,persons:6,path: this.tableSilhouetteRed, color: 'rojo',state:this.available,selected :false},
      { number :4,persons : 2, path: this.tableSilhouetteGray, color: 'gris',state:this.bussy,selected :false},
      { number :5,persons : 4, path: this.tableSilhouetteRed, color: 'rojo',state:this.available,selected :false},
      { number :6,persons : 2, path: this.tableSilhouetteGray, color: 'gris',state:this.bussy,selected :false},
      { number :7,persons : 6, path: this.tableSilhouetteRed, color: 'rojo',state:this.available,selected :false},
      { number :8,persons : 1, path: this.tableSilhouetteRed, color: 'rojo',state:this.available,selected :false},
      { number :9,persons : 4, path: this.tableSilhouetteGray, color: 'gris',state:this.bussy,selected :false},
      { number :10,persons: 2,path: this.tableSilhouetteGray,color: 'rojo',state:this.bussy,selected :false},
      { number :11,persons: 6,path: this.tableSilhouetteRed,color: 'gris',state:this.available,selected :false},
      { number :12,persons: 1,path: this.tableSilhouetteGray,color: 'gris',state:this.bussy,selected :false},
    ];

}