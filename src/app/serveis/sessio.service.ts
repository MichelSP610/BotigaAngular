import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessioService {

  public users: any[];
  constructor() {
    this.users = [];
    let user = {
      username: "admin",
      password: "patata",
    };
    this.users.push(user);
  }

  logIn(user: any, password:any) {
    let userConnected = false;
    for(let i = 0; i < this.users.length && !userConnected; i++) {
      if (user === this.users[i].username) {
        if (password === this.users[i].password) {
          sessionStorage.setItem('userConnected', 'true');
          sessionStorage.setItem('username', user);
          userConnected = true;

        }
      }
    }
  }

  addUser() {
  }
}
