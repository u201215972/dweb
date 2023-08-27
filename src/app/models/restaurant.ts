import { Table } from "./table";

export class Restaurant
{
    tableSilhouetteRed : string = 'assets/img/silueta_mesa_rojo.png';
    tableSilhouetteGray : string = 'assets/img/silueta_mesa_gris.png';
    tableSilhouetteGreen : string = 'assets/img/silueta_mesa_verde.png';

    available : string = 'disponible';
    bussy : string = 'ocupado'
  
    tables : Table [] = [
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

}