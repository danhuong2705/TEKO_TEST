import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  apiURL =
    'https://listing-stg.services.teko.vn/api/products/';
  constructor(private httpClient: HttpClient) {}
  getProductDetail(sku: string): Observable<any> {
    return this.httpClient.get<any>(`${this.apiURL}${sku}`);
  }

}
