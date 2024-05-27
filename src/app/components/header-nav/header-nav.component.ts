import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive, RouterOutlet, Router} from "@angular/router";
import {SessioService} from "../../serveis/sessio.service";
import {HttpClient, HttpClientModule, HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-header-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, CommonModule, HttpClientModule],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.css'
})
export class HeaderNavComponent {

  username: any;
  logoImg: any;
  usuariImg: any;
  constructor(private sessioService: SessioService, private router: Router, private http: HttpClient) {
    this.logoImg = this.sessioService.getImageLink('LOGO.png')
    this.usuariImg = this.sessioService.getImageLink('usuariPerfil.png')

    //@ts-ignore
    window.ethereum.on("accountsChanged", (accounts) => {
      // @ts-ignore
      console.log(accounts)
      if (accounts.length == 0) {
        console.log("Disconnected")
        this.sessioService.logOut();
      }
    })
  }

  ngOnInit() {
  }

  isAdmin() {
    let userSession = sessionStorage.getItem('username')
    if (userSession === 'admin') {
      return true;
    }
    return false;
  }

  readUserConnection():string {
    let userSession = sessionStorage.getItem('username')
    if (!userSession || userSession === '') {
      return 'false'
    } else {
      this.username = userSession
      return 'true';
    }

  }
  logOut() {
    this.sessioService.logOut();
  }
}
