import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
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

  input;
  constructor(private formBuilder: FormBuilder, private sessioService: SessioService) {
    this.input = this.formBuilder.group({
      user: '',
      password: '',
      name: '',
      lastName: '',
      email: '',
      passwordCheck: '',
    });
  }

  onSubmit() {
    if (this.input.value.password === this.input.value.passwordCheck) {
      console.log("password-checked")
      this.sessioService.addUser(
        this.input.value.user,
        this.input.value.password,
        this.input.value.name,
        this.input.value.lastName,
        this.input.value.email
      );
    }
  }

}
