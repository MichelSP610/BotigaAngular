import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {SessioService} from "../../serveis/sessio.service";
import {Router} from "@angular/router";


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
  imatgeForm: any;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private sessioService: SessioService) {
    let user = sessionStorage.getItem('username')
    if (user !== 'admin') {
      this.router.navigate([''])
    }



    this.producto = this.formBuilder.group({
      nom: '',
      descripcio: '',
      preu: 0,
      gust: 'dolç',
      pasta: 'Dura',
      imatge: new FormData()
    });
  }

  handleFile(event: any) {
    console.log(event)
    console.log(event.target.files)
    this.producto.patchValue({imatge:event.target.files[0]});
    this.producto.updateValueAndValidity()
  }

  async onSubmit(value: any) {
    if (this.producto.valid) {
      const productoData = {
        nom: this.producto.value.nom,
        descripcio: this.producto.value.descripcio,
        preu: this.producto.value.preu,
        gust: this.producto.value.gust,
        pasta: this.producto.value.pasta
      };
      //@ts-ignore
      let imatge: File = this.producto.value.imatge
      console.log(imatge.toString())

      this.sessioService.addProduct(productoData, imatge);

      this.producto.reset();
    }
  }

}
