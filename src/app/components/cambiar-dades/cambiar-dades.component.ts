import { Component } from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {SessioService} from "../../serveis/sessio.service";
import {ReactiveFormsModule} from "@angular/forms";
import {FormBuilder} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-cambiar-dades',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './cambiar-dades.component.html',
  styleUrl: './cambiar-dades.component.css'
})
export class CambiarDadesComponent {
  errorP: any;
  input;
  constructor(private formBuilder: FormBuilder,private sessioService: SessioService, private http: HttpClient,  private router: Router) {
    this.input = this.formBuilder.group({
      password: '',
      name: '',
      lastName: '',
      email: '',
      passwordCheck: '',
    });
  }

  async onSubmit() {
      this.sessioService.cambiarDades(
        sessionStorage.getItem('username'),
        this.input.value.password,
        this.input.value.name,
        this.input.value.lastName,
        this.input.value.email
      );
      sessionStorage.setItem('username', '')
      sessionStorage.setItem('password', '')
      this.router.navigate(['/login'])

  }
}
