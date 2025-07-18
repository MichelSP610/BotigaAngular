import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet, Router} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormBuilder} from '@angular/forms';
import {NgForm} from "@angular/forms"
import {SessioService} from "../../serveis/sessio.service";
import {CistellaService} from "../../serveis/cistella.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-inici-sessio',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FormsModule, ReactiveFormsModule],
  templateUrl: './inici-sessio.component.html',
  styleUrl: './inici-sessio.component.css'
})
export class IniciSessioComponent {

  loginError: any;
  input;

  constructor(private formBuilder: FormBuilder, private sessioService: SessioService, private router: Router, private cistellaService: CistellaService, private http: HttpClient) {
    this.input = this.formBuilder.group({
      user: '',
      password: '',
    });
  }

  async onSubmit(formularioData: any) {

    // this.http.post<any>('http://172.16.9.1:3080/guardar-archivo', formularioData)
    this.http.post<any>('http://localhost:3080/guardar-archivo', formularioData)
      .subscribe(
        response => {
          console.log('Respuesta del servidor:', response);
          // Puedes agregar lógica adicional aquí, por ejemplo, mostrar un mensaje de éxito
        },
        error => {
          console.error('Error al enviar el formulario:', error);
          // Puedes agregar lógica adicional aquí, por ejemplo, mostrar un mensaje de error
        }
      );

    if (await this.sessioService.logIn(this.input.value.user, this.input.value.password)) {
      this.cistellaService.setCart();
      await this.router.navigate([''])
    }
    else {
      this.input.reset();
      this.loginError = document.getElementById("login-error");
      this.loginError.innerHTML = "Usuari o contrasenya incorrectes";
    }
  }
}
