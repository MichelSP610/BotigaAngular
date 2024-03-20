import { Component } from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {HttpClient} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {RecaptchaModule} from "ng-recaptcha";
import {Router} from "@angular/router";
import {NgIf} from "@angular/common";
@Component({
  selector: 'app-contacte',
  standalone: true,
  imports: [
    FormsModule, RecaptchaModule, NgIf
  ],
  templateUrl: './contacte.component.html',
  styleUrl: './contacte.component.css'
})
export class ContacteComponent {
  recaptcha: string | null | undefined;
  onResolved(captchaResponse: string | null){
    this.recaptcha=captchaResponse;
    console.log(this.recaptcha);
  }

  constructor(private http: HttpClient, private router: Router) { }

  onSubmit(formularioData: any) {
    // Realizar la solicitud POST al servidor
    this.http.post<any>('http://172.16.9.1:3080/guardar-archivo', formularioData)
    //this.http.post<any>('http://localhost:3080/guardar-archivo', formularioData)
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
    this.router.navigate([''])
  }

}
