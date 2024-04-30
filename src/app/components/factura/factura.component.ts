import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-factura',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './factura.component.html',
  styleUrl: './factura.component.css'
})
export class FacturaComponent {
  factures = []

  constructor(private http: HttpClient){
    this.getFactures().then((data) => {
      //@ts-ignore
      this.factures = data;
    })
  }

  async getFactures() {
    this.http.get('http://localhost:3080/getFactures').subscribe((data) => {
      return data;
    })
  }

}
