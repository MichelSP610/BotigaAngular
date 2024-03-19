import { Component } from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {HttpClient} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-contacte',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './contacte.component.html',
  styleUrl: './contacte.component.css'
})
export class ContacteComponent {

  constructor(private http: HttpClient) { }

  onSubmit(formularioData: any) {
    // Realizar la solicitud POST al servidor
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
  }

}
