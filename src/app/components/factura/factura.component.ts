import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-factura',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './factura.component.html',
  styleUrl: './factura.component.css'
})
export class FacturaComponent {
  factures: any

  constructor(private http: HttpClient, private router: Router){
    if (sessionStorage.getItem('username') !== 'admin') {
      this.router.navigate([''])
    }
    this.getFactures()
  }

  async getFactures() {
    // this.http.get('http://172.16.9.1:3080/getFactures').subscribe((data) => {

    this.http.get('http://localhost:3080/getFactures').subscribe((data) => {
      //@ts-ignore
      this.factures = data;
      console.log(this.factures)
    })
  }

  getFacturaTotal(factura: any) {
    let preuFinal = 0
    factura.data.forEach((producte: any) => {
      preuFinal += ((producte.detall_preu - (producte.detall_preu * producte.detall_oferta) / 100)) * producte.detall_quantitat;
    })
    return preuFinal;
  }

}
