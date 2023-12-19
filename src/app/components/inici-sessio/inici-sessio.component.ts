import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-inici-sessio',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './inici-sessio.component.html',
  styleUrl: './inici-sessio.component.css'
})
export class IniciSessioComponent {

}
