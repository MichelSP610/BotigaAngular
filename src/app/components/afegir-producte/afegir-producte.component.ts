import { Component } from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {SessioService} from "../../serveis/sessio.service";


@Component({
  selector: 'app-afegir-producte',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './afegir-producte.component.html',
  styleUrl: './afegir-producte.component.css'
})
export class AfegirProducteComponent {
  producto;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private sessioService: SessioService) {
    this.producto = this.formBuilder.group({
      nom: '',
      descripcio: '',
      preu: 0,
      gust: 'dolç',
      pasta: 'Dura',
      imatge: null,
    });
  }

  async onSubmit(value: any) {
    if (this.producto.valid) {
      const productoData = {
        nom: this.producto.value.nom,
        descripcio: this.producto.value.descripcio,
        preu: this.producto.value.preu,
        gust: this.producto.value.gust,
        pasta: this.producto.value.pasta,
        imatge: this.producto.value.imatge
      };

      this.sessioService.addProduct(productoData);
    }
  }

}
