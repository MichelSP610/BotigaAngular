import {Component, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HeaderNavComponent} from "./components/header-nav/header-nav.component";
import {FooterComponent} from "./components/footer/footer.component";
import {CatalegComponent} from "./components/cataleg/cataleg.component";
import { FiltreGaletesPipe} from "./components/pipes/filtre-galetes.pipe";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderNavComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Botiga';
}
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule,
    FormsModule,
  ],
  bootstrap: [AppComponent],

})
export class AppModule{}

