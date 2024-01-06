import {Component, inject} from '@angular/core';
import {FooterComponent} from "../footer/footer.component"
import {CistellaService} from "../../serveis/cistella.service";
import {CurrencyPipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-cataleg',
  standalone: true,
  imports: [FooterComponent, NgForOf, CurrencyPipe],
  templateUrl: './cataleg.component.html',
  styleUrl: './cataleg.component.css'
})
export class CatalegComponent {
  cartService = inject(CistellaService)

  products: any[] = [
    {name: 'Galetes de llet condensada', id: 1, quantity: 1, image: 'assets/condensed-milk-cookies.jpg', price: 9.99, description: '1kg de galetes de llet condensada de la marca Fornais'},
    {name: 'Galetes de chocolata', id: 2, quantity: 1, image: 'assets/chocolate-chip-cookies.jpg', price: 12.99, description: '1kg de galetes de chocolata de la marca Fornais'},
    {name: 'Galetes de integrals', id: 3, quantity: 1, image: 'assets/integral-cookies.jpg', price: 14.99, description: '1kg de galetes itegrals de la marca Fornais'},
    {name: 'Galetes de llet condensada', id: 4, quantity: 1, image: 'assets/condensed-milk-cookies.jpg', price: 9.99, description: '1kg de galetes de llet condensada de la marca Fornais'},
    {name: 'Galetes de chocolata', id: 5, quantity: 1, image: 'assets/chocolate-chip-cookies.jpg', price: 12.99, description: '1kg de galetes de chocolata de la marca Fornais'},
    {name: 'Galetes de integrals', id: 6,  quantity: 1, image: 'assets/integral-cookies.jpg', price: 14.99, description: '1kg de galetes itegrals de la marca Fornais'}
  ];

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }

  trackByProductId(product: any): number {
    return product.id;
  }


}
