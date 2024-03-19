import {Component, inject} from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {CistellaService} from "../../serveis/cistella.service";
import {CurrencyPipe, NgForOf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cistella',
  standalone: true,
  imports: [FooterComponent, CurrencyPipe, NgForOf],
  templateUrl: './cistella.component.html',
  styleUrl: './cistella.component.css'
})
export class CistellaComponent {
  cartService = inject(CistellaService)

  constructor(private router: Router) {
    let checkUser = sessionStorage.getItem('username')
    if (!checkUser || checkUser === '') {
      this.router.navigate(['/login'])
    }
    else if (this.cartService.getItems().length === 0) {
      this.router.navigate(['/cataleg'])
    }
    else {this.cartService.setCartData()}
  }

  deleteFromCart(item: any) {
    this.cartService.deleteFromCart(item)
    if(this.cartService.getItems().length === 0) {
      this.router.navigate(['/cataleg'])
    }
  }
  trackByProductId(product: any): number {
    return product.id;
  }
}
