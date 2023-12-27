import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-header-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, CommonModule],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.css'
})
export class HeaderNavComponent {

  username: any;
  constructor() {

  }

  ngOnInit() {
  }

  readUserConnection():string {
    let userSession = sessionStorage.getItem('userConnected')
    console.log(userSession)
    if (!userSession) {
      return 'false'
    } else {
      this.username = sessionStorage.getItem('username')
      return 'true';
    }

  }
}
