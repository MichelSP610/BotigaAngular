import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { SessioService } from "../../serveis/sessio.service";
import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule, HttpParams } from "@angular/common/http";

@Component({
  selector: 'app-perfil-usuari',
  standalone: true,
    imports: [
        RouterOutlet,
        CommonModule,
        RouterLink,
        RouterLinkActive,
        HttpClientModule
    ],
  templateUrl: './perfil-usuari.component.html',
  styleUrl: './perfil-usuari.component.css'
})
export class PerfilUsuariComponent {

  username: any;
  password: any;
  email: any;
  name: any;
  lastName: any;

  constructor(private sessioService: SessioService, private http: HttpClient) {
    let user = sessionStorage.getItem('username');
    let password = sessionStorage.getItem('password');

    if (user !== null && password !== null) {
      let req = {username: user, password: password};
      this.http.get<any>('http://localhost:3080/getClientByName', {params: req}).subscribe((client) => {
        // Asigna los valores a las propiedades del componente
        this.username = client.username;
        this.password = client.password;
        this.email = client.email;
        this.name = client.name;
        this.lastName = client.lastName;
      });
    }
  }

  ngOnInit() {
  }

}
