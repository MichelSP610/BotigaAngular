import {Component, Injectable} from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";

@Injectable({
  providedIn: 'root'
})

@Component({
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, CommonModule, HttpClientModule],
  template: ``
})
export class SessioService {

  public users: any[];
  constructor(private router: Router, private http: HttpClient) {
    this.users = [];
    if (localStorage.getItem('users') !== null) {
      this.users = JSON.parse(localStorage['users']);
    }
    else {
      this.users = [];
      let user = {
        username: "admin",
        password: "patata",
        name: "admin",
        lastName: "",
        email: "nomail@nomail.com",
      };
      this.users.push(user);
    }
  }

  logIn(user: any, password:any) {
    let req = {username: user, password: password}
    try {
      this.http.get<any>('http://localhost:3080/getClientByName', {params: req}).subscribe( (client) => {
        sessionStorage.setItem('username', client.username)
        sessionStorage.setItem('password', client.password)
      })
      return true;
    }
    catch (error) {
      return false;
    }
  }

  addUser(user:any, password:any, name:any, lastName:any, email:any) {
    let userPush = {
      username: user,
      password: password,
      name: name,
      lastName: lastName,
      email: email,
    }
    this.users.push(userPush);
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  userExists(user: any) {
    let userExists = false;
    for (let i = 0; i < this.users.length && !userExists; i++) {
      if (user === this.users[i].username) {
        userExists = true;
      }
    }
    return userExists;
  }

  getUserName(userPos: any) {
    userPos = Number(userPos)
    return this.users[userPos].name;
  }
}
