import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SessioService {

  public users: any[];
  constructor(private router: Router) {
    this.users = [];
    if (localStorage.getItem('users') !== null) {
      this.users = JSON.parse(localStorage['users'])
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
    let userConnected = false;
    for(let i = 0; i < this.users.length && !userConnected; i++) {
      if (user === this.users[i].username) {
        if (password === this.users[i].password) {
          sessionStorage.setItem('userConnected', 'true');
          sessionStorage.setItem('userPos', i+'');
          userConnected = true;
        }
      }
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
    this.users.push(userPush)
    localStorage.setItem('users', JSON.stringify(this.users))
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
