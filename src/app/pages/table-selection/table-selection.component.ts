import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-selection',
  templateUrl: './table-selection.component.html',
  styleUrls: ['./table-selection.component.css']
})
export class TableSelectionComponent {

  constructor(private router: Router) {}

  navegarAOrdenarPedido() : void  {
    this.router.navigate(['/order']);
  }
}





