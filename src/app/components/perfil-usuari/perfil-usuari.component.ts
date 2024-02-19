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
  lastname: any;

  constructor(private sessioService: SessioService, private http: HttpClient) {
    let user = sessionStorage.getItem('username');
    let password = sessionStorage.getItem('password');

    if (user && password) {
      let req = {username: user, password: password};

      this.http.get<any>('http://localhost:3080/getClientByName', {params: req}).subscribe((client) => {
        console.log('Respuesta del servidor:', client);

        sessionStorage.setItem('username', client.username);
        sessionStorage.setItem('password', client.password);
        sessionStorage.setItem('email', client.email);
        sessionStorage.setItem('name', client.name);
        sessionStorage.setItem('lastname', client.lastname);

        // Asigna los valores a las propiedades del componente
        this.username = client.username;
        this.password = client.password;
        this.email = client.email;
        this.name = client.name;
        this.lastname = client.lastname;
      });
    }
  }

  ngOnInit() {
    console.log(this.username)
  }


  readUserConnection():string {
    let userSession = sessionStorage.getItem('userConnected')
    if (!userSession || userSession === 'false') {
      return 'false'
    } else {
      this.username = this.sessioService.getUserName(sessionStorage.getItem('userPos'))
      return 'true';
    }
  }

}
