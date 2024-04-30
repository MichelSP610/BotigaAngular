import { Component } from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {SessioService} from "../../serveis/sessio.service";

@Component({
  selector: 'app-administrador',
  standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive
    ],
  templateUrl: './administrador.component.html',
  styleUrl: './administrador.component.css'
})
export class AdministradorComponent {

  constructor( private router: Router) {
    let user = sessionStorage.getItem('username')
    if (user !== 'admin') {
      this.router.navigate([''])
    }
  }

}
