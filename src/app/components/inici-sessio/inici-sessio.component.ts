import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet, Router} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormBuilder} from '@angular/forms';
import {NgForm} from "@angular/forms"
import {SessioService} from "../../serveis/sessio.service";

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

  constructor(private formBuilder: FormBuilder, private sessioService: SessioService, private router: Router) {
    this.input = this.formBuilder.group({
      user: '',
      password: '',
    });
  }

  async onSubmit() {
    if (await this.sessioService.logIn(this.input.value.user, this.input.value.password)) {
      await this.router.navigate([''])
    }
    else {
      this.input.reset();
      this.loginError = document.getElementById("login-error");
      this.loginError.innerHTML = "Usuari o contrasenya incorrectes";
    }
  }
}
