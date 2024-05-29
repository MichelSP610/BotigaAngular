import { Component, NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-informacio-transaccions',
  standalone: true,
  imports: [HttpClientModule, NgForOf],
  templateUrl: './informacio-transaccions.component.html',
  styleUrl: './informacio-transaccions.component.css'
})
export class InformacioTransaccionsComponent {
  private baseUrl: string = 'https://api-testnet.bscscan.com/api';
  private apiKey: string = 'T9ESZJA17KWI89UFNZ5UW63ZT1ZQV2XHP9';
  private serverWalletAddress: string = '0x349A39B4660Fb4b4a41a2592390F9E3BCddb72c3';

  results: any;
  monedes: any;

  constructor(private http: HttpClient) {
    this.getInfoTransaccions().then((data: any) => {
      this.results = data.result
    })
    this.getMonedes().then((data) => {
      this.monedes = data;
      console.log(this.monedes)
    })
  }

  getInfoTransaccions(){
    let url = this.baseUrl +
      '?module=account&action=txlist&address=' + this.serverWalletAddress +
      '&startnblock=0' +
      '&endblock=99999999' +
      '&sort=desc' +
      '&apiKey=' + this.apiKey

    let promise = new Promise((resolve, reject) => {
      this.http.get(url).subscribe({
        next: (data) => {resolve(data)}
      })
    })

    return promise
  }

  toDate(timestamp: number) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString();
  }

  getMonedes() {
    let promise = new Promise((resolve, reject) => {
      this.http.get('http://localhost:3080/getVentesCoin').subscribe((data) => {
        resolve(data)
      })
    })

    return promise;
  }

  getMoneda(index: number) {
    console.log(this.monedes.length)
    if (index >= this.monedes.length) {
      return ''
    } else {
      return this.monedes[index].factura_moneda;
    }
  }

}
