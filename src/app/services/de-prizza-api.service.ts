import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Table } from '../models/table';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';
import { Pizza } from '../models/pizza.model';

@Injectable({
  providedIn: 'root'
})
export class DePrizzaApiService {

  constructor(private readonly http: HttpClient) { }

  getTables() : Observable<Table>{
    return this.http.get<Table>(`${environment.url}tables/list`);
  }

  getProducts() : Observable<Pizza>{
    return this.http.get<Pizza>(`${environment.url}products/`);
  }

  sendOrder(body:any) {
    return this.http.post(`${environment.url}products/`,body);
  }


}
