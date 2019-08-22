import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  apiURL =
    'https://listing-stg.services.teko.vn/api/search/?channel=pv_showroom&visitorId=&q=&terminal=CP01';
  constructor(private httpClient: HttpClient) { }
  getProductList(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiURL}`);
  }
}
