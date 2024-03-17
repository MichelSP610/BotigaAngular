import {Injectable} from '@angular/core';
import {SessioService} from "./sessio.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class CistellaService {

  constructor(private sessioService: SessioService, private router: Router) {}
  private user = sessionStorage.getItem('username')
  private items: any[] = JSON.parse(localStorage.getItem(this.user + 'cartItems') || '[]');

  addToCart(product: any) {
    let user = sessionStorage.getItem('username')
    if (!user || user === '') {
      this.router.navigate(['/login'])
    }
    this.items.push(product);

    localStorage.setItem(user + 'cartItems', JSON.stringify(this.items))
    this.sessioService.sendLog(sessionStorage.getItem('username'), "Ha afegit el producte " + product.name + " a la cistella")
  }

  deleteFromCart(item: any) {
    let user = sessionStorage.getItem('username')
    this.items = this.items.filter((i) => i.id !== item.id)

    localStorage.setItem(user + 'cartItems', JSON.stringify(this.items))
    this.sessioService.sendLog(sessionStorage.getItem('username'), "Ha eliminat el producte " + item.name + " de la cistella")
  }

  incrementQuantity(id: number) {
    let user = sessionStorage.getItem('username')
    let item = this.items.find((i) => i.id === id)
    if (item) {
      item.quantity++
      this.sessioService.sendLog(sessionStorage.getItem('username'), "Ha incrementat el numero de " + item.name + " a comprar a " + item.quantity)
    }

    localStorage.setItem(user + 'cartItems', JSON.stringify(this.items))
  }

  lowerQuantity(id: number) {
    let user = sessionStorage.getItem('username')
    let item = this.items.find((i) => i.id === id)
    if (item && item.quantity > 1) {
      item.quantity--
      this.sessioService.sendLog(sessionStorage.getItem('username'), "Ha reduit el numero de " + item.name + " a comprar a " + item.quantity)
    }

    localStorage.setItem(user + 'cartItems', JSON.stringify(this.items))
  }

  getTotal() {
    return this.items.reduce((acc, item) => {
      return acc + item.price * item.quantity
    }, 0)
  }

  deleteCart() {
    let user = sessionStorage.getItem('username')
    this.items = []

    localStorage.setItem(user + 'cartItems', JSON.stringify(this.items))
    this.sessioService.sendLog(sessionStorage.getItem('username'), "Ha realitzat la compra de la cistella")
    this.router.navigate([''])
  }

  getItems() {
    return this.items;
  }

  setCart() {
    let user = sessionStorage.getItem('username')
    this.items = JSON.parse(localStorage.getItem(user + 'cartItems') || '[]')
  }
}
