import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-perfil-usuari',
  standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterLink,
        RouterLinkActive
    ],
  templateUrl: './perfil-usuari.component.html',
  styleUrl: './perfil-usuari.component.css'
})
export class PerfilUsuariComponent {

}
