import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
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

  user: any;
  password: any;

  input;

  constructor(private formBuilder: FormBuilder, private sessioService: SessioService) {
    this.user = "";
    this.password = ""
    this.input = this.formBuilder.group({
      user: '',
      password: '',
    });
  }

  onSubmit() {
    this.sessioService.logIn(this.input.value.user, this.input.value.password);
  }

}
