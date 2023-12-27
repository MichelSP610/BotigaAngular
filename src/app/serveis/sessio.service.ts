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
      name: "admin",
      lastName: "",
      email: "nomail@nomail.com",
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

  addUser(user:any, password:any, name:any, lastName:any, email:any) {
    let userPush = {
      username: user,
      password: password,
      name: name,
      lastName: lastName,
      email: email,
    }
    this.users.push(userPush)
    console.log("user pushed")
  }
}
