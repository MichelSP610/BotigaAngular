import {Component, Injectable} from '@angular/core';
import {HttpClient, HttpClientModule, HttpParams} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {firstValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})

@Component({
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: ``
})

export class SessioService {

  public Check: boolean = false;

  constructor(private http: HttpClient) {
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
    let data = {
      username: user,
      password: password,
      name: name,
      lastName: lastName,
      email: email,
    }
    this.http.post('http://localhost:3080/addClient', data).subscribe()
  }

  async userExists(user: any) {
    let req = new HttpParams().set('username', user)
    return await firstValueFrom(this.http.get<boolean>('http://localhost:3080/checkUser', {params: req}))
  }
}
