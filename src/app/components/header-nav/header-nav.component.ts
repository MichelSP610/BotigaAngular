import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-header-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.css'
})
export class HeaderNavComponent {

}
