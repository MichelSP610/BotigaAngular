import {Component, Injectable} from '@angular/core';
import {HttpClient, HttpClientModule, HttpParams} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {firstValueFrom} from "rxjs";
import {CistellaService} from "./cistella.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})

@Component({
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: ``
})

export class SessioService {

  constructor(private http: HttpClient, private router: Router) {
  }

  async logIn(user: any, password:any) {
    console.log("LogIn function triggered")
    let req = {username: user, password: password}
    console.log(req.username, req.password)
    // let check = await firstValueFrom(this.http.get<boolean>('http://172.16.9.1:3080/logIn', {params: req}))
    let check = await firstValueFrom(this.http.get<boolean>('http://localhost:3080/logIn', {params: req}))

    try {
      // @ts-ignore
      await window.ethereum.request({ method: "eth_requestAccounts"}).then((response) => {
        console.log(response)
      })
    } catch (error) {
      check = false;
    }

    let req2 = new HttpParams().set('username', user)

    // if (check && await firstValueFrom(this.http.get<boolean>('http://172.16.9.1:3080/checkValidated', {params: req2}))) {
    if (check && await firstValueFrom(this.http.get<boolean>('http://localhost:3080/checkValidated', {params: req2}))) {
      // this.http.get<any>('http://172.16.9.1:3080/getClientByName', {params: req}).subscribe( (client) => {
      this.http.get<any>('http://localhost:3080/getClientByName', {params: req}).subscribe( (client) => {
        sessionStorage.setItem('username', client.username)
        sessionStorage.setItem('password', client.password)
        this.sendLog(client.username, "Ha iniciat sessió")
      })
    }

    else {check = false}
    return check;
  }

  async logOut() {
    sessionStorage.setItem('username', '')
    sessionStorage.setItem('password', '')
    this.sendLog(sessionStorage.getItem('username'), "Ha tancat la sessio")
    this.router.navigate([''])
  }

  addUser(user:any, password:any, name:any, lastName:any, email:any) {
    let data = {
      username: user,
      password: password,
      name: name,
      lastName: lastName,
      email: email,
    }
    // this.http.post('http://172.16.9.1:3080/addClient', data).subscribe()
    this.http.post('http://localhost:3080/addClient', data).subscribe()
    this.sendLog(user, "S'ha creat l'usuari")
  }

  async userExists(user: any) {
    let req = new HttpParams().set('username', user)
    // return await firstValueFrom(this.http.get<boolean>('http://172.16.9.1:3080/checkUser', {params: req}))
    return await firstValueFrom(this.http.get<boolean>('http://localhost:3080/checkUser', {params: req}))
  }

  async checkUserByEmail(email: any) {
    let req = new HttpParams().set('email', email)
    // return await firstValueFrom(this.http.get<boolean>('http://172.16.9.1:3080/checkUserByEmail', {params: req}))
    return await firstValueFrom(this.http.get<boolean>('http://localhost:3080/checkUserByEmail', {params: req}))
  }

  cambiarDades(user:any, password:any, name:any, lastName:any, email:any) {
    let Userdata = {
      username: user,
      password: password,
      name: name,
      lastName: lastName,
      email: email,
    }
    // this.http.post('http://172.16.9.1:3080/cambiarData', Userdata).subscribe()
    this.http.post('http://localhost:3080/cambiarData', Userdata).subscribe()
  }

  getImageLink(image: any) {
    // return 'http://172.16.9.1:3080/images/' + image;
    return 'http://localhost:3080/images/' + image;
  }

  sendLog(user: any, log: any) {
    // this.http.post('http://172.16.9.1:3080/logs', {user: user, log: log}).subscribe()
    this.http.post('http://localhost:3080/logs', {user: user, log: log}).subscribe()
    window.location.reload();
  }

  enviarCompra(cart: any, moneda: any, total: any, compte: any) {
    // this.http.post('http://172.16.9.1:3080/guardarFactura', {client: sessionStorage.getItem('username'), cart: cart}).subscribe()
    this.http.post('http://localhost:3080/guardarFactura',
      {client: sessionStorage.getItem('username'), cart: cart, moneda: moneda, total: total, compte: compte}).subscribe()
  }

  addProduct(productoData: any) {
    // this.http.post('http://172.16.9.1:3080/agregarProducto', productoData).subscribe(
    this.http.post('http://localhost:3080/agregarProducto', productoData).subscribe(
      response => {
        console.log('Producto agregado correctamente:', response);
      },
      error => {
        console.error('Error al agregar el producto:', error);
      }
    );
  }
}
