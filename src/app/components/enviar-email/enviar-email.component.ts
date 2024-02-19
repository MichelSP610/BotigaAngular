import { Component, ElementRef } from '@angular/core';
import {ReactiveFormsModule, FormBuilder, FormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {SessioService} from "../../serveis/sessio.service";

@Component({
  selector: 'app-enviar-email',
  standalone: true,
    imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
    ],
  templateUrl: './enviar-email.component.html',
  styleUrl: './enviar-email.component.css'
})
export class EnviarEmailComponent {

  input
  popup: any;
  emailError: any;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private el: ElementRef, private sessioService: SessioService) {
    this.input = this.formBuilder.group({
      email: ''
    });
  }
  showPopup() {
    let popup = this.el.nativeElement.querySelector("#myPopup");
    popup.classList.toggle("show");
  }

  async onSubmit() {
    if (await this.sessioService.checkUserByEmail(this.input.value.email)) {
      let data = {email: this.input.value.email}
      //this.http.post('http://172.16.9.1:3080/sendEmail', data).subscribe()
      this.http.post('http://localhost:3080/sendEmail', data).subscribe()
      this.input.reset();
      this.showPopup()
    }
    else {
      this.input.reset();
      this.emailError = document.getElementById("email-error");
      this.emailError.innerHTML = "Usuari o contrasenya incorrectes";
    }
  }

}
