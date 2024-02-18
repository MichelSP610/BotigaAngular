import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet, Router} from "@angular/router";
import {SessioService} from "../../serveis/sessio.service";
import {Form, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-registre',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './registre.component.html',
  styleUrl: './registre.component.css'
})
export class RegistreComponent {

  errorP: any;
  input;
  constructor(private formBuilder: FormBuilder, private sessioService: SessioService, private router: Router) {
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
    if (this.input.value.password === this.input.value.passwordCheck) {
      console.log("password-checked")

      if (await this.sessioService.userExists(this.input.value.user)) {
        this.errorP = document.getElementById("register-error");
        this.errorP.innerHTML = "L'usuari ja existeix";
        this.input.reset();
      }
      else {
        this.sessioService.addUser(
          this.input.value.user,
          this.input.value.password,
          this.input.value.name,
          this.input.value.lastName,
          this.input.value.email
        );
        this.router.navigate(['/login']);
      }

    }
    else {
      this.errorP = document.getElementById("register-error");
      this.errorP.innerHTML = "Les contrasenyes no son iguals";
      this.input.reset();
    }
  }

}
