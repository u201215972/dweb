import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Table } from '../models/table';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment.development';
import { Kitchen } from '../models/kitchen';

@Injectable({
  providedIn: 'root'
})

export class DePrizzaApiService {

  constructor(private readonly http: HttpClient) { }

  getTables() : Observable<Table>{
    return this.http.get<Table>(`${environment.url}tables`);
  }

  getMenu() : Observable<Kitchen>{
    return this.http.get<Kitchen>(`${environment.url}menu`);
  }

  sendOrder(body:any) {
    return this.http.post(`${environment.url}order`,body);
  }

  checkStatusOrder(order:string)
  {
    return this.http.get(`${environment.url}order/${order}`);
  }

}
