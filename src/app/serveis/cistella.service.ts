import {Injectable} from '@angular/core';
import {SessioService} from "./sessio.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class CistellaService {

  constructor(private sessioService: SessioService, private router: Router) {}
  private user: any;
  private items: any[] = [];

  addToCart(product: any) {
    if (!this.user || this.user === '') {
      this.router.navigate(['/login'])
    }
    else {
      if (!this.itemInCart(product)) {
        this.items.push(product);
      }

      localStorage.setItem(this.user + 'cartItems', JSON.stringify(this.items))
      this.sessioService.sendLog(sessionStorage.getItem('username'), "Ha afegit el producte " + product.name + " a la cistella")
    }

  }

  itemInCart(product: any) {
    for (let i = 0; i < this.items.length; i++) {
      if (product.name == this.items[i].name) {
        return true
      }
    }
    return false
  }

  deleteFromCart(item: any) {
    this.items = this.items.filter((i) => i.id !== item.id)

    localStorage.setItem(this.user + 'cartItems', JSON.stringify(this.items))
    this.sessioService.sendLog(sessionStorage.getItem('username'), "Ha eliminat el producte " + item.name + " de la cistella")
  }

  incrementQuantity(id: number) {
    let item = this.items.find((i) => i.id === id)
    if (item) {
      item.quantity++
      this.sessioService.sendLog(sessionStorage.getItem('username'), "Ha incrementat el numero de " + item.name + " a comprar a " + item.quantity)
    }

    localStorage.setItem(this.user + 'cartItems', JSON.stringify(this.items))
  }

  lowerQuantity(id: number) {
    let item = this.items.find((i) => i.id === id)
    if (item && item.quantity > 1) {
      item.quantity--
      this.sessioService.sendLog(sessionStorage.getItem('username'), "Ha reduit el numero de " + item.name + " a comprar a " + item.quantity)
    }

    localStorage.setItem(this.user + 'cartItems', JSON.stringify(this.items))
  }

  getTotal() {
    return this.items.reduce((acc, item) => {
      return acc + item.price * item.quantity
    }, 0)
  }

  deleteCart() {
    this.items = []

    localStorage.setItem(this.user + 'cartItems', JSON.stringify(this.items))
    this.sessioService.sendLog(sessionStorage.getItem('username'), "Ha realitzat la compra de la cistella")
  }

  getItems() {
    return this.items;
  }

  setCart() {
    this.items = JSON.parse(localStorage.getItem(this.user + 'cartItems') || '[]')
  }

  setCartData() {
    this.user = sessionStorage.getItem('username')
    this.items = JSON.parse(localStorage.getItem(this.user + 'cartItems') || '[]')
  }
}
