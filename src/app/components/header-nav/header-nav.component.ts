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
  constructor(private sessioService: SessioService, private router: Router, private http: HttpClient) {
  }

  ngOnInit() {
  }

  readUserConnection():string {
    let userSession = sessionStorage.getItem('username')
    if (!userSession || userSession === 'false') {
      return 'false'
    } else {
      this.username = userSession
      return 'true';
    }

  }
  logOut() {
    sessionStorage.setItem('userConnected', 'false')
    console.log("user disconnected")
    this.router.navigate([''])
  }
}
