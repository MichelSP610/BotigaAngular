import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  constructor(private http: HttpClient) { }

  getCurrency(currency: string) {
    return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/${currency}`);
  }
}
