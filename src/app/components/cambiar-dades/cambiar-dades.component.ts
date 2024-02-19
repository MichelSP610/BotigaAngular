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
      user: '',
      password: '',
      name: '',
      lastName: '',
      email: '',
      passwordCheck: '',
    });
  }

  async onSubmit() {
    if (await this.sessioService.userExists(this.input.value.user)) {
      this.errorP = document.getElementById("register-error");
      this.errorP.innerHTML = "L'usuari ja existeix";
      this.input.reset();
    }
    else {
      this.sessioService.cambiarDades(
        this.input.value.user,
        this.input.value.password,
        this.input.value.name,
        this.input.value.lastName,
        this.input.value.email
      );
      this.router.navigate(['/login']);
    }
  }
}
