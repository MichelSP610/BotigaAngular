import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {SessioService} from "../../serveis/sessio.service";

@Component({
  selector: 'app-header-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, CommonModule],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.css'
})
export class HeaderNavComponent {

  username: any;
  constructor(private sessioService: SessioService) {

  }

  ngOnInit() {
  }

  readUserConnection():string {
    let userSession = sessionStorage.getItem('userConnected')
    if (!userSession || userSession === 'false') {
      return 'false'
    } else {
      this.username = this.sessioService.getUserName(sessionStorage.getItem('userPos'))
      return 'true';
    }

  }
  logOut() {
    sessionStorage.setItem('userConnected', 'false')
    console.log("user disconnected")
  }
}
