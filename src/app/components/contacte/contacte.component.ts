import { Component } from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {RecaptchaModule} from "ng-recaptcha";

@Component({
  selector: 'app-contacte',
  standalone: true,
  imports: [RecaptchaModule],
  templateUrl: './contacte.component.html',
  styleUrl: './contacte.component.css'
})
export class ContacteComponent {
  recaptcha: string | null | undefined;
  onResolved(captchaResponse: string | null){
    this.recaptcha=captchaResponse;
    console.log(this.recaptcha);
  }

}
